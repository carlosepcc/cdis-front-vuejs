<template>
  <q-layout view="hHh lpR lFf">
    <q-header elevated class="bg-primary text-white" height-hint="98">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <img src="assets/quasar-logo-full.svg" alt="CD" />
          </q-avatar>
          <strong>
            Gestión de Proceso de Comisión Disciplinaria
          </strong>
        </q-toolbar-title>

        <q-btn dense flat round icon="menu" @click="right = !right" />
      </q-toolbar>

      <q-tabs align="left">
        <q-route-tab to="/" label="Inicio" />
        <q-route-tab to="/denuncias" label="Denuncias" />
        <q-route-tab to="/page3" label="Página Tres" />
      </q-tabs>
    </q-header>

    <q-drawer v-model="right" side="right" overlay bordered>
      <!-- drawer content -->
      <q-list>
        <q-item-label header class="text-grey-8">
          MENÚ
        </q-item-label>
        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
      <!--QPageScroller at end of page for go to Top-->
      <q-page-scroller
        position="bottom-right"
        :scroll-offset="150"
        :offset="[18, 18]"
      >
        <q-btn fab icon="keyboard_arrow_up" color="accent" />
      </q-page-scroller>
    </q-page-container>
  </q-layout>
</template>
<script lang="ts">
import EssentialLink from 'components/EssentialLink.vue';

const linksData = [
  {
    title: 'Ayuda',
    caption: '¿Cómo uso GPCD?',
    icon: 'help',
    link: 'https://quasar.dev'
  },
  {
    title: 'Acerca de',
    caption: 'Información y contacto',
    icon: 'info',
    link: 'https://forum.quasar.dev'
  }
];

import { defineComponent, ref } from '@vue/composition-api';

export default defineComponent({
  name: 'MainLayout',
  components: { EssentialLink },
  setup() {
    const leftDrawerOpen = ref(false);
    const essentialLinks = ref(linksData);

    return { right: false, leftDrawerOpen, essentialLinks };
  }
});
</script>
