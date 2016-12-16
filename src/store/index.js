import Vue from 'vue'
import Vuex from "vuex"

Vue.use(Vuex);

const state = {
    list: []
}

export default new Vuex.Store({
    state
})