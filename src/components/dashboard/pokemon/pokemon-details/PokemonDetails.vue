<template>
    <div>
        <div class="p-1" v-if="state !== 'init'">
            <div class="mb-3">
                <h2>{{convertPokeNumber(getPokemonByName(pokename).data.id)}} - {{pokemonName}}</h2>
            </div>
            <div >
                <ul class="list-group">
                    <li class="list-group-item py-2">Height: {{convertHeight(getPokemonByName(pokename).data.height)}}m</li>
                    <li class="list-group-item py-2">Weight: {{convertHeight(getPokemonByName(pokename).data.weight)}}kg</li>
                    <li class="list-group-item py-2">Type{{getPokemonByName(pokename).data.types.length > 1 ? 's' : ''}}: {{pokemonTypes}}</li>
                </ul>
            </div>
        </div>
        <spinner :show="state !== 'finish'"></spinner>
    </div>
</template>

<script>
    import {capitalizeFirstLetter} from '../../../utils/stringhelper';
    import Spinner from './../../../spinner/Spinner.vue';
    import {mapActions, mapGetters} from 'vuex';

    const max_poke_number_digits= 3;

    export default {
        props: ['pokename'],
        data() {
            return {
                state: 'init'
            }
        },
        async created() {
            await this.fetchPokeData(this.pokename);
            this.state = 'finish';
        },
        methods: {
            ...mapActions(['fetchPokeData']),
            convertHeight(height) {
                return height / 10;
            },
            convertPokeNumber(number) {
                if(max_poke_number_digits !== number.toString().length) {
                    for(let i = 0; i <= (max_poke_number_digits - number.toString().length); i++) {
                        number = `0${number}`;
                    }
                }
                return number;
            }
        },
        computed: {
            ...mapGetters(['getPokemonByName']),
            pokemonName() {
                return capitalizeFirstLetter(this.getPokemonByName(this.pokename).name);
            },
            pokemonTypes() {
                return this.getPokemonByName(this.pokename).data.types
                    .map(types => types.type)
                    .map(type => capitalizeFirstLetter(type.name))
                    .join(", ");
            }
        },
        components: {
            Spinner
        }
    }
</script>

<style scoped>
    .pokemon-details-list {
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>