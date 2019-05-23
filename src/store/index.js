import Vuex from 'vuex';
import Vue from 'vue';
import pokemons from './modules/pokemons'

//Load vuex
Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        pokemons
    }
});
