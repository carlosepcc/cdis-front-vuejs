<!--Una denuncia está compuesta por: el DENUNCIANTE,
 el o los ESTUDIANTES involucrados en la indisciplina,
 la FECHA y la DENUNCIA (texto donde se explica brevemente la indisciplina cometida)-->
<template>
  <q-card>
    <div class="row">
      <div class="col">
        <q-item
          ><!-- DENUNCIANTE -->
          <q-item-section avatar>
            <q-avatar>
              <img
                src="https://www.ecured.cu/images/thumb/4/41/Cult_elenaburke.jpg/135px-Cult_elenaburke.jpg"
              />
            </q-avatar>
          </q-item-section>
          <q-item-section>
            <q-item-label>Nombre del Presidente</q-item-label>
            <q-item-label caption>
              Presidente - Profesor
            </q-item-label>
          </q-item-section>
        </q-item>
        <q-item
          ><!-- DENUNCIANTE -->
          <q-item-section avatar>
            <q-avatar>
              <img
                src="https://www.ecured.cu/images/thumb/4/41/Cult_elenaburke.jpg/135px-Cult_elenaburke.jpg"
              />
            </q-avatar>
          </q-item-section>
          <q-item-section>
            <q-item-label>Nombre del Secretario</q-item-label>
            <q-item-label caption>
              Secretario - Profesor
            </q-item-label>
          </q-item-section>
        </q-item>
      </div>

      <div class="col-auto">
        <q-btn color="grey-7" flat icon="more_horiz">
          <q-menu cover auto-close>
            <q-list>
              <q-item clickable>
                <q-item-section>toDo</q-item-section>
              </q-item>
              <q-item clickable>
                <q-item-section>toDo</q-item-section>
              </q-item>
            </q-list>
          </q-menu>
        </q-btn>
      </div>
    </div>
    <q-separator />

    <q-card-actions vertical align="right"
      ><!-- BOTONES DE ACCION -->
      <q-btn-group flat  class="full-width" >
        <q-btn
          flat
          :icon-right="expanded ? 'keyboard_arrow_up' : 'keyboard_arrow_down'"
          @click="expanded = !expanded"
        >
          <!--TODO:{{implicados.lenght}} -->2&nbsp; Denuncia/s asignadas
        </q-btn>
        <q-btn flat color="primary">Asignar denuncia</q-btn>
      </q-btn-group>
    </q-card-actions>
    <q-separator />
    <q-slide-transition>
      <div v-show="expanded">
        <q-card-section>
          <q-list>
            <card
              v-for="denuncia in [
                {
                  id: 1,
                  name: 'Menganito de Tal y Mascual',
                  user: 'menganitodt',
                  avatar:
                    'https://www.ecured.cu/images/thumb/0/05/Einstein.jpeg/390px-Einstein.jpeg'
                },
                {
                  id: 2,
                  name: 'Ciclanejo de Mascual y Tal',
                  user: 'menganitodt',
                  avatar: 'https://www.ecured.cu/images/c/c6/Alan_Turing_II.jpg'
                }
              ]"
              :key="denuncia.id"
            >
            {{denuncia.id}} {{denuncia.name}}
            </card>
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
