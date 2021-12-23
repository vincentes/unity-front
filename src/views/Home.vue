<template>
  <div class="overflow-clip">
    <div>
      <div class="flex flex-row w-full">
        <div class="flex flex-col w-full md:w-6/12">
          <p class="mt-6">Hi DashUI8<span class="hidden md:inline-block">,</span></p>
          <h1 class="text-4xl md:font-semibold">Welcome back</h1>
        </div>
        <div class="hidden md:flex md:flex-row md:w-6/12 items-center justify-center">
          <SearchIcon />
          <input class="ml-6 bg-primary" placeholder="Search" type="textfield" />
          <div class="p-3 rounded-full bg-red-500 shadow-3xl">
            <BellIcon class="shadow-3xl" />
          </div>
        </div>
      </div>
      <PlanetPicVert class="md:hidden" />
      <PlanetPicHor class="hidden md:block" />

      <div class="mt-12 relative w-full px-8 py-8 bg-primary-light rounded-2xl">
        <div class="flex flex-row space-x-6 items-center">
          <div class="w-full flex flex-row space-x-6 items-center md:w-11/12">
            <FilterSelect class="md:w-6/12 w-full"></FilterSelect>
            <FilterSelect class="hidden md:block md:w-6/12"></FilterSelect>
          </div>
          <PencilIcon class="hidden flex-grow-0 md:block md:w-1/12"></PencilIcon>
        </div>

        <div class="flex flex-row items-center space-x-6 shadow-2xl drop-shadow-2xl">
          <div class="w-full flex flex-row space-x-6 items-center md:w-11/12">
            <div class="w-full mt-5 grid grid-cols-12 bg-primary-intermediate rounded-2xl flex-row space-x-0">
              <div class="flex col-span-2 items-center justify-center w-full">
                <SearchIcon></SearchIcon>
              </div>
              <input
                type="text"
                placeholder="Search"
                class="
                  col-span-4
                  w-full
                  select-none
                  rounded-2xl
                  bg-primary-intermediate
                  focus:ring-opacity-500 focus:ring-primary-intermediate focus:outline-none
                  btn btn-blue
                  appearance-none
                  px-5
                  py-3
                  relative
                  text-white
                  placeholder-gray-400
                  font-semibold
                "
              />
              <button class="bg-blue-500 text-sm px-2 col-span-6 w-full rounded-2xl">Advance Search</button>
            </div>
          </div>
          <BoxIcon class="hidden md:w-1/12 md:mt-5 md:flex-grow-0 md:block"></BoxIcon>
        </div>

        <div class="flex flex-row w-full mt-7 relative">
          <div class="w-6/12 float flex-row">
            <div class="flex items-center mr-4 mb-2">
              <input
                type="checkbox"
                id="A3-yes"
                name="A3-confirmation"
                value="yes"
                class="opacity-0 absolute h-8 w-8"
              />
              <div
                class="
                  bg-purple-600
                  border-2
                  rounded-md
                  border-none
                  w-5
                  h-5
                  flex flex-shrink-0
                  justify-center
                  items-center
                  mr-2
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
              <div class="text-gray-300 ml-4">Product</div>
            </div>
          </div>
          <div
            class="
              text-gray-300 text-sm
              flex
              w-full
              justify-end
              md:justify-start md:w-6/12
              flex-row
              justify-start
            "
          >
            <BoxIcon class="md:hidden"></BoxIcon>
            <div class="hidden w-3/12 md:block">Amount</div>
            <div class="hidden w-3/12 md:block">Color</div>
            <div class="hidden w-3/12 md:block">Price</div>
            <div class="hidden w-3/12 md:block">Rating</div>
          </div>
          <div class="flex flex-row">
            <div class="w-6">
              <div class="mr-5">
                <PencilIcon class="md:hidden"></PencilIcon>
              </div>
            </div>
          </div>
        </div>
        <Separator class="mr-8" />

        <Item />
        <Item />
        <Item />
        <div class="bg-gray-900 mt-14 relative rounded-2xl flex items-center justify-center p-4">
          Load More
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FilterSelect from '../components/shared/FilterSelect.vue';
import SearchIcon from '../components/shared/SearchIcon.vue';
import PencilIcon from '../components/shared/PencilIcon.vue';
import BoxIcon from '../components/shared/BoxIcon.vue';
import Item from '../components/shared/Item.vue';
import PlanetPicVert from '../components/shared/PlanetPicVert.vue';
import PlanetPicHor from '../components/shared/PlanetPicHor.vue';
import BellIcon from '../components/shared/BellIcon.vue';
import Separator from '../components/shared/Separator.vue';

export default {
  name: 'Home',
  components: {
    FilterSelect,
    SearchIcon,
    PencilIcon,
    BoxIcon,
    Item,
    PlanetPicVert,
    PlanetPicHor,
    BellIcon,
    Separator,
  },
};
</script>
