import pokemonData from 'pokemon-metadata';
import {find} from 'lodash';

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
        const pokemon = find(state.pokemons, ['name', pokemonData.name]);
        if (pokemon) {
            pokemon.data = pokemonData;
        }
    },
    addPokemon: (state, pokemon) => state.pokemons.push(pokemon),
    removePokemon: (state, pokemonName) => {
        const index = state.pokemons
            .map(pokemon => pokemon.name)
            .indexOf(pokemonName);

        state.pokemons.splice(index, 1);
    }
};

export default {
    state,
    getters,
    actions,
    mutations
}