<script setup lang="ts">
import { useData } from 'vitepress'
import { onMounted } from 'vue'
import VPDocAsideOutline from './VPDocAsideOutline.vue'
import VPDocAsideCarbonAds from './VPDocAsideCarbonAds.vue'
import { initGoogleAds } from '../../app/utils'
const { page, theme } = useData()
onMounted(()=>{
  initGoogleAds()
})
</script>

<template>
  <div class="VPDocAside">
    <slot name="aside-top" />

    <slot name="aside-outline-before" />
    <VPDocAsideOutline v-if="page.headers.length" />
    <slot name="aside-outline-after" />

    <div class="spacer" />

    <slot name="aside-ads-before" />
    <VPDocAsideCarbonAds v-if="theme.carbonAds" />
    <ins class="adsbygoogle"
         style="display:block"
         data-ad-client="ca-pub-4116764389732804"
         data-ad-slot="6305710821"
         data-ad-format="auto"
         data-full-width-responsive="true"></ins>
    <slot name="aside-ads-after" />

    <slot name="aside-bottom" />
  </div>
</template>

<style scoped>
.VPDocAside {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.spacer {
  flex-grow: 1;
  min-height: 50px;
}

.VPDocAside :deep(.spacer + .VPDocAsideSponsors),
.VPDocAside :deep(.spacer + .VPDocAsideCarbonAds) {
  margin-top: 24px;
}

.VPDocAside :deep(.VPDocAsideSponsors + .VPDocAsideCarbonAds) {
  margin-top: 16px;
}
</style>
