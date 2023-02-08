<template>
    <div>
        <div class="hidden lg:block">
            <div class="flex flex-col h-screen gap-4 pl-20 pr-20 bg-secondary-500 ">
                <div class="flex justify-between gap-4 pt-12">
                    <div class="flex flex-col justify-between w-7/12 h-52">
                        <div>
                            <img src="~/assets/img/linelogo.png" alt="">
                        </div>
                        <h1 class="text-xl font-bold tracking-wide text-primary-500">CANLI İZLE</h1>
                    </div>
                    <div class="flex items-end justify-start w-4/12">
                        <div>
                            <img class="relative -top-6" src="~/assets/img/linehaberlogoS.png" alt="">
                            <h1 class="text-xl font-bold tracking-wide text-primary-500">HABER SİTEMİZ</h1>
                        </div>
                    </div>

                </div>
                <div class="flex justify-between gap-4">
                    <div class="w-7/12">
                        <Hero />
                    </div>
                    <div class="w-4/12">
                        <Programlar />
                    </div>

                </div>
            </div>
        </div>
        <div class="block h-screen p-2 lg:hidden bg-secondary-500">
            <div class="mb-8 logo">
                <div class="w-20 mt-4">
                    <img class="object-cover" src="~/assets/img/linelogo.png" alt="">
                </div>
            </div>
            <div class="w-full">
                <HeroMobil />
            </div>
            <div class="mt-8">
                <img class="w-40" src="~/assets/img/linehaberlogoS.png" alt="">
                <h1 class="mt-4 text-base font-bold tracking-wide text-primary-500">HABER SİTEMİZ</h1>
            </div>
            <div>
                <ProgramlarMobil />
            </div>

        </div>
    </div>
</template>
