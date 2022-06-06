<script setup lang="ts">
import VPIconHeart from './icons/VPIconHeart.vue'
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

            <div class="sponsor-box">
              <button class="sponsor">
                <VPIconHeart class="sponsor-icon" />
                Sponsor
              </button>
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

            <div class="sponsor-box">
              <button class="sponsor">
                <VPIconHeart class="sponsor-icon" />
                Sponsor
              </button>
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

            <div class="sponsor-box">
              <button class="sponsor">
                <VPIconHeart class="sponsor-icon" />
                Sponsor
              </button>
            </div>
          </article>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.VPPageTeam {
  flex-grow: 1;
  padding: 64px 24px 128px;
  min-height: calc(100vh - var(--vp-nav-height) - 113px);
}

.header {
  text-align: center;
}

.container {
  margin: 0 auto;
  max-width: 960px;
}

.title {
  letter-spacing: -0.5px;
  line-height: 56px;
  font-size: 48px;
  font-weight: 600;
}

.lead {
  margin: 0 auto;
  max-width: 640px;
  padding-top: 12px;
  line-height: 28px;
  font-size: 20px;
  font-weight: 500;
  color: var(--vp-c-text-2);
}

.list {
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  padding-top: 48px;
}

.item {
  width: calc((100% - (24px * 2)) / 3);
}

.box {
  position: relative;
  display: flex;
  flex-direction: column;
  border-radius: 12px;
  padding: 48px 48px 0px;
  height: 100%;
  background-color: var(--vp-c-bg-soft);
}

.sponsor-box {
  margin: 32px -48px 0;
  border-top: 2px solid var(--vp-c-bg);
  padding: 16px 0;
  text-align: center;
}

.sponsor {
  display: flex;
  justify-content: center;
  align-items: center;
  /* border: 1px solid var(--vp-c-sponsor); */
  padding: 3px 8px;
  width: 100%;
  line-height: 20px;
  font-size: 14px;
  font-weight: 500;
  color: var(--vp-c-sponsor);
}

.sponsor-icon {
  margin-right: 8px;
  width: 14px;
  height: 14px;
  fill: currentColor;
}

.avatar {
  position: relative;
  border-radius: 50%;
  margin: 0 auto;
  width: 96px;
  height: 96px;
  overflow: hidden;
  box-shadow: var(--vp-shadow-3);
}

.img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.name {
  padding-top: 24px;
  text-align: center;
  font-size: 16px;
  font-weight: 600;
}

.job {
  padding-top: 2px;
  text-align: center;
  line-height: 20px;
  font-size: 14px;
  font-weight: 500;
  color: var(--vp-c-text-2);
}

.desc {
  /* display: none; */
  flex-grow: 1;
  padding-top: 20px;
  text-align: center;
  line-height: 20px;
  font-size: 14px;
}

.links {
  padding-top: 24px;
  /* transform: translateX(-8px); */
}

.links :deep(.VPSocialLinks) {
  /* justify-content: flex-start; */
}
</style>
