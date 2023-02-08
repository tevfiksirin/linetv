<template>
    <div>
        <div class="flex flex-col h-screen gap-4 pl-20 pr-20 bg-secondary-500">

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
</template>
