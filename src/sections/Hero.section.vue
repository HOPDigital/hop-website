<template>
    <section class="flex justify-center h-full md:h-fit w-full bg-blur_hop" id="home">
        <main class="flex flex-col lg:flex-row justify-around items-center h-full px-8 py-20 lg:w-[80%]">
            <!-- Mobile Image -->
            <figure class="lg:hidden mb-6">
                <img src="../assets/hero_desktop.png" />
            </figure>

            <!-- Description -->
            <div class="relative flex flex-col justify-center items-center lg:justify-start lg:items-start">
                <img src="../assets/group-3.png" class="hidden lg:block absolute -top-20 -left-20"/>

                <h1
                    class="text-4xl md:text-[48px] md:leading-[60px] lg:leading-[76px] text-purple_hop font-extrabold lg:w-[56%]">
                    Desenvolvemos o seu produto com excelência
                </h1>

                <p class="text-md md:text-[18px] leading-[32px] text-white_hop mt-8 lg:mt-5 xl:w-[50%]">
                    A maneira mais inteligente possível de desenvolver o seu produto!
                </p>

                <button type="button"
                    class="border-none rounded-md bg-pink_hop text-white font-normal p-3 mt-5 w-[80%] xl:w-[20%]">
                    Vamos conversar
                </button>

                <img src="../assets/group-4.png" class="hidden lg:block absolute -bottom-32 left-72"/>
            </div>

            <!-- Desktop Image -->
            <figure class="hidden relative lg:block my-10">
                <img src="../assets/group-5.png" class="absolute -left-20 -top-20"/>
                <img src="../assets/hero_desktop.png" class="my-20"/>
                <img src="../assets/group-6.png" class="absolute -right-20"/>
            </figure>
        </main>
    </section>
</template>