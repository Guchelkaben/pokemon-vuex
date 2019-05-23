<template>
    <div>
        <form @submit.prevent="onSubmit">
            <div class="row">
                <div class="col-6 form-group">
                    <label for="inputPokemonName">Pokemon name</label>
                    <input v-model="pokemon.name" type="text" class="form-control" id="inputPokemonName" placeholder="Enter pokemon name">
                </div>
                <div class="col-6 form-group">
                    <label for="inputPokemonType">Select Pokemon type</label>
                    <select v-model="pokemon.type" class="form-control" id="inputPokemonType" >
                        <option v-for="type in types" :key="type">{{type}}</option>
                    </select>
                </div>
            </div>
            <button type="submit" class="col-12 btn btn-primary">Submit</button>
        </form>
    </div>
</template>

<script>
    import {mapMutations} from 'vuex';

    export default {
        data() {
            return {
                types: [
                    'Fire',
                    'Water',
                    'Grass',
                    'Electric'
                ],
                pokemon: {
                    name: '',
                    type: 'Fire'
                }
            };
        },
        methods: {
            onSubmit() {
                this.addPokemon(this.pokemon);
            },

            ...mapMutations(['addPokemon'])
        }
    }
</script>