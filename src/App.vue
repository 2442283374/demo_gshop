<template>
  <div id="app">
    <router-view></router-view>
    <FooterGuide v-show="$route.meta.showFooter"></FooterGuide>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
import FooterGuide from './components/FooterGuide/FooterGuide.vue'

export default {
  mounted () {
    // this.$store.dispatch('getAddress')
    this.getAddress()
  },

  methods: {
    ...mapActions(['getAddress']) // 映射函数
  },
  components: {
    FooterGuide
  }
}
</script>

<style lang="stylus" rel="stylesheet/style">
  .app
    width: 100%
    height: 100%
    background: #f5f5f5
</style>
