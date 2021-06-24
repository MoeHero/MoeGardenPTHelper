<template>
  <v-navigation-drawer
    :value="value" app clipped
    @input="$emit('input', $event)"
  >
    <v-list dense nav>
      <template v-for="route in $router.options.routes">
        <template v-if="route.meta.inMenu !== false">
          <v-list-item
            v-if="route.children === undefined"
            :key="route.path" :to="route.path" color="primary"
          >
            <v-list-item-icon>
              <v-icon>mdi-{{ route.meta.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>{{ route.meta.name }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <template v-else>
            <v-subheader :key="route.path">
              {{ route.meta.name }}
            </v-subheader>

            <v-list-item
              v-for="i in route.children" :key="route.path + '/' + i.path"
              :to="route.path + '/' + i.path" color="primary"
            >
              <v-list-item-icon>
                <v-icon>mdi-{{ i.meta.icon }}</v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title>{{ i.meta.name }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </template>
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
      name: '搜索',
      url: '/',
      icon: 'magnify',
    },
    {
      name: '设置',
      children: [
        {
          name: '常用设置',
          url: '/',
          icon: 'cog-outline',
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
