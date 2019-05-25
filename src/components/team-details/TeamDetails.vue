<template>
    <div class="list">
        <ul class="list-container list-group">
            <li class="list-group-item align-items-center"><img class="img-fluid list-img"
                                                                src="../../assets/pokeball.png"/><span
                    class="badge badge-primary badge-pill">{{this.allPokemons.length}}</span></li>
            <li class="list-group-item align-items-center"><img class="img-fluid list-img"
                                                                src="../../assets/fire-logo.png"/><span
                    class="badge badge-primary badge-pill">{{filterPokemonType('Fire')}}</span></li>
            <li class="list-group-item align-items-center"><img class="img-fluid list-img"
                                                                src="../../assets/grass-logo.png"/><span
                    class="badge badge-primary badge-pill">{{filterPokemonType('Grass')}}</span></li>
            <li class="list-group-item align-items-center"><img class="img-fluid list-img"
                                                                src="../../assets/electro-logo.png"/><span
                    class="badge badge-primary badge-pill">{{filterPokemonType('Electric')}}</span></li>
            <li class="list-group-item align-items-center"><img class="img-fluid list-img"
                                                                src="../../assets/water-logo.png"/><span
                    class="badge badge-primary badge-pill">{{filterPokemonType('Water')}}</span></li>
        </ul>
    </div>
</template>

<script>
    /* eslint-disable */
    import {mapGetters} from 'vuex';

    export default {
        methods: {
          filterPokemonType(type) {
              return this.allPokemons
                  .filter(pokemon => pokemon.type === type)
                  .length;
          }
        },
        computed: mapGetters(['allPokemons']),
    }
</script>

<style>
    .list-container {
        flex-direction: row;
        justify-content: space-between;
    }

    .list-container li {
        display: flex;
        width: 100%;
        justify-content: space-between;
    }

    .list-container li span {
        font-size: 1rem;
    }

    .list-img {
        max-width: 100%;
        max-height: 25px;
        display: block;
    }
</style>