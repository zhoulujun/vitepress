<script lang="ts" setup>
import type { DefaultTheme } from 'vitepress/theme'
import VPFlyout from './VPFlyout.vue'
import { useData } from 'vitepress'
import { isActive } from '../support/utils'
defineProps<{
  item: DefaultTheme.NavItemWithChildren
}>()
const { page } = useData()
</script>

<template>
  <VPFlyout
      :button="item.text"
      :items="item.items"
      :class="{
      active: isActive(
        page.relativePath,
        item.activeMatch || item.link,
        !!item.activeMatch
      )
    }"
  />
</template>
