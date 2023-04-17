<template>
  <nav class="bg-white">
    <div
      class="flex items-center justify-between max-w-screen-xl p-4 mx-auto"
    >
      <NuxtLink to="/" class="flex items-center">
        <img
          src="~/assets/img/linelogo.png"
          class="h-10 mr-3"
          alt="LineTV Logo"
        />
      </NuxtLink>


      <div class="w-full md:block md:w-auto" id="navbar-default">
        <ul
          class="flex justify-end gap-2 p-0 font-medium md:p-0 md:flex-row md:mt-0 md:bg-white"
        >
          <li>
            <NuxtLink
              to="/"
              class="block py-2 pl-3 pr-4 text-secondary-700 md:bg-transparent md:text-secondary-700 md:p-0"
              aria-current="page"
              >Anasayfa</NuxtLink
            >
          </li>
          <li>
            <NuxtLink
              to="/nasilizlerim"
              class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-secondary-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >Nasıl İzlerim</NuxtLink
            >
          </li>


        </ul>
      </div>
    </div>
  </nav>
</template>
