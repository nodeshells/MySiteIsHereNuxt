<script setup lang="ts">
</script>

<template>
  <div class="px-8 pt-2 bg-[#1a1919] h-screen overflow-y-scroll">
    <div class="bg-fixed sticky top-0 pb-4">
      <CSiteTitle/>
      <CProfileIconAndName class="mt-4"/>
    </div>
    <div class="h-screen z-10 pt-4 space-y-6">
      <ion-item lines="none" color="none">
        <ion-icon class="text-gray-300 contrast-50 brightness-75" color="medium" slot="start" :icon="ioniconsPersonCircle" />
        <div class="text-xl font-bold text-white">プロフィール</div>
        <ion-icon class="text-gray-500 contrast-0 brightness-0" size="small" slot="end" :icon="ioniconsChevronForward"/>
      </ion-item>
      <ion-item lines="none" color="none">
        <ion-icon class="text-gray-300 contrast-50 brightness-75" color="medium" slot="start" :icon="ioniconsBuild"></ion-icon>
        <div class="text-xl font-bold text-white">スキル</div>
        <ion-icon class="text-gray-500 contrast-0 brightness-0" size="small" slot="end" :icon="ioniconsChevronForward"/>
      </ion-item>
      <ion-item lines="none" color="none">
        <ion-icon class="text-gray-300 contrast-50 brightness-75" color="medium" slot="start" :icon="ioniconsFileTrayFull"></ion-icon>
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
