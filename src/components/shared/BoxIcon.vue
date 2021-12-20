<template>
  <svg
    class="mr-10"
    width="18"
    height="16"
    viewBox="0 0 18 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="1.5"
      y="1.5"
      width="15"
      height="3"
      stroke="white"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M14.5 6.5V14.5H3.5V6.5"
      stroke="white"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <rect
      x="6.5"
      y="7.5"
      width="5"
      height="3"
      stroke="white"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>

<script>
export default {
  name: 'BoxIcon',
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
