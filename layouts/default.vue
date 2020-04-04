<template>
  <div>

    <div id="outbox">

      <nav>
        <nuxt-link to="/"><h1>IT HAKEN WO BUKKOWASU!</h1></nuxt-link>
      </nav>

      <div id="main-container">
        
        <div id="sidebar">
          <Sidebar />
        </div>

        <div id="main-content">
          <nuxt />
        </div>

      </div>

      <footer>
        (C) IT HAKEN WO BUKKOWASU!
      </footer>

    </div>

  </div>
</template>


<script>

import Sidebar from '~/components/Sidebar.vue'

export default {
  components : {
    Sidebar 
  }
}

</script>

<style>

nav{
  width:100%;
  height:55px;
  background:#003B00;

}
nav h1{
  padding:3px 10px;
  color:#00FF00;
  font-family: 'Press Start 2P', cursive;
}

#sidebar{
  width:20%;
}

#main-content{
  width: 100%;
}



#main-container{
  width:95%;
  margin:0 auto;
  display: flex;
  margin-top:50px;
}
/*小画面では、縦に統一してしまう*/
@media (max-width:580px) {
  nav h1{
    font-size:16px;
  }
  #main-container{
    flex-direction: column;
  }
  #sidebar{
    width:100%;
    margin-bottom:50px;
    border-bottom:solid 1px black;
  }

}



#outbox{
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

footer{
  margin-top:auto;
  background:#F1F3F5;
  width:100%;
  height:100px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  word-wrap: break-word;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}


/***********************/
pre {
    padding: 0px 24px;
    max-width: 800px;
    white-space: pre-wrap;
}
code {
    font-family: Consolas, Monaco, Andale Mono, monospace;
    line-height: 1.5;
    font-size: 13px;
}
blockquote {
    border-left:.5em solid #eee;
    padding: 0 2em;
    margin-left:0;
    max-width: 476px;
}
blockquote  cite {
    font-size:14px;
    line-height:20px;
    color:#bfbfbf;
}
blockquote cite:before {
    content: '\2014 \00A0';
}

blockquote p {  
    color: #666;
    max-width: 460px;
}


</style>
