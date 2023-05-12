<template>
    <section class="flex justify-center h-screen w-full bg-blur_hop">
        <main class="flex flex-col lg:flex-row items-center w-full xl:w-[80%] h-full p-8">
            <!-- Mobile Image -->
            <figure class="block lg:hidden mb-6">
                <img src="../assets/hero_desktop.png"/>
            </figure>

            <!-- Description -->
            <div class="flex flex-col justify-center items-center lg:justify-start lg:items-start">
                <h1 class="text-4xl md:text-[48px] md:leading-[60px] lg:leading-[76px] text-purple_hop font-extrabold lg:w-[48%]">
                    Desenvolvedores de software de elite sob demanda
                </h1>

                <p class="text-md md:text-[18px] leading-[32px] text-white_hop mt-8 lg:mt-5 xl:w-[40%]">
                    A maneira mais inteligente possível de adquirir uma equipe distribuída de alto desempenho.
                </p>

                <button type="button" class="border-none rounded-md bg-pink_hop text-white font-normal p-3 mt-5 w-[80%] xl:w-[20%]">
                    Vamos conversar
                </button>
            </div>

            <!-- Desktop Image -->
            <figure class="hidden lg:block">
                <img src="../assets/hero_desktop.png"/>
            </figure>
        </main>
    </section>
</template>