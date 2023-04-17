<template>
    <main>
        <div class="container">
            <SelectArchetype />
        </div>
        <div class="container cardlist">

        </div>
    </main>
</template>

<script>
import SelectArchetype from './SelectArchetype.vue';
    export default {
        name:'AppMain',
        components: {
            SelectArchetype
        },
        
    }
</script>

<style lang="scss" scoped>

.cardlist {
    background-color: white;
    height: 300px;
}

</style>