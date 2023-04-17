<template>
    <main>
        <div class="container">
            <SelectArchetype />
        </div>
        <div class="container bg-white pt-3">
        <div class="container cardlist ">
            <div class="row">
            <Card :name="card.name" :archetype='card.archetype' :image='imagesUrl + card.id + ".jpg"' v-for="card in cards" />
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
                cards: [],
                imagesUrl: 'https://images.ygoprodeck.com/images/cards/',
            }
        },
        methods: {
            getCards() {
                axios.get(store.apiUrl + store.endCards + store.limit).then((res) => {
                    this.cards = res.data.data;
                    console.log('a'+ this.cards);

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