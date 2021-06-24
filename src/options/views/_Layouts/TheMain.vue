<template>
  <v-main>
    <v-container fluid>
      <v-card flat>
        <v-breadcrumbs :items="breadcrumbs">
          <template v-slot:divider>
            <v-icon>mdi-chevron-right</v-icon>
          </template>
        </v-breadcrumbs>
      </v-card>

      <router-view/>
    </v-container>
  </v-main>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';

@Component
export default class MainLayout extends Vue {
  private breadcrumbs: any[] = [];

  @Watch('$route')
  private onRouteChange(route) {
    this.breadcrumbs = [{
      disabled: true,
      text: '萌园 PT 助手',
    }];
    route.matched.forEach(r => {
      this.breadcrumbs.push({
        disabled: r.meta.icon === undefined,
        exact: true,
        text: r.meta.name,
        to: r.path,
      });
    });
  }
}
</script>
