import pokemonData from 'pokemon-metadata';
import {find} from 'lodash';

/* eslint-disable */
const state = {
    pokemons: [
        {
            type: 'Fire',
            name: "charizard"
        },
        {
            type: 'Electric',
            name: "pikachu"
        }
    ]
};

const getters = {
    allPokemons: state => state.pokemons,
    getPokemonByName: (state) => pokename => {
        return find(state.pokemons, ['name', pokename]);
    }
};

const actions = {
    async fetchPokeData({commit}, pokename) {
        const res = await pokemonData[pokename.toLowerCase()];
        commit('updatePokemon', res);
    }
};

const mutations = {
        updatePokemon: (state, pokemonData) => {
            find(state.pokemons, ['name', pokemonData.name]).data = pokemonData;
        },
        addPokemon: (state, pokemon) => state.pokemons.push(pokemon)
    }
;

export default {
    state,
    getters,
    actions,
    mutations
}