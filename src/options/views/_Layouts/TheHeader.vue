<template>
  <v-app-bar app clipped-left>
    <v-app-bar-nav-icon @click.stop="$emit('change-mode')"/>

    <v-app-bar-title>
      萌园 PT 助手
    </v-app-bar-title>
  </v-app-bar>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class TheHeader extends Vue {
}
</script>

<style scoped>
.v-app-bar-title >>> .v-app-bar-title__content {
  width: auto !important;
}
</style>
