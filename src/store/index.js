import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const store = new Vuex.Store({
    state:{
        //nav组件
        navContent:[
            {name:'首页',url:'/'},
            {name:'摄影主页',url:'/'},
        ],
        //list组件
        listContent:[
            {}
        ]
    },
    mutations:{

    },
    getters:{

    },
    actions:{

    }
})

export default store;