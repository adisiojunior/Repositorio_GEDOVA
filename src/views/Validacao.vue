<template>
  <div class=container>
    <h3>Critérios de validação e/ou avaliação</h3>
    <p>São os critérios utilizados para fazer a validação dos Objetos Virtuais
      de Aprendizagem, a serem disponibilizados no ROVA. São 50 critérios
      distribuídos em três dimensões (técnica, pedagógica e contextual). Foram
      definidos pelos responsáveis pelo Repositório que também são os
      responsáveis pela validação objetos.</p>

    <p>Em cada dimensão, os critérios são apresentados através do código, tipo,
      breve descrição e peso, respectivamente. Após a validação, cada critério
      apresenta uma quantidade de pontos, que são somados para compor a pontuação
      final, da qual é atribuída uma qualificação. Os critérios de validação podem
      ser conferidos no arquivo (link).</p>

    <p>Também foram definidos 30 critérios para avaliação pedagógica (um
      subconjunto dos 50 critérios de validação), seguindo a mesma metodologia.
      Os critérios de avaliação pedagógica estão disponíveis no arquivo (link)</p>

    <svg class="waves" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#000b76" fill-opacity="1" d="M0,0L1440,288L1440,320L0,320Z"></path></svg>
    <svg class="waves" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#5000ca" fill-opacity="1" d="M0,288L1440,64L1440,320L0,320Z"></path></svg>
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
