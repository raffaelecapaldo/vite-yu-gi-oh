<template>
<AppHeader />
<AppMain />
<footer class="p-3"></footer>
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
      
    }
  }
</script>

<style lang="scss" scoped>

</style>