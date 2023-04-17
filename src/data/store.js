import { reactive } from 'vue';

export const store = reactive({
    apiUrl: 'https://db.ygoprodeck.com/api/v7/',
    endArchetypes: 'archetypes.php',
    endCards: 'cardinfo.php',
    yugiohCards: [],
    SelArchertype:"",


})