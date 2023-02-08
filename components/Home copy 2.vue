<template>
    <div>
        <div class="items-end h-screen p-8 bg-secondary-500 parent">

                <div class="div1 ">
                    <Hero />
                </div>
                <div class="flex justify-center div2">
                    <Programlar />
                </div>

        </div>
    </div>
</template>
<style>
.parent {
display: grid;
grid-template-columns: repeat(5, 1fr);
grid-template-rows: repeat(5, 1fr);
grid-column-gap: 5px;
grid-row-gap: 5px;

}

.div1 { grid-area: 1 / 1 / 6 / 4; }
.div2 { grid-area: 2 / 4 / 6 / 6; }
</style>