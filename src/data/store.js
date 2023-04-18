import { reactive } from 'vue';

export const store = reactive({
    apiUrl: 'https://db.ygoprodeck.com/api/v7/',
    endArchetypes: 'archetypes.php',
    endCards: 'cardinfo.php?',
    yugiohCards: [],
    SelArchertype:"",
    limit: 'num=50&offset=0',
    cards:[],
    selArc:'All',
    loading:true,
    showned:'',
    search: {
        archetype: '',
        name: '',
        num: 60,
        offset:'0', //passandolo come int 0 non lo inseriva nei parametri
    }


})