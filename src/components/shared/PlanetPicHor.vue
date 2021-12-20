<template>
  <div class="w-auto relative flex">
    <div class="flex flex-row pt-14 pb-10 px-12 bg-purple-500 mt-10 rounded-3xl">
      <div class="w-7/12 flex flex-col space-y-5">
        <h1 class="text-5xl font-semibold">Your Products</h1>
        <p>Create Your Product Dashboard in Minutes</p>
        <a class="bg-gray-900 w-8/12 rounded-3xl px-12 py-5 max-w-md flex-shrink-0 font-semibold shadow-2xl"
          >Check all settings</a
        >
      </div>
      <div class="w-5/12 flex flex-row justify-center">
        <img class="object-contain" src="../../assets/img/purple-ball.png" />
      </div>
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
