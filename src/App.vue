<script setup>
import Introduction from './components/Introduction.vue';
import TipSection from './components/TipSection.vue';
import BuildingProduct from './components/BuildingProduct.vue';
import Skills from "./components/Skills.vue";
import WorkWithUs from "./components/WorkWithUs.vue";
</script>

<template>
    <Introduction />

    <TipSection>
        <template v-slot:content>
            <main class="flex flex-col py-36 justify-center items-center gap-7">
                <span class="uppercase text-pink_hop font-semibold text-sm">
                    Precisa de desenvolvedores de primeira linha?
                </span>

                <h2 class="text-[48px] font-extrabold text-white">
                    Você está no lugar certo
                </h2>

                <p class="text-white w-[30%] text-center leading-[32px]">
                    A Hop ajuda empreendedores a construir e lançar novos produtos e,
                    ajuda as empresas em crescimento conectando equipes de desenvolvimento pronta para uso e começar a
                    construir.
                </p>
            </main>
        </template>
    </TipSection>

    <BuildingProduct />

    <Skills />

    <WorkWithUs />

    <TipSection>
        <template v-slot:content>
            <main class="flex flex-col py-36 justify-center items-center">
                <h1 class="text-white text-[48px] font-extrabold">TBC</h1>
            </main>
        </template>
    </TipSection>
</template>