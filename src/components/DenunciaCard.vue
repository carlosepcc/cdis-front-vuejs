<!--Una denuncia está compuesta por: el DENUNCIANTE,
 el o los ESTUDIANTES involucrados en la indisciplina,
 la FECHA y la DENUNCIA (texto donde se explica brevemente la indisciplina cometida)-->
<template>
  <q-card class="my-card" flat bordered>
    <q-item
      ><!-- DENUNCIANTE -->
      <q-item-section avatar>
        <q-avatar>
          <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
        </q-avatar>
      </q-item-section>
      <q-item-section>
        <q-item-label>Fulanito de Tal y Mascualmás</q-item-label>
        <q-item-label caption>
          Especialista
        </q-item-label>
      </q-item-section>
    </q-item>

    <q-card-section class="q-pt-xs"
      ><!-- DESCRIPCION DENUNCIA -->
      <div class="text-overline">Denuncia:</div>
      <div class="text-caption text-grey">
        Los estudiantes implicados bailaron encima de una mesa e ipsum dolor sit
        amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua.
      </div>
    </q-card-section>

    <q-separator />

    <q-card-actions vertical align="right"
      ><!-- BOTONES DE ACCION -->
      <q-btn-group spread push>
        <q-btn
          flat
          :icon="expanded ? 'keyboard_arrow_up' : 'keyboard_arrow_down'"
          @click="expanded = !expanded"
        >
          Estudiantes implicados
        </q-btn>
        <q-btn push color="primary">Asignar comisión disciplinaria</q-btn>
      </q-btn-group>
    </q-card-actions>

    <q-slide-transition>
      <div v-show="expanded">
        <q-card-section>
          <q-list>
            <q-item
              v-for="denunciado in [
                {
                  id: 1,
                  name: 'Menganito de Tal y Mascual',
                  user: 'menganitodt'
                },
                {
                  id: 2,
                  name: 'Ciclanejo de Mascual y Tal',
                  user: 'menganitodt'
                }
              ]"
              :key="denunciado.id"
              class="q-mb-sm"
              clickable
              v-ripple
            >
              <q-item-section avatar>
                <q-avatar>
                  <img
                    :src="`https://cdn.quasar.dev/img/${denunciado.avatar}`"
                  />
                </q-avatar>
              </q-item-section>

              <q-item-section>
                <q-item-label>{{ denunciado.name }}</q-item-label>
                <q-item-label caption lines="1"
                  >{{ denunciado.user }}@estudiantes.uci.cu</q-item-label
                >
              </q-item-section>

              <q-item-section side>
                <q-icon name="email" />
              </q-item-section>
            </q-item>
          </q-list>
        </q-card-section>
      </div>
    </q-slide-transition>
  </q-card>
</template>

<script lang="ts">
import {
  defineComponent,
  PropType,
  computed,
  ref,
  toRef,
  Ref
} from '@vue/composition-api';
export default defineComponent({
  name: 'DenunciaCard',
  props: {
    denunciante: {
      //todo
      type: String,
      required: false
    }
  },
  setup(props) {
    return {
      expanded: ref(false) //para expandir al lista de la card
    };
  }
});
</script>
