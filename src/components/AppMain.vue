<template>
    <main>
        <div class="container">
            <SelectArchetype />
        </div>
        <div class="container founded bg-black text-white text-center p-3 fw-bold">
                 {{ store.showned }} cards shown
            </div>
        <div class="container bg-white pt-3">
            
        <div @changedvalue="getCards()" class="container cardlist ">
            <div v-if="store.loading" class="loading">
                Loading...
            </div>
            <div v-else class="row">
            <Card :name="card.name" :archetype='card.archetype' :image='imagesUrl + card.id + ".jpg"' v-for="card in store.cards" />
        </div>
        </div>
    </div>
    </main>
</template>

<script>
import axios from 'axios';
import { store } from '../data/store';
import SelectArchetype from './SelectArchetype.vue';
import Card from './Card.vue';
    export default {
        name:'AppMain',
        components: {
            SelectArchetype,
            Card
        },
        data() {
            return {
                store,
                selection:'',
                info: [],
                imagesUrl: 'https://images.ygoprodeck.com/images/cards/',
                
            }
        },
        methods: {
            getCards() {
                if (store.selArc == 'All') {
                    this.selection = ''
                }
                else {
                    this.selection = "archetype='" + this.selection + "'&"
                }
                axios.get(store.apiUrl + store.endCards + this.selection + store.limit).then((res) => {
                    store.cards = res.data.data;
                    this.info = res.data.meta;
                    store.showned = res.data.meta.current_rows;
                    store.loading = false;

                });
            }
        },
        created() {
            this.getCards();
        }
        
    }
</script>

<style lang="scss" scoped>

.cardlist {
    background-color: white;
}

</style>