<template>
    <div class="input-group ms-2 w-25">
  <input v-model="store.search.fname" type="text" class="form-control" placeholder="Card name" >
  <button @click="$emit('searchCards')" class="btn btn-primary" type="button" id="button-addon2">Search</button>
</div>
<button @click="resetAll()" type="button" class="ms-1 btn btn-primary">Reset</button>

</template>

<script>
import { store } from '../data/store';

    export default {
        name:'Filters',
        data() {
            return {
                store
            }
        },
        methods: {
            resetAll() {
                store.search.archetype = '';
                store.search.fname = '';
                this.$emit('resetAll');
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>