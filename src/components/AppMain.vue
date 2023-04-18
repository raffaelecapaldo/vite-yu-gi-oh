<template>
    <main>
        <div class="container d-flex flex-wrap justify-content-center justify-content-md-start align-items-center p-1 ">
            <Filters @search-cards="getDefaultCards()" @reset-all="getDefaultCards()"/>
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
                        <div class="buttons d-flex justify-content-center">
                        <a @click='getMoreCards()' class="load-more text-center w-25 p-2 mb-1">Load more</a>
                    </div>
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
        getMoreCards() {
            store.search.num = store.search.num + 30;
            this.getCards();
        },
        getDefaultCards() {
            store.search.num = 60;
            this.getCards();

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

.load-more {
    background-color: rgba(12, 116, 38, 0.774);
    color:white;
    text-decoration: none;
    text-transform: uppercase;
    font-size: large;
    font-weight: bold;
    cursor:pointer;
    transition: 0.3s;

    &:hover {
        background-color: rgba(12, 116, 38, 1);
    }
}
</style>