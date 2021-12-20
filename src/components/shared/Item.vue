<template>
  <div>
    <div class="md:hidden">
      <br />
      <div class="w-full">
        <div>
          <div class="flex mt-10 items-center justify-center mr-4 mb-2">
            <input
              type="checkbox"
              id="A3-yes"
              name="A3-confirmation"
              value="yes"
              class="opacity-0 absolute h-8 w-8"
            />
            <div
              class="
                border-gray-600 border-2
                rounded-md
                w-5
                h-5
                flex flex-shrink-0
                justify-center
                items-center
                mr-10
                focus-within:border-blue-500
              "
            >
              <svg
                class="fill-current hidden w-3 h-3 text-blue-600 pointer-events-none"
                version="1.1"
                viewBox="0 0 17 12"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g fill="none" fill-rule="evenodd">
                  <g transform="translate(-9 -11)" fill="#FFFFFF" fill-rule="nonzero">
                    <path
                      d="m25.576 11.414c0.56558 0.55188 0.56558 1.4439 0 1.9961l-9.404 9.176c-0.28213 0.27529-0.65247 0.41385-1.0228 0.41385-0.37034 0-0.74068-0.13855-1.0228-0.41385l-4.7019-4.588c-0.56584-0.55188-0.56584-1.4442 0-1.9961 0.56558-0.55214 1.4798-0.55214 2.0456 0l3.679 3.5899 8.3812-8.1779c0.56558-0.55214 1.4798-0.55214 2.0456 0z"
                    />
                  </g>
                </g>
              </svg>
            </div>
            <div class="ml-3">
              <TriangleImage></TriangleImage>
            </div>
            <div class="ml-5">
              <h3 class="text-lg font-semibold">Bento Abstract 3D Kit</h3>
              <p class="text-gray-300">3D Illustration</p>
            </div>
          </div>
        </div>
        <div class="w-11/12 mt-5 h-full flex rounded-lg items-center p-1 border-gray-600 border">
          <svg width="9" height="32" viewBox="0 0 9 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="8.8" height="32" rx="4.4" fill="#6C5DD3" />
          </svg>
          <span class="w-full flex md:hidden justify-evenly">
            <div class="text-indigo-600">$68.45</div>
            <div>37 in stock</div>
            <div class="text-green-600">5.0</div>
          </span>
        </div>
        <div
          class="
            w-full
            h-1
            mt-5
            border-b-2 border-t-0 border-l-0 border-r-0 border-gray-600
            absolute
            left-0
            block
          "
        ></div>
      </div>
    </div>
    <div class="hidden md:block">
      <div class="flex mt-10 items-center justify-left mr-4 mb-2">
        <div class="w-6/12 flex flex-row">
          <input
            type="checkbox"
            id="A3-yes"
            name="A3-confirmation"
            value="yes"
            class="opacity-0 absolute h-8 w-8"
          />
          <div
            class="
              border-gray-600 border-2
              rounded-md
              w-5
              h-5
              flex flex-shrink-0
              justify-center
              items-center
              mr-10
              focus-within:border-blue-500
            "
          >
            <svg
              class="fill-current hidden w-3 h-3 text-blue-600 pointer-events-none"
              version="1.1"
              viewBox="0 0 17 12"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g fill="none" fill-rule="evenodd">
                <g transform="translate(-9 -11)" fill="#FFFFFF" fill-rule="nonzero">
                  <path
                    d="m25.576 11.414c0.56558 0.55188 0.56558 1.4439 0 1.9961l-9.404 9.176c-0.28213 0.27529-0.65247 0.41385-1.0228 0.41385-0.37034 0-0.74068-0.13855-1.0228-0.41385l-4.7019-4.588c-0.56584-0.55188-0.56584-1.4442 0-1.9961 0.56558-0.55214 1.4798-0.55214 2.0456 0l3.679 3.5899 8.3812-8.1779c0.56558-0.55214 1.4798-0.55214 2.0456 0z"
                  />
                </g>
              </g>
            </svg>
          </div>
          <div class="ml-3">
            <TriangleImage></TriangleImage>
          </div>
          <div class="ml-5">
            <h3 class="text-lg font-semibold">Bento Abstract 3D Kit</h3>
            <p class="text-gray-300">3D Illustration</p>
          </div>
        </div>
        <div class="hidden md:block md:w-6/12">
          <div class="flex-grow-0 flex flex-row">
            <div class="w-3/12">37 in stock</div>
            <div class="w-3/12 float justify-center items-center">
              <div class="rounded-full bg-purple-700 w-5 h-5"></div>
            </div>
            <div class="w-3/12 text-blue-600">$68.00</div>
            <div class="w-3/12 text-green-600">
              5.0
              <div class="block text-gray-500">(45 votes)</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TriangleImage from './TriangleImage.vue';

export default {
  name: 'Item',
  props: {},
  components: {
    TriangleImage,
  },
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
