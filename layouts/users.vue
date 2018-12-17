<template>
  <div class="layout-users">
    <Header />
    <nuxt/>
  </div>
</template>

<script>
import Header from '~/components/Header.vue'

export default {
  components: {
    Header
  },
}
</script>

<style>
  .layout-users {
    color: brown;
  }
</style>
