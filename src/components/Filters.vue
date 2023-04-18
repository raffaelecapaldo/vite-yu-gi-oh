<template>
    <select @change="$emit('searchCards')" v-model="store.search.language" class="form-select text-uppercase">
        <option value="">EN</option>
        <option v-for="language in languages" :value="language">{{ language }}</option>
    </select>


  <SelectArchetype @change="$emit('searchCards')" />
    <div class="input-group mysearch ms-2">
        <input v-model="store.search.fname" type="text" class="form-control" placeholder="Card name">
        <button @click="$emit('searchCards')" class="btn btn-primary" type="button" id="button-addon2">Search</button>
    </div>
    <button @click="resetAll()" type="button" class="ms-1 btn btn-primary">Reset</button>
</template>

<script>
import { store } from '../data/store';
import SelectArchetype from './SelectArchetype.vue';

export default {

    name: 'Filters',
    emits: ['searchCards', 'resetAll'],
    data() {
        return {
            store,
            languages: ['it', 'fr', 'de', 'pt'],
        }
    },
    components: {
        SelectArchetype,
    },
    methods: {
        resetAll() {
            store.search.archetype = '';
            store.search.fname = '';
            store.search.language = '';
            this.$emit('resetAll');
        },
        
    }
}
</script>

<style lang="scss" scoped>
select {
    width: 100px;
    margin-right: 10px;
}

.mysearch {
    width:25% !important;
    flex:unset;
}

@media screen and (max-width:768px) {
    .mysearch{
        width: 300px  !important;
        margin:0 !important;
    }
}
</style>