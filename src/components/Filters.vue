<template>
    <div class="input-group ms-2 w-25">
  <input v-model="store.search.fname" type="text" class="form-control" placeholder="Card name" >
  <button @click="$emit('searchCards')" class="btn btn-primary" type="button" id="button-addon2">Search</button>
</div>
</template>

<script>
import { store } from '../data/store';

    export default {
        name:'Filters',
        data() {
            return {
                store
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>