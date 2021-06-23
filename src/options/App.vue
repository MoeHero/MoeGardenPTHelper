<template>
  <v-app>
    <TheHeader @change-mode="drawerShow = !drawerShow"/>

    <TheMenu v-model="drawerShow"/>

    <v-main>
      <v-container fluid>
        <router-view/>
      </v-container>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import TheMenu from './views/_Layouts/TheMenu.vue';
import TheHeader from './views/_Layouts/TheHeader.vue';

@Component({
  components: {
    TheMenu,
    TheHeader,
  },
})
export default class App extends Vue {
  private drawerShow = innerWidth > 1263;
}
</script>
