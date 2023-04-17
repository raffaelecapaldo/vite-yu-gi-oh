<template>
    <main>
        <div class="container">
            <SelectArchetype />
        </div>
        <div class="container bg-white pt-3">
        <div class="container cardlist">
            <Card />
        </div>
    </div>
    </main>
</template>

<script>
import SelectArchetype from './SelectArchetype.vue';
import Card from './Card.vue';
    export default {
        name:'AppMain',
        components: {
            SelectArchetype,
            Card
        },
        
    }
</script>

<style lang="scss" scoped>

.cardlist {
    background-color: white;
    height: 900px;
}

</style>