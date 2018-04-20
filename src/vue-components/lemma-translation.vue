<template>
  <div class="lemma-translation">
    <h5>Lemma Translation: <span>{{ lemma.translation.input }}</span></h5>
    <p v-for="translation in lemma.translation.translations" :key="translation">{{ translation }}</p>
  </div>
</template>
<script>
export default {
  name: 'LemmaTranslation',
  props: {
    lemma: {
      type: Object,
      required: true
    }
  }
}
</script>
<style lang="scss">
.lemma-translation {
  h5 {
    margin-top: 5px 0 0 9px;
    font-weight: 600;
  }
  p {
    margin: 0 0 0 20px;
  }
}
</style>
