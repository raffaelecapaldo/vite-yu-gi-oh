<template>
    <div class="dcard d-flex flex-column align-items-center">
        <div class="imagecard">
            <img class="img-fluid" src="https://images.ygoprodeck.com/images/cards/101201056.jpg" alt="">
        </div>
        <div class="titlecard">
        <h3 class="fs-5 text-white">Il nome della carta</h3>
    </div>
    <div class="typecard ">
        <p class="fw-bold">Archetipo</p>
    </div>
    </div>
</template>

<script>
    export default {
        name:'Card',

    }
</script>

<style lang="scss" scoped>
.dcard {
    width: 200px;
    background-color: #90693d;
   
}
</style>