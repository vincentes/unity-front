<template>
  <div id="app">
    <div class="md:flex">
      <AppBar class="md:hidden" />
      <Sidebar />
      <main class="px-8 flex flex-col h-auto text-white">
        <router-view />
      </main>
    </div>
  </div>
</template>

<script>
import AppBar from './components/shared/AppBar.vue';
import Sidebar from '@/components/shared/layout/Sidebar';
export default {
  name: 'App',
  components: {
    AppBar,
    Sidebar,
  },
};
</script>
