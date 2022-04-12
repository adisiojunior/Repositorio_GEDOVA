<template>
  <div class=container>
     <Navbar />
    <div class=gridInfo style="margin-top: 40px;">
      <p class="textInfo">ROVA - Repositório de Objetos Virtuais de Aprendizagem</p>

      <v-btn icon >
          <img src="https://img.icons8.com/fluency/48/000000/brazil-circular.png" style="width: 30px;height: 30px;"/>
      </v-btn>
      <v-btn icon>
        <img src="https://img.icons8.com/color/48/000000/usa-circular.png" style="width: 30px;height: 30px;"/>
      </v-btn>
      <v-btn icon>
        <img src="https://img.icons8.com/color/48/000000/spain2-circular.png" style="width: 30px;height: 30px;"/>
      </v-btn>

      <p class="textBarra">|</p>

      <v-btn icon>
         <v-icon color="black">mdi-book-arrow-left-outline</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon color="black">mdi-book-arrow-right-outline</v-icon>
      </v-btn>

      <p class="textBarra">|</p>

      <v-btn icon style="grid-columns:2"><p class="textInfo">B</p></v-btn>
      <v-btn icon><p class="textInfo">B-</p></v-btn>
      <v-btn icon><p class="textInfo">B+</p></v-btn>
    </div>

    <div class="">
      <v-card class="cardPesquisa gridPesquisa">

        <v-text-field style="grid-column: 1 / span 5;"
          outlined
          label="Pesquisa"
          append-icon="mdi-file-search-outline"
        ></v-text-field>

        <v-btn style="grid-column: 6;"
          class="ma-2"
          outlined
          color="indigo"
        >
          Avançado
        </v-btn>

        <v-btn style="margin-left: 115px;"
          class="ma-2"
          outlined
          color="indigo"
        >
          titulo
        </v-btn>

        <v-btn style="margin-left: 115px;"
          class="ma-2"
          outlined
          color="indigo"
        >
          Autor
        </v-btn>

        <v-btn style="margin-left: 115px;"
          class="ma-2"
          outlined
          color="indigo"
        >
          Data
        </v-btn>

      </v-card>

      <v-card class="cardCentral gridCentral" style="margin-top:64px;">
        <v-card class="gridLeft" style="background-color:#FFFFFF">
          <v-btn style="grid-row: 1; height:64px;margin-left: 40px;"
            class="ma-2"
            outlined
            color="indigo"

          >
          <router-link to="/sobre" style="color: black;">
            Sobre o Repositório
          </router-link>

          </v-btn>

          <v-btn style="height:64px;margin-left: 40px;"
            class="ma-2"
            outlined
            color="indigo"
          >
            <router-link to="/metadados" style="color: black;">
            Metadados
          </router-link>
          </v-btn>

          <v-btn style="height:64px;margin-left: 40px;"
            class="ma-2"
            outlined
            color="indigo"
          >
          <router-link to="/validacao" style="color: black;">
            Critérios de <br> Validação
          </router-link>

          </v-btn>
          <v-btn style="height:64px;margin-left: 40px;"
            class="ma-2"
            outlined
            color="indigo"
          >
          <router-link to="/submissao" style="color: black;">
            Submissão de Ovas <br> ao Repositório
          </router-link>

          </v-btn>
        </v-card>

        <v-card class="gridCenter" style="background-color:#FFFFFF">
          <v-col cols="6" style="grid-column:2;margin-top: 16px;max-width:100%">
            <v-card>
              <v-img
                :src="require('@/assets/static/educacaoInfantil.jpg')"
                height="125"
                class="grey darken-4"
              ></v-img>
              <v-card-title class="text-h6">
                Educação Infantil
              </v-card-title>
            </v-card>
          </v-col>

           <v-col cols="6" style="grid-column:3;margin-top: 16px;max-width:100%">
            <v-card>
              <v-img
                :src="require('@/assets/static/ensinoFundamental.jpg')"
                height="125"
                class="grey darken-4"
              ></v-img>
              <v-card-title class="text-h6">
                Ensino Fundamental
              </v-card-title>
              <v-card-subtitle style="margin-top: -28px;">
                Anos Iniciais
              </v-card-subtitle>
            </v-card>
          </v-col>
           <v-col cols="6" style="grid-column:4;margin-top: 16px;max-width:100%">
            <v-card>
              <v-img
                :src="require('@/assets/static/ensinoMedio.jpg')"
                height="125"
                class="grey darken-4"
              ></v-img>
              <v-card-title class="text-h6">
                Ensino Fundamental
              </v-card-title>
              <v-card-subtitle>
                Anos Finais
              </v-card-subtitle>
            </v-card>
          </v-col>

          <v-col cols="6" style="grid-column:2;max-width:100%">
            <v-card>
              <v-img
                :src="require('@/assets/static/ensinoMedio.jpg')"
                height="125"
                class="grey darken-4"
              ></v-img>
              <v-card-title class="text-h6">
                Ensino Médio
              </v-card-title>
            </v-card>
          </v-col>
           <v-col cols="6" style="grid-column:3;max-width:100%">
            <v-card>
              <v-img
                :src="require('@/assets/static/educacaoSuperior.jpg')"
                height="125"
                class="grey darken-4"
              ></v-img>
              <v-card-title class="text-h6">
                Educação Superior
              </v-card-title>
            </v-card>
          </v-col>
           <v-col cols="6" style="grid-column:4;max-width:100%">
            <v-card>
              <v-img
                :src="require('@/assets/static/educacaoSuperior.jpg')"
                height="125"
                class="grey darken-4"
              ></v-img>
              <v-card-title class="text-h6">
                Modalidade de ensino
              </v-card-title>
            </v-card>
          </v-col>
        </v-card>

        <v-card class="gridLeft" style="background-color:#FFFFFF">
          <v-btn style="grid-row: 1; height:64px;margin-left: 40px;"
            class="ma-2"
            outlined
            color="indigo"
          >
            <router-link to="/login" style="color: black;">
              Login
            </router-link>
          </v-btn>

          <v-btn style="height:64px;margin-left: 40px;"
            class="ma-2"
            outlined
            color="indigo"

          >
            <router-link to="/sugestao" style="color: black;">
              Sugestão de Uso
            </router-link>
          </v-btn>

          <v-btn style="height:64px;margin-left: 40px;"
            class="ma-2"
            outlined
            color="indigo"

          >
            <router-link to="/relatos" style="color: black;">
              Relatos de <br>experiências
            </router-link>

          </v-btn>
          <v-btn style="height:64px;margin-left: 40px;"
            class="ma-2"
            outlined
            color="indigo"
          >
            <router-link to="/links" style="color: black;">
              Links importantes
            </router-link>

          </v-btn>
        </v-card>
      </v-card>

    </div>

  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'

