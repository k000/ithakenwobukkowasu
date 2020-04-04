<template>
  <div>

    <MenuItem :Items="JavaItems"></MenuItem>

    <MenuItem />

    <MenuItem />

  </div>
</template>

<script>
import MenuItem from '~/components/MenuItem.vue'

//MenuItemに.mdファイルを渡します(ここ肥大化するね。。。^^;)
import file from '~/files/test.md'
import file2 from '~/files/doreiku.md'


export default {
  data () {
    return {
      // ●●Itemsはカテゴリーの中身です。
      // オブジェクトとして.mdファイルとリンク名称を渡します。
      JavaItems : [
        { name : "file1" , md : file },
        { name : "file2" , md : file2 },
      ]

    }
  },
  computed:{
    file () {

    }
  },
  components : {
    MenuItem
  },
  props : ["currentFile"]
}
</script>


<style>
.category{
  padding-right:10px;
  word-wrap: break-word;
}
</style>