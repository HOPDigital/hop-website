<script>
import { RiLinkedinBoxFill, RiGithubFill } from 'vue-remix-icons';

export default {
    components: {
        RiLinkedinBoxFill,
        RiGithubFill
    }
}
</script>

<template>
    <section class="flex justify-center h-full md:h-screen w-full bg-blur_hop p-8" id="team">
        <main class="flex flex-col justify-center items-center w-full">
            <h1 class="text-purple_hop text-3xl md:text-[48px] font-extrabold mt-8">
                Conheça nosso time
            </h1>

            <h3 class="text-white text-md md:text-lg leading-[32px] lg:w-[40%] text-center my-10">
                Cada membro da equipe é de extrema importância, compartilhamos diversos conhecimentos para a melhor solução
                do seu problema, veja quem somos:
            </h3>

            <div class="flex flex-col md:flex-row flex-wrap justify-evenly w-full mt-32 gap-y-20">
                <div class="flex flex-col justify-center items-center">
                    <div
                        class="flex justfiy-center items-center h-[248px] rounded-full bg-gradient-to-b from-red_hop via-purple_hop to-darker_blur_hop p-1 mb-5">
                        <img src="../assets/avatars/matt.png" title="Matheus Cruz - Photo" class="h-[238px] rounded-full grayscale" />
                    </div>

                    <h2 class="text-2xl text-white font-semibold">Matheus Cruz</h2>
                    <h3 class="text-md text-red_hop font-semibold mt-1">Co-Founder</h3>
                    <h4 class="text-md text-purple_hop font-normal mt-2">Front End Developer | DevOps</h4>

                    <div class="flex flex-row gap-2 mt-3">
                        <a href="https://www.linkedin.com/in/cmatt7/" target="_blank"
                            title="Matheus Cruz - LinkedIn">
                            <RiLinkedinBoxFill
                                class="h-[28px] bg-white_hop bg-opacity-[0.1] fill-white_hop p-1 rounded-full hover:fill-red_hop duration-300 ease-in-out" />
                        </a>

                        <a href="https://github.com/cmatt7" target="_blank"
                            title="Matheus Cruz - GitHub">
                            <RiGithubFill
                                class="h-[28px] bg-white_hop bg-opacity-[0.1] fill-white_hop p-1 rounded-full hover:fill-red_hop duration-300 ease-in-out" />
                        </a>
                    </div>
                </div>

                <div class="flex flex-col justify-center items-center">

                    <div
                        class="flex justfiy-center items-center h-[248px] rounded-full bg-gradient-to-b from-red_hop via-purple_hop to-darker_blur_hop p-1 mb-5">
                        <img src="../assets/avatars/andre.png" title="André Lara - Photo" class="h-[238px] rounded-full grayscale" />
                    </div>

                    <h2 class="text-2xl text-white font-semibold">André Lara</h2>
                    <h3 class="text-md text-red_hop font-semibold mt-1">Co-Founder</h3>
                    <h4 class="text-md text-purple_hop font-normal mt-2">Back End Developer | Branding</h4>

                    <div class="flex flex-row gap-2 mt-3">
                        <a href="https://www.linkedin.com/in/andrelara2002/" target="_blank"
                            title="André Lara - LinkedIn">
                            <RiLinkedinBoxFill
                                class="h-[28px] bg-white_hop bg-opacity-[0.1] fill-white_hop p-1 rounded-full hover:fill-red_hop duration-300 ease-in-out" />
                        </a>

                        <a href="https://github.com/andrelara2002" target="_blank"
                            title="André Lara - GitHub">
                            <RiGithubFill
                                class="h-[28px] bg-white_hop bg-opacity-[0.1] fill-white_hop p-1 rounded-full hover:fill-red_hop duration-300 ease-in-out" />
                        </a>
                    </div>
                </div>

                <div class="flex flex-col justify-center items-center">
                    <div
                        class="flex justfiy-center items-center h-[248px] rounded-full bg-gradient-to-b from-red_hop via-purple_hop to-darker_blur_hop p-1 mb-5">
                        <img src="../assets/avatars/fabricio.png" title="Fabrício Matos - Photo"
                            class="h-[238px] rounded-full" />
                    </div>

                    <h2 class="text-2xl text-white font-semibold">Fabrício Matos</h2>
                    <h3 class="text-md text-red_hop font-semibold mt-1">Co-Founder</h3>
                    <h4 class="text-md text-purple_hop font-normal mt-2">Designer | UI | UX | Social Media</h4>

                    <div class="flex flex-row gap-2 mt-3">
                        <a href="https://www.linkedin.com/in/fabr%C3%ADcio-matos-silva-04ba911b3/" target="_blank"
                            title="Fabrício Matos - LinkedIn">
                            <RiLinkedinBoxFill
                                class="h-[28px] bg-white_hop bg-opacity-[0.1] fill-white_hop p-1 rounded-full hover:fill-red_hop duration-300 ease-in-out" />
                        </a>

                        <a href="https://github.com/1Fabroncio" target="_blank"
                            title="Fabrício Matos - GitHub">
                            <RiGithubFill
                                class="h-[28px] bg-white_hop bg-opacity-[0.1] fill-white_hop p-1 rounded-full hover:fill-red_hop duration-300 ease-in-out" />
                        </a>
                    </div>
                </div>

                <div class="flex flex-col justify-center items-center">
                    <div
                        class="flex justfiy-center items-center h-[248px] rounded-full bg-gradient-to-b from-red_hop via-purple_hop to-darker_blur_hop p-1 mb-5">
                        <img src="../assets/avatars/ale.png" title="Alexandre Cruz - Photo"
                            class="h-[238px] rounded-full" />
                    </div>

                    <h2 class="text-2xl text-white font-semibold">Alexandre Cruz</h2>
                    <h3 class="text-md text-red_hop font-semibold mt-1">Co-Founder</h3>
                    <h4 class="text-md text-purple_hop font-normal mt-2">Consultor | Conselheiro | DevOps</h4>

                    <div class="flex flex-row gap-2 mt-3">
                        <a href="https://www.linkedin.com/in/alexandrecruz/" target="_blank"
                            title="Alexandre Cruz - LinkedIn">
                            <RiLinkedinBoxFill
                                class="h-[28px] bg-white_hop bg-opacity-[0.1] fill-white_hop p-1 rounded-full hover:fill-red_hop duration-300 ease-in-out" />
                        </a>

                        <a href="https://github.com/alexandrecruz" target="_blank"
                            title="Alexandre Cruz - GitHub">
                            <RiGithubFill
                                class="h-[28px] bg-white_hop bg-opacity-[0.1] fill-white_hop p-1 rounded-full hover:fill-red_hop duration-300 ease-in-out" />
                        </a>
                    </div>
                </div>
            </div>
        </main>
</section></template>