/**
 * 公共ajax
 * */

export default {
    /**
       * 基础工具---组合URL参数
       * @param params
       * @returns {string}
       */
    getParamsStr: function (params) {
      var paramStr = '';
  
      if (params) {
        for (var k in params) {
          if (k && params[k] != null) {
            var sParaVal = '';
  
            if (typeof params[k] === 'string' || typeof params[k] === 'number') {
              sParaVal = params[k];
            } else if (typeof params[k] === 'object') {
              sParaVal = JSON.stringify(params[k]);
            }
            paramStr += '&' + k + '=' + sParaVal;
          }
        }
      }
      if (paramStr) {
        paramStr = '?' + paramStr.substring(1);
      }
      return paramStr;
    },
    /**
       * 获取安全字符串
       * */
    getSafeStr:function (str) {
        // eslint-disable-next-line no-useless-escape
      str = str.replace(/<script[^>]*>|<\/script>|<iframe[^>]*>|<\/a>|<div[^>]*>|<\/div>|<body[^>]*>|<layer[^>]*>|<\/layer>|<a[^>]*>|<svg[^>]*>|eval\([^\)]*\)|<object[^>]*>|<input[^>]*>|<style[^>]*>|<form[^>]*>|<plaintext[^>]*>|<embet[^>]*>|onclick\s*=|onerror\s*=|onabort\s*=|onblur\s*=|onchange\s*=|ondblclick\s*=|onfocus\s*=|onkeydown\s*=|onkeypress\s*=|onkeyup\s*=|onload\s*=|onmousedown\s*=|onmousemove\s*=|onmouseout\s*=|onmouseover\s*=|onmouseup\s*=|onreset\s*=|onresize\s*=|onselect\s*=|onsubmit\s*=|onunload\s*=|javascript:|alert\([^\)]*\)/igm,''); //去掉不安全字符串
      return str;
    },
    /**
       * 格式化ajax数据
       * */
    getAjaxFormatData:function (obj) {
      var t = this;
      var newData = '';
      var sType = typeof obj;
  
      if (sType === 'string') {
        newData = obj;
      } else {
        newData = JSON.stringify(obj);
      }
  
      newData = t.getSafeStr(newData); //去掉特殊字符
  
      if (sType === 'string') {
        obj = newData;
      } else {
        obj = JSON.parse(newData);
      }
      return obj;
    },
    /**
       * 基础ajax提交参数封装
       * @options Object ajax参数
       * @options.isPassFalse  Boolean 是否允许通过data.result == 'false'的情况
       * */
    ajax: function (option) {
      var t = this;
      var def = $.Deferred();
  
      //请求数据防xss攻击处理
      if (typeof option.contentType !== 'boolean' && option.data) {
        option.data = t.getAjaxFormatData(option.data);
      }
  
      //默认参数
      var data = {
        type: 'post',
        dataType: 'json',
        contentType: 'application/json;charset=UTF-8',
        //跨域请求带cookie
        xhrFields: {
          withCredentials: true
        },
        headers:{
          ddh:gMain.sDdh, //添加请求头拦截日志用
          corpId:gMain.corpId
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
          if (XMLHttpRequest.readyState == 4) {
            t.showErrorMsg('请求出错，请重试'); //给个错误提示
          }
        }
      };
  
      $.extend(data, option);
      //重写success，如果传回的data.result值为true,才产生回调，供模块使用
      data.success = function (obj, textStatus, jqXHR) {
        //返回数据防xss攻击处理
        if (obj) {
          obj = t.getAjaxFormatData(obj);
        }
        if (data.dataType == 'html') {
          obj = JSON.parse(obj);
        }
  
        //如果会话超时
        if (obj.retCode == 104) {
          t.sessionTimeOut(data,obj.data);
          return false;
        }
  
        //如果后端返回的错误统一拦截提示
        if ((obj.result == 'false' || obj.result === false) && !option.isPassFalse) {
          var currentHref = window.location.href;
  
          currentHref = encodeURIComponent(currentHref);
          var statusCode = obj.statusCode;
  
          if (statusCode && statusCode.indexOf('skeleton-price-2') > -1) {
            var productName = $.cookie('Product-Name');
  
            if(productName){
              window.location.href=gMain.DayHRDomains.sOpenDomain + 'views/skeleton/#!/buy?productname='+productName+'&oldurl='+currentHref;
              return false;
            }
          }
          obj.resultDesc && t.showErrorMsg(obj.resultDesc); //给个错误提示
        }
        typeof option.success === 'function' && option.success(obj, textStatus, jqXHR);
        def.resolve(obj, textStatus, jqXHR);
        t.setHeaderTipsGreyAppShow(jqXHR); //公共头部发包之后，这里可以去掉了，现在只在公共头部中个判断这个了
      }
  
      //调用ajax前先保存路由
      t.currentPath = location.pathname + location.hash;
  
      $.ajax(data);
      return def;
    },
    /**
       * 提示错误信息
       * */
    showErrorMsg:function (str) {
      var t = this;
  
      if(str.indexOf('与服务器断开连接，请尝试重新登录') != -1){
        return;
      }
  
      window.globalVueApp && window.globalVueApp.$showError(str);
    },
    /**
       * 过期处理
       * */
    sessionTimeOut: function (data,url) {
      var t = this;
  
      url = url + '&source=daydao';
      var $iframe = $('<iframe/>', {
        src: url
      });
  
      $iframe.css({position:'absolute',bottom:0,left:0,width:'100px',height:'100px',visibility:'hidden'});
      $iframe.appendTo('body');
  
      $iframe[0].onload = function(){
        var isSessionOut = false; //是否session过期了
        var handleMessage = function(e) {
          isSessionOut = true;
          //如果登陆页面传回了url信息
          if(e.data.iFrameHref){
            //如果有公共不就不退出，在公共头部中处理了
            if(gMain.components && gMain.components.commonHeader){
              //不作处理
            }else{
              //跳转到登录页面，并带上service参数，使之能够正常的跳转回来，去掉setTimeout延迟，加快重新激活session速度，但是就是显示超时的提示看不到了
              var sUrl = location.protocol + '//' + location.host + location.pathname + location.search;
              var sHash = location.hash.substr(1); //去掉 #!后面的路由路径
              var sHref = gMain.DayHRDomains.baseStaticDomain + 'static/common/html/go.html?router=' + encodeURIComponent(sHash) + '&url=' + encodeURIComponent(sUrl);
              //没有头部的退出方式
  
              window.location.href = gMain.DayHRDomains.passportDomain + 'login?source=daydao&service=' + encodeURIComponent(sHref);
            }
          }
  
        }
  
        if(window.addEventListener){
          window.addEventListener('message',handleMessage,false);
        }else {
          window.attachEvent('onmessage',handleMessage)
        }
        //如果没过期
        setTimeout(function () {
          if(!isSessionOut){
            $.ajax(data);
          }
        },100);
        $iframe.remove();//移除iframe
      }
    },
    /**
       * 设置头部显示环境的提示，开发，测试，灰度
       * */
    setHeaderTipsGreyAppShow:function (xhr) {
      var t = this;
      var daydaoEnv = xhr.getResponseHeader('daydao-env');
      //如果存在公共头部对象
  
      if(gMain.components.commonHeader && typeof gMain.components.commonHeader.setHeaderTipsGreyAppShow === 'function'){
        gMain.components.commonHeader.setHeaderTipsGreyAppShow(daydaoEnv);
      }
    },
  
    /**
       * api接口统一管理处
       * */
    ApiTools:function(){
      var t = this;
  
      return {
        /**
               * 检测会话是否超时
               * */
        checkSessionTimeout:function(options){
          var _pageLayer = null; //启用loading遮罩
  
          t.ajax({
            url:gMain.apiBasePath +'route/checkSessionTimeout.do',
            data:JSON.stringify({}),
            beforeSend:function(){
              _pageLayer= layer.load(1, {shade: [0.3,'#ffffff']}); //启动loading遮罩
            },
            complete:function(){
              layer.close(_pageLayer);
            },
            success: function(data){
              if(data.result == 'true'){
                typeof options.success === 'function' && options.success(data);
              }
            }
          });
        },
        /**
               * 获取表头
               * @options.infoSetId
               * @options.data
               * @options.success
               * */
        getTableColumn:function(options){
          var _formLayer= layer.load(1, {shade: [0.00001,'#FFFFFF']}); //启动loading遮罩
  
          t.ajax({
            url: gMain.apiBasePath +'route/'+ options.infoSetId +'/getTableColumn.do',
            data: JSON.stringify(options.data),
            success: function(data){
              if(data.result == 'true'){
                typeof options.success === 'function' && options.success(data);
              }
              layer.close(_formLayer);
            }
          });
        },
        /**
               * 删除表格数据
               * @options.infoSetId
               * @options.data
               * @options.success
               * */
        del:function(options){
          var _formLayer = null; //
  
          t.ajax({
            url: gMain.apiBasePath +'route/'+ options.infoSetId +'/del.do',
            data: JSON.stringify(options.data),
            beforeSend:function(){
              _formLayer= layer.load(1, {shade: [0.3,'#ffffff']}); //启动loading遮罩
            },
            complete:function(){
              layer.close(_formLayer); //关闭loading遮罩
            },
            success: function(data){
              typeof options.success === 'function' && options.success(data);
            }
          });
        },
        /**
               * 获取下拉键值对
               * @options.infoSetId
               * @options.data
               * @options.success
               * */
        getKeyValueData:function(options){
          t.ajax({
            url: gMain.apiBasePath +'route/getKeyValueData.do',
            data: JSON.stringify(options.data),
            beforeSend:function(){
              typeof options.beforeSend === 'function' && options.beforeSend();
            },
            complete:function(){
              typeof options.complete === 'function' && options.complete();
            },
            success: function(data){
              if(data.result == 'true'){
                typeof options.success === 'function' && options.success(data);
              }
            }
          });
        },
  
        /**
               * 数据初始化-顺序控制总接口
               * @options.infoSetId
               * @options.data
               * @options.success
               * */
        getCountDataByStep:function(options){
          var pageLayer = layer.load(1, {shade: [0.3,'#ffffff']}); //启用loading遮罩
  
          t.ajax({
            url:gMain.apiBasePath + 'dataInit/getCountDataByStep.do',
            data:JSON.stringify(options.data),
            success: function(data){
              typeof options.success === 'function' && options.success(data);
              layer.close(pageLayer);//关闭loading遮罩
            }
          });
        },
        /**
               * 最后一个属性分割线---无实际意义----------------------------------------
               * */
        lastPrototype:undefined
      };
    },
  
    /**
       * 最后一个属性分割线---无实际意义----------------------------------------
       * */
    lastPrototype: undefined
  };
  