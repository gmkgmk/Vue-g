import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import * as mutations from './mutations'
// 告诉Vue使用Vuex
Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

/*
 *整合初始状态和变更函数,我们就得到了我们所需的store
 *至此,这个store就可以连接到我们的应用中
 */
export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters,
    strict: debug,
    // plugins: debug ? [createLogger()] : []
})