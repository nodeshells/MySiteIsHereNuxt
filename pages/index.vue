<script setup lang="ts">
const scrollListElementRef = ref();
const bgFixedRef = ref();
const state = reactive({
  overlapPercent: 0,
  controlTitleAnimationClass: '',
  controlProfileAnimationClass: '',
  isChangeAnimation: false,
});

const checkIsOverlap = (underTargetElement, overLapTargetElement) => {
  const rect1 = underTargetElement.getBoundingClientRect();
  const rect2 = overLapTargetElement.getBoundingClientRect();

  const overlapPercent = ref(0);


  const overlapWidth = Math.max(0, Math.min(rect1.right, rect2.right) - Math.max(rect1.left, rect2.left));
  const overlapHeight = Math.max(0, Math.min(rect1.bottom, rect2.bottom) - Math.max(rect1.top, rect2.top));

  const underTargetArea = (rect1.width * rect1.height);
  const overlapArea = (overlapWidth * overlapHeight);

  overlapPercent.value = Math.floor((overlapArea / underTargetArea) * 100);

  return overlapPercent;
};

/**
 * バックグラウンドのアニメーションを重なりを元に制御する
 */
const controlBgAnimation = () => {
  state.isChangeAnimation = true;
  const animationClass = 'transition duration-300';
  if(state.overlapPercent >= 75){
    state.controlTitleAnimationClass = `${animationClass} opacity-0`;
  } else if (state.overlapPercent >= 50) {
    state.controlTitleAnimationClass = `${animationClass} brightness-50`;
    state.controlProfileAnimationClass = `${animationClass} brightness-50`;
  } else if (state.overlapPercent >= 25) {
    state.controlTitleAnimationClass = `${animationClass} brightness-75`;
    state.controlProfileAnimationClass = `${animationClass} brightness-75`;
  } else {
    state.controlTitleAnimationClass = `${animationClass} brightness-100`;
    state.controlProfileAnimationClass = `${animationClass} brightness-100`
  }
  state.isChangeAnimation = false;
};

const onScroll = () => {
  const scrollLIstElement = scrollListElementRef.value;
  const bgFixedElement = bgFixedRef.value;
  state.overlapPercent = checkIsOverlap(bgFixedElement, scrollLIstElement);
  if(state.isChangeAnimation) return;
  controlBgAnimation();
};
</script>

<template>
  <div class="px-8 pt-2 bg-[#1a1919] h-screen overflow-y-scroll" @scroll="onScroll">
    <div ref="bgFixedRef" class="bg-fixed sticky top-0 pb-4 transition duration-200">
      <CSiteTitle  :class="state.controlTitleAnimationClass"/>
      <CProfileIconAndName  class="mt-4" :class="state.controlProfileAnimationClass"/>
    </div>
    <div ref="scrollListElementRef" class="h-screen z-10 pt-4 space-y-6 overflow-y-scroll">
      <ion-item lines="none" color="none">
        <ion-icon class="text-gray-300 contrast-50 brightness-75" color="medium" slot="start"
                  :icon="ioniconsPersonCircle"/>
        <div class="text-xl font-bold text-white">プロフィール</div>
        <ion-icon class="text-gray-500 contrast-0 brightness-0" size="small" slot="end" :icon="ioniconsChevronForward"/>
      </ion-item>
      <ion-item lines="none" color="none">
        <ion-icon class="text-gray-300 contrast-50 brightness-75" color="medium" slot="start"
                  :icon="ioniconsBuild"></ion-icon>
        <div class="text-xl font-bold text-white">スキル</div>
        <ion-icon class="text-gray-500 contrast-0 brightness-0" size="small" slot="end" :icon="ioniconsChevronForward"/>
      </ion-item>
      <ion-item lines="none" color="none">
        <ion-icon class="text-gray-300 contrast-50 brightness-75" color="medium" slot="start"
                  :icon="ioniconsFileTrayFull"></ion-icon>
        <div class="text-xl font-bold text-white">経歴</div>
        <ion-icon class="text-gray-500 contrast-0 brightness-0" size="small" slot="end" :icon="ioniconsChevronForward"/>
      </ion-item>
      <hr class="h-px my-8 border-0 bg-gray-500 contrast-0 brightness-0 opacity-20">
    </div>
  </div>
</template>

<style lang="scss" scoped>
ion-item {
  --padding-start: 0;
  --inner-padding-end: 0px;
}
</style>
