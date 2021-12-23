<template>
  <div class="w-auto relative flex items-center justify-center">
    <div class="bg-light h-32 px-12 w-11/12 rounded-3xl absolute -bottom-2"></div>
    <div class="bg-light h-40 px-12 w-10/12 rounded-3xl absolute -bottom-4"></div>
    <div
      class="
        mt-6
        p-10
        flex flex-col
        justify-center
        bg-secondary
        rounded-3xl
        items-center
        text-center
        color
        w-full
        relative
      "
    >
      <img class="w-48" src="../../assets/img/purple-ball.png" />
      <h2 class="mt-5 text-2xl font-semibold">
        Set a Google <br />
        Analytics Code
      </h2>
      <p class="mt-5 text-sm">Did you know you can set a Google Analytics code for your products?</p>
      <a class="bg-gray-900 rounded-3xl mt-5 px-12 py-5 font-semibold shadow-2xl">Go Setting</a>
      <div class="mt-7 flex justify-center space-x-4">
        <svg class="w-1" viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle opacity="0.3" cx="2" cy="2" r="2" fill="white" />
        </svg>
        <svg class="w-2" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="6" cy="4" r="4" fill="#A0D7E7" />
          <g filter="url(#filter0_d_1097_2583)">
            <circle cx="6" cy="4" r="2" fill="white" />
          </g>
          <defs>
            <filter
              id="filter0_d_1097_2583"
              x="0"
              y="0"
              width="12"
              height="12"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="2" />
              <feGaussianBlur stdDeviation="2" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.243007 0" />
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1097_2583" />
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1097_2583" result="shape" />
            </filter>
          </defs>
        </svg>
        <svg class="w-1" viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle opacity="0.3" cx="2" cy="2" r="2" fill="white" />
        </svg>
        <svg class="w-1" viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle opacity="0.3" cx="2" cy="2" r="2" fill="white" />
        </svg>
      </div>
    </div>
    <div
      class="
        rounded-full
        w-10
        h-10
        text-center
        flex
        justify-center
        items-center
        drop-shadow-2xl
        bg-gray-900
        z-40
        absolute
        right-3
        top-8
      "
    >
      <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9 1L1 9" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M9 9L1 1" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PlanetPicVert',
  props: {},
  methods: {
    onClick() {
      this.$emit('onClick');
    },
    onMousedown() {
      this.$emit('onMousedown');
    },
  },
};
</script>
