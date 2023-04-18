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
            <div v-if="store.loading" class="loading d-flex container justify-content-center align-items-center flex-column">
                <div class="fs-3 fw-bold">
                    <p>Loading...</p>
                </div>
                <div class="imgloading">
                <img class="img-fluid" src="/img/shuffle.gif" alt="loading gif">
            </div>
               
            </div>
            <div v-else class="row">
            <Card :name="card.name" :archetype='card.archetype' :image='card.card_images[0].image_url' v-for="card in store.cards" />
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