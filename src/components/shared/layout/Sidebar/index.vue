<template>
  <aside
    class="
      hidden
      overflow-y-scroll
      md:h-screen md:block
      border-r-2
      py-10
      pl-12
      pr-8
      border-detail
      md:sticky md:top-0
      overflow-x-hidden
      w-80
    "
  >
    <MenuIcon class="w-20 absolute top-12 -right-5" />

    <div class="relative h-full w-full">
      <div class="w-full relative">
        <img class="w-28" src="@/assets/img/logo.png" />
      </div>

      <div class="mt-12 text-gray-600 mb-8 text-sm">Admin tools</div>
      <div class="flex text-gray-600 flex-col space-y-8">
        <div
          v-for="item in menuItems"
          :key="item.id"
          :class="{
            'bg-secondary p-4 text-white pl-6 py-5 -ml-6 rounded-2xl': item.id === 2,
          }"
        >
          <MenuButton :name="item.name" :to="'Home'">
            <template slot="icon">
              <component :is="item.icon" />
            </template>
          </MenuButton>
        </div>
      </div>
      <Separator class="-ml-2 mt-10 mb-10" />
      <div class="mt-24 text-gray-600 mb-8 text-sm">Insights</div>
      <div class="flex text-gray-600 mb-14 flex-col space-y-8">
        <MenuButton
          :name="item.name"
          :to="'Home'"
          :badge="true"
          :badgeContent="item.badgeContent"
          v-for="item in insightsItems"
          :key="item.name"
        >
          <template slot="icon">
            <component :is="item.icon" />
          </template>
        </MenuButton>
      </div>
      <div class="-mx-5 mb-14 mt-96 flex flex-row justify-center items-center relative">
        <div
          class="
            flex flex-row
            justify-center
            bg-gray-400
            items-center
            rounded-3xl
            -bottom-2
            z-0
            w-10/12
            h-96
            absolute
          "
        >
          FFF
        </div>

        <div class="bg-light h-96 flex flex-col items-center justify-center px-6 w-11/12 z-10 rounded-3xl">
          <img class="mt-6 w-full" src="@/assets/img/wavy-ball.png" />
          <button class="px-5 py-5 mb-4 h-auto w-full mt-3 rounded-2xl bg-secondary text-white font-semibold">
            Get Pro Now
          </button>
        </div>
      </div>
      <div class="w-11/12 mb-5 mt-20 flex flex-row justify-center items-center space-x-6">
        <img class="w-12" src="@/assets/img/avatar.png" />

        <div class="mr-10 flex-col space-y-1 text-sm">
          <div class="text-white font-semibold">Tam Tran</div>
          <div class="text-gray-400">Free account</div>
        </div>

        <div class="flex-col flex space-y-1">
          <UpIcon />
          <DownIcon />
        </div>
      </div>
      <div class="mt-5 w-2 h-2"></div>
    </div>
  </aside>
</template>

<script>
import MenuIcon from '../../MenuIcon';
import MenuButton from './partials/MenuButton';
import OverviewIcon from '../../icons/OverviewIcon.vue';
import ProductIcon from '@/components/shared/icons/ProductIcon.vue';
import CampaignIcon from '@/components/shared/icons/CampaignIcon.vue';
import ScheduleIcon from '@/components/shared/icons/ScheduleIcon.vue';
import PayoutIcon from '@/components/shared/icons/PayoutIcon.vue';
import StatementIcon from '@/components/shared/icons/StatementIcon.vue';
import SettingsIcon from '@/components/shared/icons/SettingsIcon.vue';
import Separator from '@/components/shared/Separator.vue';
import InboxIcon from '@/components/shared/icons/InboxIcon.vue';
import BellIcon from '@/components/shared/icons/BellIcon.vue';
import CommentIcon from '@/components/shared/icons/CommentIcon.vue';
import Avatar from '@/components/shared/layout/Sidebar/partials/Avatar.vue';
import UpIcon from '@/components/shared/icons/UpIcon.vue';
import DownIcon from '@/components/shared/icons/DownIcon.vue';

export default {
  name: 'Sidebar',
  components: {
    MenuIcon,
    MenuButton,
    Separator,
    Avatar,
    UpIcon,
    DownIcon,
  },
  data() {
    return {
      menuItems: [
        {
          id: 1,
          name: 'Overview',
          icon: OverviewIcon,
        },
        {
          id: 2,
          name: 'Products',
          icon: ProductIcon,
        },
        {
          id: 3,
          name: 'Campaigns',
          icon: CampaignIcon,
        },
        {
          id: 4,
          name: 'Schedules',
          icon: ScheduleIcon,
        },
        {
          id: 5,
          name: 'Payouts',
          icon: PayoutIcon,
        },
        {
          id: 6,
          name: 'Statement',
          icon: StatementIcon,
        },
        {
          id: 7,
          name: 'Settings',
          icon: SettingsIcon,
        },
      ],
      insightsItems: [
        {
          name: 'Inbox',
          icon: InboxIcon,
          badgeContent: '18',
        },
        {
          name: 'Notifications',
          icon: BellIcon,
          badgeContent: '2',
        },
        {
          name: 'Comments',
          icon: CommentIcon,
          badgeContent: '20',
        },
      ],
    };
  },
};
</script>
