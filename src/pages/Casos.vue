<template>
  <q-page class="items-center justify-evenly" padding>
    <div class="q-pa-md q-gutter-sm"></div>
    <Caso-card
      v-bind:key="caso"
      v-for="caso in [1, 2, 3, 4]"
      style="margin-bottom:1em"
    /><!--TODO:-->
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api';
import CasoCard from 'src/components/CasoCard.vue';

export default defineComponent({
  name: 'Casos',
  components: { CasoCard },
  setup() {
    return {};
  }
});
</script>
