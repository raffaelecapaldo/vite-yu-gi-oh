<template>
    <div class="selection py-3">
    <select @change="getCards()" v-model="store.selArc" class="form-select">
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
                store
            }
        },
        methods: {
            getArchetypes() {
                axios.get(store.apiUrl + store.endArchetypes).then((res) => {
                    this.Archetypes = res.data;
                });

                },
                getCards() {
                    store.loading = true;
                if (store.selArc == 'All') {
                    this.selection = ''
                }
                else {
                    this.selection = "archetype=" + store.selArc + "&"
                }
                axios.get(store.apiUrl + store.endCards + this.selection + store.limit).then((res) => {
                    store.cards = res.data.data;
                    this.info = res.data.meta;
                    store.loading = false;
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