<template>
    <main>
        <div class="container d-flex align-items-center">
            <Filters @search-cards="getCards()" @reset-all="getCards()"/>
        </div>
        <div class="container founded bg-black text-white text-center p-3 fw-bold">
            {{ store.showned }} cards shown
        </div>
        <div class="container bg-white pt-3">
            <div class="container cardlist ">
                <Loader v-if="store.loading" />
                <Error v-if="store.notfound" />
                <div v-else class="row">
                    <Card :name="card.name" :archetype='card.archetype' :image='card.card_images[0].image_url'
                        v-for="card in store.cards" />
                </div>
            </div>
        </div>
    </main>
</template>

<script>
import axios from 'axios';
import { store } from '../data/store';
import Loader from './Loader.vue'
import Card from './Card.vue';
import Filters from './Filters.vue';
import Error from './Error.vue'
export default {
    name: 'AppMain',
    components: {
        Card,
        Loader,
        Filters,
        Error
    },
    data() {
        return {
            store,
            selection: '',
            info: [],
        }
    },
    methods: {
        getCards() {
            store.notfound = false;
            store.search.fname.toString().toLowerCase();
            store.loading = true;
            let params = {}
            for (let key in store.search) {
                if (store.search[key]) {
                    params[key] = store.search[key]
                }
            }
            axios.get(store.apiUrl + store.endCards, { params }).then((res) => {
                store.cards = res.data.data;
                this.info = res.data.meta;
                store.showned = res.data.meta.current_rows;
                store.loading = false;
            }).catch((error) => {
                store.notfound = true;
                store.loading = false;
                store.showned = 0;
            })




        },

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