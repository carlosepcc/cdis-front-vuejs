<!--Una denuncia está compuesta por: el DENUNCIANTE,
 el o los ESTUDIANTES involucrados en la indisciplina,
 la FECHA y la DENUNCIA (texto donde se explica brevemente la indisciplina cometida)-->
<template>
  <div class="q-pa-md">
    <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
      <q-input
        filled
        type="date"
        v-model="name"
        label="Fecha de la indisciplina *"
        hint="Fecha de la indisciplina"
        lazy-rules
        :rules="[val => (val && val.length > 0) || 'Please type something']"
      />

      <q-input
        filled
        type="text"
        v-model="denunciados"
        label="Estudiantes involucrados *"
        lazy-rules
        :rules="[
          val =>
            (val !== null && val !== '') ||
            'Por favor especifique los estudiantes involcrados en la indisciplina.'
        ]"
      />
      <q-input
        filled
        type="textarea"
        v-model="description"
        label="Descripción *"
        lazy-rules
        :rules="[
          val =>
            (val !== null && val !== '') || 'Por favor escriba una descripción.'
        ]"
      />


      <q-card-actions vertical align="right"
        ><!-- BOTONES DE ACCION -->
        <q-btn-group flat class="full-width">
          <q-btn
            label="Limpiar campos"
            type="reset"
            color="negative"
            flat
            class="q-ml-sm"
          />
          <q-btn
            label="Denunciar"
            type="submit"
            color="primary"
            disable="FIXME:!(denunciados && description && date)"
          />
        </q-btn-group>
      </q-card-actions>
    </q-form>
  </div>
</template>

<script lang="ts">
//i-mport { useQuasar } from 'quasar' //FIXME:
import {
  defineComponent,
  PropType,
  computed,
  ref,
  toRef,
  Ref
} from '@vue/composition-api';
export default defineComponent({
  name: 'DenunciaForm',
  setup() {
    //const $q = useQuasar() //FIXME:

    const description = ref(null);
    const date = ref(new Date()); //FIXME:
    const denunciados = ref([]); //FIXME:
    return {
      /* FIXME: onSubmit () {
        if (accept.value !== true) {
          $q.notify({
            color: 'red-5',
            textColor: 'white',
            icon: 'warning',
            message: 'You need to accept the license and terms first'
          })
        }
        else {
          $q.notify({
            color: 'green-4',
            textColor: 'white',
            icon: 'cloud_done',
            message: 'Submitted'
          })
        }
      },

      onReset () {
        name.value = null
        age.value = null
        denunciados.value = false
      } */
    };
  }
});
</script>
