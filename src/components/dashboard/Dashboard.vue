<template>
    <div class="container">
        <div class="row">
            <pokemon v-for="pokemon in allPokemons" :key="pokemon.id" class="col-6 p-1" :pokemon="pokemon"></pokemon>
        </div>
    </div>
</template>

<script>
    import Pokemon from './pokemon/Pokemon.vue'
    import {mapGetters, mapActions} from 'vuex'

    export default {
        computed: mapGetters(['allPokemons']),
        methods: {
            ...mapActions(['fetchPokemons'])
        },
        components: {
            pokemon: Pokemon
        }
    }
</script>

<style>

</style>
