<template>
    <div v-if="show">
        <img class="spinner" src="../../assets/pokeball.png">
    </div>
</template>

<script>
    export default {
        props: ['show']
    }
</script>

<style scoped>
    .spinner {
        -webkit-animation: rotation 2s infinite linear;
        box-sizing: border-box;
        position: absolute;
        top: 50%;
        left: 50%;
        width: 40px;
        height: 40px;
        margin-top: -20px;
        margin-left: -20px;
    }

    @-webkit-keyframes rotation {
        from {
            -webkit-transform: rotate(0deg);
        }
        to {
            -webkit-transform: rotate(359deg);
        }
    }
</style>