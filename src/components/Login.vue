<template>
   <q-card>
     <div class="q-pa-md" style="max-width: 400px">
    <q-form
      @submit="onSubmit"
      @reset="onReset"
      class="q-gutter-md"
    >
      <q-input
        filled
        v-model="name"
        label="Usuario"
        hint="nombredeusuario"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Por favor, escriba su nombre de usuario',
                  val => val && val || 'Por favor, escriba un nombre de usuario válido, sin espacios'
                  ]"
      />

      <q-input
        filled
        type="password"
        v-model="password"
        label="Contraseña"
        lazy-rules
        :rules="[
          val => val !== null && val !== '' || 'Por favor, escriba su contraseña',
          val => val && val.length > 3 || 'Por favor, escriba más de 3 caracteres'
        ]"
      />

      <q-toggle v-model="remember" label="Recordar usuario" />

      <div>
        <q-btn class="full-width" label="Entrar" type="submit" color="primary"/>
        </div>
    </q-form>

  </div>
     </q-card>
</template>


<script lang="ts">
/* import { useQuasar } from '@quasar/use' */
import { ref } from '@vue/composition-api'


export default {
  setup () {
    /* const $q = useQuasar() */

    const name = ref(null)
    const password = ref(null)
    const remember = ref(false)

    return {
      name,
      password,//FIXME: PASSWORD
      remember,

      onSubmit () {
        if (remember.value !== true) {
          $q.notify({
            color: 'red-5',
            textColor: 'white',
            icon: 'warning',
            message: 'You need to remember the license and terms first'
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
        remember.value = false
      }
    }
  }
}
</script>
<style>

</style>