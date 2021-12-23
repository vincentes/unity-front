<template>
  <div class="flex flex-row w-full font-semibold justify-start">
    <div class="flex flex-row w-8/12">
      <slot name="icon" />
      <div class="ml-6">{{ name }}</div>
    </div>
    <div class="flex justify-center items-center text-center align-middle flex-row w-4/12">
      <div
        v-if="badge"
        class="
          w-8
          h-8
          flex flex-row
          items-center
          justify-center
          align-middle
          ml-5
          text-white
          bg-yellow-600
          rounded-full
        "
      >
        {{ badgeContent }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MenuButton',
  props: {
    name: { type: String, default: 'Soy un boton' },
    to: { type: String, default: 'Home' },
    badge: { type: Boolean, default: false },
    badgeContent: { type: String, default: '1' },
  },
};
</script>
