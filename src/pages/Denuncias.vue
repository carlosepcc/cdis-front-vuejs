<template>
  <q-page class="items-center justify-evenly" padding>
    <div class="q-pa-md q-gutter-sm"></div>

    <q-card style="margin-bottom:1em">
      <Denuncia-form />
    </q-card>

    <q-expansion-item />
    <Denuncia-card
      v-bind:key="denuncia"
      v-for="denuncia in [1, 2, 3, 4]"
      style="margin-bottom:1em"
    /><!-- TODO:-->
  </q-page>
</template>

<script lang="ts">
import { Todo, Meta } from 'components/models';
import { defineComponent, ref } from '@vue/composition-api';
import DenunciaCard from 'src/components/DenunciaCard.vue';
import DenunciaForm from 'src/components/DenunciaForm.vue';

export default defineComponent({
  name: 'Denuncias',
  components: { DenunciaCard, DenunciaForm },
  setup() {
    const todos = ref<Todo[]>([
      {
        id: 1,
        content: 'ct1'
      },
      {
        id: 2,
        content: 'ct2'
      },
      {
        id: 3,
        content: 'ct3'
      },
      {
        id: 4,
        content: 'ct4'
      },
      {
        id: 5,
        content: 'ct5'
      }
    ]);
    const meta = ref<Meta>({
      totalCount: 1200
    });
    return { todos, meta };
  }
});
</script>
