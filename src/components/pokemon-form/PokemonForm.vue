<template>
    <div>
        <form @submit.prevent="onSubmit">
            <div class="row">
                <div class="col-6 form-group">
                    <label for="inputPokemonName">Pokemon name</label>
                    <input v-model="pokemonName" type="text" class="form-control" id="inputPokemonName" placeholder="Enter pokemon name">
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
    import {cloneDeep} from 'lodash';

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
        computed: {
          pokemonName: {
              set(newPokemon) {
                this.pokemon.name = newPokemon.toLowerCase();
              },
              get() {
                  return this.pokemon.name;
              }
          }
        },
        methods: {
            onSubmit() {
                this.addPokemon(cloneDeep(this.pokemon));
            },

            ...mapMutations(['addPokemon'])
        }
    }
</script>