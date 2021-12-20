<template>
  <div id="app">
    <div class="md:flex">
      <AppBar class="md:hidden"></AppBar>
      <aside class="hidden md:h-screen md:block border-r-2 border-gray-600 md:sticky md:top-0 w-64"></aside>
      <main class="px-8 flex flex-col h-auto text-white">
        <router-view />
      </main>
    </div>
  </div>
</template>

<script>
import AppBar from './components/shared/AppBar.vue';

export default {
  name: 'App',
  components: {
    AppBar,
  },
};
</script>
