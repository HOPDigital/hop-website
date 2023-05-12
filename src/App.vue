<script setup>
import Introduction from './components/Introduction.component.vue';
import TipSection from './components/TipSection.vue';
import BuildingProduct from './components/BuildingProduct.component.vue';
import Skills from "./components/Skills.component.vue";
import WorkWithUs from "./components/WorkWithUs.vue";
import LetsTalk from './components/LetsTalk.component.vue';
</script>

<template>
    <Introduction />

    <TipSection>
        <template v-slot:content>
            <main class="flex flex-col py-36 px-8 justify-center items-center gap-7">
                <span class="uppercase text-pink_hop font-semibold text-xs md:text-sm">
                    Precisa de desenvolvedores de primeira linha?
                </span>

                <h2 class="text-4xl lg:text-[48px] font-extrabold text-white text-center">
                    Você está no lugar certo
                </h2>

                <p class="text-white lg:w-[30%] text-left md:text-center leading-[32px]">
                    A Hop ajuda empreendedores a construir e lançar novos produtos e,
                    ajuda as empresas em crescimento conectando equipes de desenvolvimento pronta para uso e começar a
                    construir.
                </p>
            </main>
        </template>
    </TipSection>

    <BuildingProduct />

    <Skills />

    <LetsTalk/>

    <WorkWithUs />

    <TipSection>
        <template v-slot:content>
            <main class="flex flex-col py-36 justify-center items-center">
                <h1 class="text-white text-[48px] font-extrabold">TBC</h1>
            </main>
        </template>
    </TipSection>
</template>