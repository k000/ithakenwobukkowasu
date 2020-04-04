<template>
  <div class="container">
    <div>
      <h1>タイトル</h1>
      <div v-html="file"></div>
    </div>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'

import file from '~/files/test.md'

export default {
  computed : {
    file () {
      return file
    }
  },
  components: {
    Logo
  }
}
</script>

<style>

</style>
