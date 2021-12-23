<template>
  <div class="w-auto relative flex">
    <div class="flex flex-row pt-14 pb-10 px-12 bg-secondary mt-10 rounded-3xl">
      <div class="w-8/12 flex mr-10 flex-col justify-center space-y-5">
        <h1 class="text-5xl w-full font-semibold">Your Products</h1>
        <p>Create Your Product Dashboard in Minutes</p>
        <a
          class="
            bg-primary-intermediate
            w-8/12
            text-center
            rounded-3xl
            flex-initial
            px-10
            py-5
            max-w-md
            flex-shrink-0
            font-semibold
            shadow-2xl
          "
          >Check all settings</a
        >
      </div>
      <div class="w-6/12 items-center max-w-72 flex flex-row justify-center">
        <img class="object-contain" src="../../assets/img/darker-purple-ball.png" />
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
