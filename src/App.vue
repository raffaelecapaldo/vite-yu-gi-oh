<template>
<AppHeader />
<AppMain />
</template>

<script>
import AppHeader from './components/AppHeader.vue'
import AppMain from './components/AppMain.vue'
  export default {
    components: {
      AppHeader,
      AppMain
    },
    methods () {
      getCards
    }
  }
</script>

<style lang="scss" scoped>

</style>