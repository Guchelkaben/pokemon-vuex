<template>
    <div>
        <div class="p-2" v-if="state !== 'init'">
            <div>
                <h2>00{{getPokemonByName(pokename).data.id}} - {{pokemonName}}</h2>
            </div>
            <div>
                <ul class="list-group">
                    <li class="list-group-item">Height: {{getPokemonByName(pokename).data.height}}</li>
                    <li class="list-group-item">Weight: {{getPokemonByName(pokename).data.weight}}</li>
                    <li class="list-group-item">Types: {{pokemonTypes}}</li>
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
        methods: mapActions(['fetchPokeData']),
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

</style>