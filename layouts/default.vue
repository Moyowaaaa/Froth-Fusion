<template>
  <div class="defaultLayout" id="defaultLayout">
    <Navbar />
    <div class="defaultLayout__content">
      <slot />
    </div>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import groteskFont from "/fonts/DTGetaiGroteskDisplay-Black.otf";
import mabyFont from "/fonts/MabryPro-Regular.ttf";
import doctorGlitch from "/fonts/doctor.otf";
import mabyMd from "/fonts/MabryPro-Medium.ttf";
import { gsap } from "gsap";

import titleCan from "/images/mainCan.png";
import titleImage1 from "/images/somefruit.png";
import titleImage2 from "/images/lemon.png";
import titleImage3 from "/images/strawberry.png";
import background from "/images/background.png";

const fonts = [groteskFont, mabyFont, mabyMd, doctorGlitch];

const assets = [titleCan, titleImage1, titleImage2, titleImage3, background];

onMounted(() => {
  //assets check
  const promises: any[] = [];

  assets.forEach((asset) => {
    const img = new Image();
    img.src = asset;
    promises.push(
      new Promise((resolve, reject) => {
        img.onload = resolve;
        img.onerror = reject;
      })
    );
  });
  new Promise((resolve, reject) => {
    fonts.forEach((font) => {
      const handwriting = new FontFace("f", `url(${font})`);
      handwriting.load().then(resolve, reject);
    });
    Promise.all(promises).then(() => {
      gsap.set("#defaultLayout", {
        autoAlpha: 0,
      });
      gsap.to("#defaultLayout", {
        delay: 0.2,
        autoAlpha: 1,
      });

      const container: HTMLDivElement | null =
        document.querySelector("#defaultLayout");
      if (container) {
        container.style.display = "block";
      }
    });
  });
});
</script>

<style scoped lang="scss">
#defaultLayout {
  display: none;
}
</style>
