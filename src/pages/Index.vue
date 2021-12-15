<template>
  <q-page class="row items-center justify-evenly">
   <Login/>
  </q-page>
</template>

<script lang="ts">
import Login from 'src/components/Login.vue'
import { defineComponent, ref } from '@vue/composition-api';

export default defineComponent({
  name: 'PageIndex',
  components: {Login},
  setup() {
    return {};
  }
});
</script>
