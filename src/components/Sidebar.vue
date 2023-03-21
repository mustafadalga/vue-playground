<script lang="ts" setup>
import IconLogo from "@/components/icons/IconLogo.vue";
</script>

<template>
  <aside class="h-full">

    <div class="grid place-items-center p-4 lg:p-5">
      <IconLogo fill-class=""
                class="h-12 w-12 lg:h-16 lg:w-16"/>
    </div>

    <nav class="mt-5">
      <ul>
        <li class="p-4 lg:p-5 text-lg lg:text-xl font-medium cursor-pointer">
          Dashboard
        </li>
        <li class="p-4 lg:p-5 text-lg lg:text-xl font-medium cursor-pointer">
          Gallery
        </li>
        <li class="p-4 lg:p-5 text-lg lg:text-xl font-medium cursor-pointer">
          Settings
        </li>
        <li class="p-4 lg:p-5 text-lg lg:text-xl font-medium cursor-pointer">
          Notifications
        </li>
        <li class="p-4 lg:p-5 text-lg lg:text-xl font-medium cursor-pointer">
          Reports
        </li>
        <li class="p-4 lg:p-5 text-lg lg:text-xl font-medium cursor-pointer">
          Logout
        </li>
      </ul>
    </nav>

  </aside>
</template>
