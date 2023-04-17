<template>
    <div class="col-xxl-5 col-lg-3 col-md-4 col-sm-6 col-12 mb-4 d-sm-block d-flex justify-content-center">
    <div class="dcard d-flex flex-column align-items-center">
        <div class="imagecard">
            <img class="img-fluid" :src="image" alt="">
        </div>
        <div class="titlecard text-center">
        <h3 class="fs-5 text-white">{{name}}</h3>
    </div>
    <div class="typecard ">
        <p class="fw-bold">{{archetype}}</p>
    </div>
    </div>
</div>
</template>

<script>
    export default {
        name:'Card',
        props: {
            image: {
                type:String,
            },
            name: {
                type:String
            },
            archetype: {
                type:String,
                default: 'No Archetype'
            }


        }

    }
</script>

<style lang="scss" scoped>
.dcard {
    width: 220px;
    height: 410px;
    background-color: #90693d;
   
}

@media (min-width: 1400px) {.col-xxl-5 {
    flex: 0 0 auto;
    width: 20%;
}}
</style>