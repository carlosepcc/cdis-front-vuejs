<template>
  <q-page class="items-center justify-evenly" padding>
    <div class="q-pa-md q-gutter-sm"></div>
    <Denuncia-card
      v-bind:key="denuncia"
      v-for="denuncia in [1, 2, 3, 4]"
      style="margin-bottom:1em"
    /><!-- toDo -->
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api';
import DenunciaCard from 'src/components/ComisionDisciplinariaCard.vue';

export default defineComponent({
  name: 'Denuncias',
  components: { DenunciaCard },
  setup() {
    return {};
  }
});
</script>