export default {
  components: {
    Navbar
  },

  name: 'Home',
  data () {
     return {
    image: require('../assets/brasil.png')
  }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@900&display=swap');

.container {
  display: grid;
  padding: 40px 0px;
  grid-gap: 40px;
}
.gridInfo {
  display: grid;
  grid-template-columns: 1320px 50px 50px 50px 10px 50px 50px 10px 50px 50px 50px;
}
.textInfo {
  font-family: 'Lato', sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 1px;
  /* text-align: right; */
  /* margin-right: 825px; */
  width: 535px;
  color: black;
}
.textBarra {
  /* font-family: 'Lato', sans-serif; */
  font-size: 28px;
  font-style: normal;
  /* font-weight: 200; */
  line-height: 30px;
  letter-spacing: 1px;
  /* text-align: right; */
  /* margin-right: 825px; */
  /* width: 535px; */
  color: black;
}
.cardPesquisa {
  padding: 24px;
  position: static;
  width: 1730px;
  height: 134px;
  left: 0px;
  top: 0px;
  /* light/core/background-primary */
  background: #ffffff;
  /* light/neutral-color-20 */
  border: 0.5px solid #d3d8d9;
  box-sizing: border-box;
  /* shadow-level-01 */
  box-shadow: 0px 4px 8px rgba(29, 35, 39, 0.08),
    0px 0px 2px rgba(29, 35, 39, 0.06), 0px 0px 1px rgba(29, 35, 39, 0.04);
  border-radius: 8px;
  /* Inside Auto Layout */
  margin-right: 24px;
}
.cardCentral {
  padding: 24px;
  position: static;
  width: 1730px;
  height: 555px;
  left: 0px;
  top: 0px;
  /* light/core/background-primary */
  background: #ffffff;
  /* light/neutral-color-20 */
  border: 0.5px solid #d3d8d9;
  box-sizing: border-box;
  /* shadow-level-01 */
  box-shadow: 0px 4px 8px rgba(29, 35, 39, 0.08),
    0px 0px 2px rgba(29, 35, 39, 0.06), 0px 0px 1px rgba(29, 35, 39, 0.04);
  border-radius: 8px solid black;
  /* Inside Auto Layout */
  margin-right: 24px;
}

.cardsCentrais {
  padding: 24px;
  position: static;
  width: 245px;
  height: 134px;
  left: 0px;
  top: 0px;
  /* light/core/background-primary */
  background: #ffffff;
  /* light/neutral-color-20 */
  border: 0.5px solid #d3d8d9;
  box-sizing: border-box;
  /* shadow-level-01 */
  box-shadow: 0px 4px 8px rgba(29, 35, 39, 0.08),
    0px 0px 2px rgba(29, 35, 39, 0.06), 0px 0px 1px rgba(29, 35, 39, 0.04);
  border-radius: 8px solid black;
  /* Inside Auto Layout */
  margin-right: 24px;
}

.gridPesquisa {
  display: grid;
  grid-template-columns: 320px 320px 320px 270px 220px;
  grid-template-rows: 56px;
}
.gridCentral {
  display: grid;
  grid-template-columns: 300px 1000px 300px;
  grid-gap: 40px;

}
* {
  /* padding: 0; */
  /* margin: 0; */
}
.textAvançado {
  font-family: 'Lato', sans-serif;
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 1px;
  /* text-align: right; */
  /* margin-right: 825px; */
  /* width: 530px; */
  color: black;
  margin-top: 20px;
}

.v-btn:not(.v-btn--round).v-size--default {
    height: 36px;
    width: 209px;
    padding: 0 16px;
    margin-left: 20px;
    margin-top: 10px;
}
.gridLeft {
  display: grid;
  grid-template-rows: 1fr 1fr 1fr 1fr;
}
.gridCenter {
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 60px 300px 300px 300px 24px;
}

.router-link-active {
  font-family: "IBM Plex Sans", sans-serif;
  font-size: 16px;
  padding: 0px 15px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px;
  letter-spacing: 0.25px;
  color: #f48120;
}
a {
  display: flex;
  flex-direction: row;
  font-family: "IBM Plex Sans", sans-serif;
  text-decoration: none;
  padding: 0px 15px;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: 0.25px;
  color: "black";
}
</style>
