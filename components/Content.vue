<template>
  <div>
    <div v-html="$store.state.currentFile.file"></div>
  </div>
</template>

<script>
export default {
  computed:{
    file () {

    }
  },
}
</script>