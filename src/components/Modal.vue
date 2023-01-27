<script lang="ts" setup>
const props = defineProps({
  changeModalState: {
    type: Function,
    required: true
  }
})
</script>

<template>
  <section class="fixed inset-0 bg-black/80 z-50">
    <div class="h-screen sticky top-0 grid place-items-center  p-8">
      <div class="w-full max-w-3xl rounded-xl bg-white overflow-hidden shadow-[0_2px_3px_rgba(0,0,0,0.06)]">

        <div class="flex items-center justify-between bg-gradient-to-r from-emerald-400 to-emerald-500 lg:h-[3.75rem] px-5 py-3 lg:px-6">
          <h2 class="text-white font-plus-jakarta-sans font-bold  text-base xl:text-lg 2xl:text-xl">
            Lorem Ipsum
          </h2>

          <svg @click="changeModalState(false)" class="w-2 h-2 lg:w-3 lg:h-3 cursor-pointer" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M0.470316 0.469909C0.610942 0.329459 0.801566 0.250569 1.00032 0.250569C1.19907 0.250569 1.38969 0.329459 1.53032 0.469909L7.00032 5.93991L12.4703 0.469909C12.539 0.396222 12.6218 0.33712 12.7138 0.296128C12.8058 0.255136 12.9051 0.233095 13.0058 0.231318C13.1065 0.229541 13.2065 0.248066 13.2999 0.285787C13.3933 0.323508 13.4781 0.379652 13.5494 0.450871C13.6206 0.52209 13.6767 0.606923 13.7144 0.700312C13.7522 0.7937 13.7707 0.893729 13.7689 0.994432C13.7671 1.09513 13.7451 1.19445 13.7041 1.28645C13.6631 1.37845 13.604 1.46125 13.5303 1.52991L8.06032 6.99991L13.5303 12.4699C13.604 12.5386 13.6631 12.6214 13.7041 12.7134C13.7451 12.8054 13.7671 12.9047 13.7689 13.0054C13.7707 13.1061 13.7522 13.2061 13.7144 13.2995C13.6767 13.3929 13.6206 13.4777 13.5494 13.5489C13.4781 13.6202 13.3933 13.6763 13.2999 13.714C13.2065 13.7518 13.1065 13.7703 13.0058 13.7685C12.9051 13.7667 12.8058 13.7447 12.7138 13.7037C12.6218 13.6627 12.539 13.6036 12.4703 13.5299L7.00032 8.05991L1.53032 13.5299C1.38814 13.6624 1.2001 13.7345 1.00579 13.7311C0.811493 13.7277 0.626108 13.6489 0.488695 13.5115C0.351282 13.3741 0.27257 13.1887 0.269142 12.9944C0.265713 12.8001 0.337836 12.6121 0.470316 12.4699L5.94032 6.99991L0.470316 1.52991C0.329866 1.38928 0.250977 1.19866 0.250977 0.999909C0.250977 0.801159 0.329866 0.610534 0.470316 0.469909Z" class="fill-white" />
          </svg>
        </div>

        <div class="grid place-items-center py-8">
          <p class="font-plus-jakarta-sans font-normal text-blue-400 text-center text-xs lg:text-sm 2xl:text-base">
            Lorem ipsum dolor sit amet,
          </p>

          <div class="flex items-center justify-center gap-5 lg:gap-8 mt-5">

            <svg class="w-8 h-8 lg:w-10 lg:h-14 fill-emerald-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
            </svg>

            <svg class="w-8 h-8 lg:w-10 lg:h-14 fill-emerald-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z" />
            </svg>


          </div>


          <p class="max-w-sm	text-center font-plus-jakarta-sans font-normal text-xs lg:text-sm 2xl:text-base my-5">
            <span class="text-blue-500 font-bold">
              Lorem ipsum
            </span>
            <span class="ml-0.5 text-blue-400">
              dolor sit amet, consectetur adipisicing elit. Incidunt, tempora?
            </span>
          </p>


          <button type="button" class="w-full max-w-[11.25rem] bg-white border border-solid border-emerald-500 text-emerald-500 text-center rounded-lg font-switzer font-medium text-xs lg:text-sm h-9 xl:h11 2xl:h-12">
            + Ipsum
          </button>

        </div>
      </div>
    </div>
  </section>
</template>
