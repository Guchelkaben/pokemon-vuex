<template>
    <div class="position-relative">
        <div @click="showDetails = !showDetails">
            <div class="pokemon" :class="pokemonStyle">
                <div v-if="!showDetails" class="p-1">
                    <div class="mx-auto">
                        <h5 class="text-center">{{pokemonName}}</h5>
                    </div>
                    <div style="height: 150px">
                        <img class="d-block mx-auto img-fluid h-100" :src="getPokemonImgByName(pokemon.name)"/>
                    </div>
                </div>
                <div v-else>
                    <pokemon-details :pokename="pokemon.name"></pokemon-details>
                </div>
            </div>
        </div>
        <div class="close-container" @click="removePokemon(pokemon.name)">
            <div class="close"></div>
        </div>
    </div>
</template>

<script>
    // eslint-disable-next-line
    import {capitalizeFirstLetter} from '../../utils/stringhelper';
    import PokemonImages from 'pokemon-images';
    import PokemonDetails from './pokemon-details/PokemonDetails.vue';
    import {mapMutations} from 'vuex';

    export default {
        props: ['pokemon'],

        data() {
            return {
                showDetails: false
            };
        },

        computed: {
            pokemonName() {
                return capitalizeFirstLetter(this.pokemon.name);
            },
            pokemonStyle() {
                return {
                    [`${this.pokemon.type.toLowerCase()}`]: true,
                    [`${this.pokemon.type.toLowerCase()}-show`]: this.showDetails
                }
            }
        },

        methods: {
            getPokemonImgByName(pokeName) {
                try {
                    return PokemonImages.getSprite(pokeName);
                } catch {
                    return "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/0.png";
                }
            },
            ...mapMutations(['removePokemon']),
        },

        components: {
            PokemonDetails
        }
    }
</script>

<style>
    .close-container {
        background-color: white;
        width: 50px;
        height: 50px;
        z-index: 2;
        position: absolute;
        right: 15px;
        top: 0;
        transform: scale(1);
        transition: transform .5s;
    }

    .close-container:hover {
        transform: scale(1.1);
        transition: transform .5s;
    }

    .close {
        z-index: 2;
        position: absolute;
        right: 80%;
        top: 15%;
    }

    .close:before, .close:after {
        position: absolute;
        left: 15px;
        content: ' ';
        height: 33px;
        width: 2px;
        background-color: #333;
    }

    .close:before {
        transform: rotate(45deg);
    }

    .close:after {
        transform: rotate(-45deg);
    }

    .pokemon {
        min-height: 200px;
        max-height: 200px;
    }

    .fire {
        background-color: red;
        opacity: .5;
        transition: opacity .2s;
    }

    .fire-show {
        opacity: 1;
    }

    .fire:hover {
        opacity: 1;
        transition: opacity .2s;
    }

    .grass {
        background-color: green;
        opacity: .5;
        transition: opacity .2s;
    }

    .grass-show {
        opacity: 1;
    }

    .grass:hover {
        opacity: 1;
        transition: opacity .2s;
    }

    .water {
        background-color: blue;
        opacity: .5;
        transition: opacity .2s;
    }

    .water-show {
        opacity: 1;
    }

    .water:hover {
        opacity: 1;
        transition: opacity .2s;
    }

    .electric {
        background-color: yellow;
        opacity: .5;
        transition: opacity .2s;
    }

    .electric-show {
        opacity: 1;
    }

    .electric:hover {
        opacity: 1;
        transition: opacity .2s;
    }
</style>