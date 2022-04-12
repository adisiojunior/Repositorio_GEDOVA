<template>
  <div class=container>
    <h3>Submissão</h3>

    <p>Qualquer pessoa que queira disponibilizar seus Objetos Virtuais de Aprendizagem no ROVA de forma gratuita e para uso gratuito, pode fazer seguindo estes procedimentos:</p>
    <p style="margin-left: 25px;"> <v-icon color="black">mdi-sticker-check</v-icon> Verificar se o OVA a ser disponibilizado atendem os critérios de validação;</p>
    <p style="margin-left: 25px;"> <v-icon color="black">mdi-account-plus</v-icon> Se cadastrar no ROVA;</p>
    <p style="margin-left: 25px;"> <v-icon color="black">mdi-folder-upload</v-icon> Enviar através do ROVA, o Objeto a ser validado.</p>
    <p> Após a validação será dado o retorno ao autor com o conceito da validação que pode ser (excelente, ótimo, bom, regular, parcial, reprovado) e decorrente desses conceitos, pode acontecer o seguinte:</p>
    <p>Para os três primeiros conceitos, o OVA está aprovado para ser disponibilizado e opcionalmente, possíveis ajustes podem ser feitos pelo autor com base na validação;</p>
    <p>Os conceitos regular ou parcial, implica que a disponibilização fica condicionada a ajustes sugeridos na validação;</p>
    <p>Recebendo o conceito reprovado, a disponibilização, fica condicionada a uma total reformulação (refazer) o OVA e novo envio, para que seja feita uma nova validação</p>

    <svg class="waves" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path fill="#000b76" fill-opacity="1" d="M0,288L0,192L144,192L144,224L288,224L288,288L432,288L432,64L576,64L576,256L720,256L720,128L864,128L864,288L1008,288L1008,64L1152,64L1152,128L1296,128L1296,96L1440,96L1440,320L1296,320L1296,320L1152,320L1152,320L1008,320L1008,320L864,320L864,320L720,320L720,320L576,320L576,320L432,320L432,320L288,320L288,320L144,320L144,320L0,320L0,320Z">
      </path>
    </svg>
  </div>

</template>

<script>
export default {

}
</script>

<style>
  .container {
    display: grid;
    padding: 40px 0px;
    grid-gap: 40px;
    height: 100%;
  }
  .waves {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
  }
</style>
