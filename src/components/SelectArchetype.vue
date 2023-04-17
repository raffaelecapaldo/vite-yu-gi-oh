<template>
    <div class="selection py-3">
    <select class="form-select">
        <option selected value="All">All</option>
  <option v-for="archetype,index in Archetypes" :value="archetype.archetype_name">{{archetype.archetype_name}}</option>
</select>
</div>
</template>

<script>
import axios from 'axios';
import { store } from '../data/store';

    export default {
        name:"SelectArchetype",
        data() {
            return {
                Archetypes:[],
            }
        },
        methods: {
            getArchetypes() {
                axios.get(store.apiUrl + store.endArchetypes).then((res) => {
                    this.Archetypes = res.data;
                });

                }
            },
            mounted() {
                this.getArchetypes();
            }
        }
    
</script>

<style lang="scss" scoped>
.form-select {
    width: 250px;
}
</style>