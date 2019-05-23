<template>
    <div id="app" class="mx-xl-auto w-xl-50">
        <div class="container">
            <div style="position: relative; display: flex; justify-content: center; margin-bottom: 3rem">
                <div>
                    <img style="height: 200px; " class="img-fluid" src="./assets/pokemon-logo.png"/>
                </div>

                <div style="position: absolute; top: 90%; margin: 0 auto;">
                    <h1>My Team</h1>
                </div>
            </div>
            <pokemon-form></pokemon-form>
            <dashboard></dashboard>
        </div>
    </div>
</template>

<script>
    import Dashboard from './components/dashboard/Dashboard.vue';
    import PokemonForm from './components/pokemon-form/PokemonForm.vue';

    export default {
        components: {
            Dashboard,
            PokemonForm
        }
    }
</script>