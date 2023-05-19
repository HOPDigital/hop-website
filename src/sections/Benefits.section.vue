<script>
import { RiThumbUpLine, RiExchangeDollarLine, RiGitPullRequestLine } from "vue-remix-icons";

export default {
    data() {
        return {
            workDetails: [
                {
                    id: 1,
                    icon: RiThumbUpLine,
                    title: "Respire facilmente",
                    description: "Muita pressão? Precisando de um espaço? Deixa com a gente",
                },
                {
                    id: 2,
                    icon: RiExchangeDollarLine,
                    title: "TBC",
                    description: "TBC",
                },
                {
                    id: 3,
                    icon: RiGitPullRequestLine,
                    title: "Construa mais inteligente",
                    description: "Ajudamos a estreitar os recursos com base no valor comercial do produto",
                },
            ]
        }
    },
    components: {
        RiThumbUpLine,
        RiExchangeDollarLine,
        RiGitPullRequestLine
    }
}
</script>

<template>
    <section class="flex flex-col justify-center items-center h-full lg:h-screen w-full bg-blur_hop p-8" id="benefits">
        <div class="flex flex-col lg:w-[30%] text-center gap-y-8">
            <h1 class="text-4xl lg:text-[48px] text-purple_hop leading-[50px] lg:leading-[64px] font-extrabold">
                Quando você trabalha com a Hop...
            </h1>

            <p class="text-white text-sm md:text-[18px]">
                Você não tem apenas desenvolvedores trabalhando em seu time.
                Você também tem todos os recursos de que seu time precisa para tornar seu produto um sucesso.
            </p>
        </div>

        <div class="flex flex-col lg:flex-row justify-center items-center w-full my-20 gap-y-14 gap-x-32">
            <div class="flex flex-col justify-evenly bg-darker_blur_hop p-6 w-[318px] h-[360px] drop-shadow-xl">
                <RiThumbUpLine class="fill-pink_hop h-[50px]" />

                <div>
                    <h4 class="text-purple_hop uppercase font-semibold text-left">
                        TBC
                    </h4>

                    <p class="text-white p-2 mt-4 leading-[32px]">
                        Soon
                    </p>
                </div>
            </div>

            <div class="flex flex-col justify-evenly bg-darker_blur_hop p-6 w-[318px] h-[360px] drop-shadow-xl">
                <RiExchangeDollarLine class="fill-pink_hop h-[50px]" />

                <div>
                    <h4 class="text-purple_hop uppercase font-semibold text-left">
                        TBC
                    </h4>

                    <p class="text-white p-2 mt-4 leading-[32px]">
                        Soon
                    </p>
                </div>
            </div>

            <div class="flex flex-col justify-evenly bg-darker_blur_hop p-6 w-[318px] h-[360px] drop-shadow-xl">
                <RiGitPullRequestLine class="fill-pink_hop h-[50px]" />

                <div>
                    <h4 class="text-purple_hop uppercase font-semibold text-left">
                        TBC
                    </h4>

                    <p class="text-white p-2 mt-4 leading-[32px]">
                        Soon
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>