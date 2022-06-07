//该文件用于创建vuex核心的 store
import Vue from 'vue'

import Vuex from 'vuex'
//准备actions   用于相应组件中的动作
Vue.use(Vuex)


const actions = {
    jia(context, value) {
        context.commit('JIA', value)
    },
    jian(context, value) {
        context.commit('JIAN', value)
    },
    jiaOdd(context, value) {
        if (context.state.sum % 2) {
            console.log('奇数被调用了')
            context.commit('JIA', value)
        }
    },
    jiaWait(context, value) {
        setTimeout(() => {
            console.log('定时器被调用了')
            context.commit('JIA', value)
        }, 500)
    }
}



//准备mutations  用于操作数据 （state）
const mutations = {
    JIA(state, value) {
        // console.log('JIA被调用了',state,value)
        state.sum += value
    },
    JIAN(state, value) {
        // console.log('jian被调用了', state, value)

        state.sum -= value
    },
    ADD_PERSON(state, value) {
        console.log('人被调用了', state, value)
        state.personList.unshift(value)
    }
}


// 准备state  用于存储数据
const state = {
    sum: 0,//当前的和
    school: '尚硅谷',
    subject: '前端开发',
    personList: [
        { id: '001', name: '张三' }
    ]
}
// 准备getters  用于将state中的数据进行加工
const getters = {
    bigSum(state) {
        return state.sum * 10
    }
}

// 创建并且暴露store
export default new Vuex.Store({
    actions,
    mutations,
    state,
    getters
})
