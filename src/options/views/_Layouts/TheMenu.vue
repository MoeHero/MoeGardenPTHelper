<template>
  <v-navigation-drawer
    :value="value" app clipped
    @input="$emit('input', $event)"
  >
    <v-list dense nav>
      <template v-for="menu in menus">
        <v-list-item
          v-if="menu.children === undefined"
          :key="menu.name" :to="menu.url"
        >
          <v-list-item-icon>
            <v-icon>mdi-{{ menu.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ menu.name }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <template v-else>
          <v-subheader :key="menu.name">
            {{ menu.name }}
          </v-subheader>

          <v-list-item
            v-for="i in menu.children" :key="i.name"
            :to="i.url"
          >
            <v-list-item-icon>
              <v-icon>mdi-{{ i.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>{{ i.name }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </template>
      </template>
    </v-list>
  </v-navigation-drawer>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Menu } from '@/@types/menu';

@Component
export default class TheMenu extends Vue {
  @Prop({
    type: Boolean,
    required: true,
  })
  private value!: boolean;

  private readonly menus: Menu[] = [
    {
      name: '概述',
      url: '/dashboard',
      icon: 'view-dashboard-outline',
    },
    {
      name: '搜索',
      url: '/',
      icon: 'magnify',
    },
    {
      name: '设置',
      url: '/',
      children: [
        {
          name: '常用设置',
          url: '/',
          icon: 'cog-outline',
        },
        {
          name: '站点设置',
          url: '/',
          icon: 'earth',
        },
        {
          name: '下载设置',
          url: '/',
          icon: 'cloud-download-outline',
        },
      ],
    },
  ];
}
</script>
