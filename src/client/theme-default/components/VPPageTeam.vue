<script setup lang="ts">
import VPSocialLinks from './VPSocialLinks.vue'
</script>

<template>
  <div class="VPPageTeam">
    <div class="container">
      <div class="header">
        <h1 class="title">Meet the Team</h1>
        <p class="lead">
          The development of VitePress is guided by an international team, some
          of whom have chosen to be featured below.
        </p>
      </div>

      <div class="list">
        <div class="item">
          <article class="box">
            <div class="avatar">
              <img class="img" src="https://www.github.com/yyx990803.png">
            </div>

            <h1 class="name">
              Evan You
            </h1>
            
            <p class="job">
              Creator @ <a href="https://example.com">Vue.js</a>
            </p>

            <p class="desc">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.
            </p>

            <div class="links">
              <VPSocialLinks
                :links="[
                  { icon: 'github', link: 'https://exampl.ecom' },
                  { icon: 'twitter', link: 'https://exampl.ecom' }
                ]"
              />
            </div>
          </article>
        </div>

        <div class="item">
          <article class="box">
            <div class="avatar">
              <img class="img" src="https://www.github.com/kiaking.png">
            </div>

            <h1 class="name">
              Kia King Ishii
            </h1>

            <p class="job">
              Director @ <a href="https://example.com">Global Brain</a>
            </p>

            <p class="desc">
              Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>

            <div class="links">
              <VPSocialLinks
                :links="[
                  { icon: 'github', link: 'https://exampl.ecom' },
                  { icon: 'twitter', link: 'https://exampl.ecom' }
                ]"
              />
            </div>
          </article>
        </div>

        <div class="item">
          <article class="box">
            <div class="avatar">
              <img class="img" src="https://www.github.com/brc-dd.png">
            </div>

            <h1 class="name">
              Divyansh Singh
            </h1>

            <p class="job">
              Developer @ <a href="https://example.com">IIIT Kota</a>
            </p>

            <p class="desc">
              Incididunt ut labore et dolore magna aliqua.
            </p>

            <div class="links">
              <VPSocialLinks
                :links="[
                  { icon: 'github', link: 'https://exampl.ecom' },
                  { icon: 'twitter', link: 'https://exampl.ecom' }
                ]"
              />
            </div>
          </article>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.VPPageTeam {
  padding: 64px 24px 128px;
}

.container {
  margin: 0 auto;
  max-width: 960px;
}

.title {
  line-height: 48px;
  font-size: 40px;
  font-weight: 600;
}

.lead {
  max-width: 512px;
  padding-top: 8px;
  font-weight: 500;
  color: var(--vp-c-text-2);
}

.list {
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  padding-top: 40px;
}

.item {
  width: calc((100% - (24px * 2)) / 3);
}

.box {
  display: flex;
  flex-direction: column;
  border-radius: 12px;
  padding: 40px 40px 24px;
  height: 100%;
  background-color: var(--vp-c-bg-soft);
}

.avatar {
  position: relative;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  overflow: hidden;
  transform: translate(-4px, -4px);
}

.img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.name {
  padding-top: 20px;
  font-size: 16px;
  font-weight: 600;
}

.job {
  line-height: 20px;
  font-size: 14px;
  font-weight: 500;
  color: var(--vp-c-text-2);
}

.desc {
  flex-grow: 1;
  padding-top: 16px;
  line-height: 20px;
  font-size: 14px;
}

.links {
  padding-top: 28px;
  transform: translateX(-8px);
}

.links :deep(.VPSocialLinks) {
  justify-content: flex-start;
}
</style>
