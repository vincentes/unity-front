<template>
  <div>
    <div class="px-8 h-20 flex justify-between items-center text-white">
      <div>
        <svg class="w-6" viewBox="0 0 32 2" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="32" height="2" rx="1" fill="white" />
        </svg>
        <svg class="w-6 mt-1" viewBox="0 0 32 2" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="32" height="2" rx="1" fill="white" />
        </svg>
      </div>
      <div class="flex items-center space-x-12 mr-3">
        <div>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M9.61154 0C4.30323 0 0 4.20819 0 9.39926C0 14.5903 4.30323 18.7985 9.61154 18.7985C11.8819 18.7985 13.9684 18.0287 15.613 16.7415L18.7371 19.7886L18.8202 19.8586C19.1102 20.0685 19.5214 20.0446 19.7839 19.7873C20.0726 19.5043 20.072 19.0459 19.7825 18.7636L16.6952 15.7523C18.2649 14.0794 19.2231 11.8487 19.2231 9.39926C19.2231 4.20819 14.9198 0 9.61154 0ZM9.61154 1.44774C14.1022 1.44774 17.7426 5.00776 17.7426 9.39926C17.7426 13.7908 14.1022 17.3508 9.61154 17.3508C5.12086 17.3508 1.48044 13.7908 1.48044 9.39926C1.48044 5.00776 5.12086 1.44774 9.61154 1.44774Z"
              fill="white"
            />
          </svg>
        </div>
        <BellIcon></BellIcon>
        <div>
          <PersonImage></PersonImage>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PersonImage from './PersonImage.vue';
import BellIcon from './BellIcon.vue';

export default {
  name: 'AppBar',
  components: {
    PersonImage,
    BellIcon,
  },
};
</script>
