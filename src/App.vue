<script setup>

import TipSection from './components/TipSection.vue';

import Hero from './sections/Hero.section.vue';
import BuildingProduct from './sections/BuildingProduct.section.vue';
import Skills from "./sections/Skills.section.vue";
import WorkWithUs from "./sections/WorkWithUs.section.vue";
import LetsTalk from './sections/LetsTalk.section.vue';
</script>

<template>
    <Hero />

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