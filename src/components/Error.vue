<template>
    <div class="d-flex justify-content-center">
    <Card name="Nothing found" archetype="Try something else" image="/img/404.jpg" />
</div>
</template>

<script>
import Card from './Card.vue';
export default {
    name:'Error',
    components: {
        Card
    }

}
</script>

<style lang="scss" scoped></style>