<template>
    <section class="flex justify-center h-full md:h-screen w-full bg-darker_blur_hop">
        <main class="flex flex-col lg:flex-row justify-around items-center h-full px-8 py-20 lg:w-[80%]">
            <!-- Description -->
            <div class="flex flex-col justify-center items-center lg:justify-start lg:items-start lg:w-[50%]">
                <h1
                    class="text-4xl md:text-[48px] md:leading-[60px] lg:leading-[76px] text-purple_hop font-extrabold lg:w-[48%]">
                    Atrasado na contratação?
                </h1>

                <p class="text-md md:text-[18px] leading-[32px] text-white_hop mt-8 lg:mt-5">
                    Vamos aliviar a carga de sua equipe para que você possa continuar crescendo imediatamente. Somos
                    especialistas em:
                </p>

                <!-- Skills -->
                <div class="grid grid-cols-2 text-white font-semibold my-16 gap-x-32">
                    <ul class="flex flex-col gap-10">
                        <li class="flex flex-row items-center">
                            <i class="devicon-laravel-plain mr-4 text-[20px]"></i>
                            Laravel
                        </li>

                        <li class="flex flex-row items-center">
                            <i class="devicon-vuejs-plain mr-4 text-[20px]"></i>
                            Vue.js
                        </li>

                        <li class="flex flex-row items-center">
                            <i class="devicon-nodejs-plain mr-4 text-[20px]"></i>
                            Node.js
                        </li>
                    </ul>

                    <ul class="flex flex-col gap-10">
                        <li class="flex flex-row items-center">
                            <i class="devicon-flutter-plain mr-4 text-[20px]"></i>
                            Flutter
                        </li>

                        <li class="flex flex-row items-center">
                            <i class="devicon-jest-plain mr-4 text-[20px]"></i>
                            Jest
                        </li>

                        <li class="flex flex-row items-center">
                            <i class="devicon-docker-plain mr-4 text-[20px]"></i>
                            Docker
                        </li>
                    </ul>
                </div>
            </div>

            <!-- Desktop Image -->
            <figure class="lg:block">
                <img src="../assets/need_help.png" />
            </figure>
        </main>
    </section>
</template>