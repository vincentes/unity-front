<template>
  <div class="relative">
    <select
      placeholder="Filter"
      class="
        w-full
        rounded-2xl
        bg-primary-intermediate
        select-none
        focus:ring-opacity-500 focus:ring-gray-700 focus:outline-none
        btn btn-blue
        appearance-none
        px-5
        py-3
        relative
        text-gray-400
        font-semibold
      "
    >
      <option value="Filter">Filter</option>
      <option value="A">A</option>
      <option value="B">B</option>
      <option value="C">C</option>
    </select>
    <div class="w-5 h-5 top-5 right-5 absolute">
      <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M13 1L7 7L1 1"
          stroke="white"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FilterSelect',
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
