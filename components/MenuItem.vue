<template>
  <div>
    
    <div class="category">

      <div class="category-parrent" @click="this.changeActive" >
        <button class="category-btn">Java</button>
        <span v-if="this.isActive">-</span>
        <span v-else>+</span>
      </div>

      <div class="postid" v-if="this.isActive">
        <ul>
          <li v-for="item in Items" :key="item.name" @click="setFile(item.md)">
            {{ item.name }}
          </li>
        </ul>
      </div>
    </div>

  </div>
</template>

<script>

export default {
  data () {
    return {
      // これがTrueになる時、それは中身が表示される時
      // 親の箇所をクリックした時、それはTrueになる時
      isActive : false,
      /*
      mock : [
        { name : "javaでゲームを作ろう１" , url : "これはファイルmd名を渡します" },
        { name : "javaでゲームを作ろう２" , url : "これはファイルmd名を渡します" },
        { name : "javaでゲームを作ろう３" , url : "これはファイルmd名を渡します" },
      ]
      */
    }
  },
  methods:{
    changeActive () {
      this.isActive = !this.isActive
    },
    setFile (mdfile) {
      // mdファイルを受け取ってvuexをコミットする
      this.$store.dispatch(`currentFile/setFile`,mdfile)
    },
  },
  props : ["Items"] // これがリンク集です。親からオブジェクトの配列でごっそり受け取りますね。
}
</script>


<style>
  .category-parrent{
    display: flex;
    cursor: pointer;
  }
  .category-btn{
    width:80%;
    border:none;
    text-align:left;
    outline: none;
    color:darkgreen;
    cursor: pointer;
  }
  .category-btn:hover{
    color:forestgreen;
  }

  .postid ul {
    cursor: pointer;
  }

  .postid ul li{
    color:blue;
  }

</style>