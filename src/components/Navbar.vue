<template>
  <div>
    <v-app-bar
      color="white"
      height="66px"
      fixed
      style="padding: 0px 77px"
    >


      <v-toolbar-title class="titulo" style="height:25px; margin-left:545px">ROVA - Respositório de Objetos Virtuais de Aprendizagem</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon style="color: black;">
        <v-icon color="black">mdi-heart</v-icon>
      </v-btn>

      <v-btn icon style="color: black;">
        <v-icon color="black">mdi-magnify</v-icon>
      </v-btn>


      <v-btn icon style="color: black;">
        <v-icon color="black">mdi-dots-vertical</v-icon>
      </v-btn>


    </v-app-bar>
  </div>
</template>

<script>
export default {

}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@900&display=swap');

.theme--light.v-app-bar.v-toolbar.v-sheet {
    background-color: #ffffff;
}
.titulo {
  font-family: 'Lato', sans-serif;
  font-size: 22px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px;
  letter-spacing: 0px;
  text-align: right;
  margin-right: 12px;
}

.v-btn::before {
  background-color: transparent;
}

</style>

