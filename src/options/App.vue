<template>
  <v-app>
    <TheHeader @change-mode="drawerShow = !drawerShow"/>

    <TheMenu v-model="drawerShow"/>

    <TheMain/>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import TheMenu from './views/_Layouts/TheMenu.vue';
import TheHeader from './views/_Layouts/TheHeader.vue';
import TheMain from './views/_Layouts/TheMain.vue';

@Component({
  components: {
    TheMenu,
    TheHeader,
    TheMain,
  },
})
export default class App extends Vue {
  private drawerShow = innerWidth > 1263;
}
</script>
