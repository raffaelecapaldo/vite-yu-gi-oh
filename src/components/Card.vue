<template>
    <div class="col-3 mb-4">
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
    width: 250px;
    background-color: #90693d;
   
}
</style>