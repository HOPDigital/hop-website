<script setup>
import PreLoader from './components/PreLoader.component.vue';
import NavBar from './components/NavBar.vue';
import TipSection from './components/TipSection.vue';

import Hero from './sections/Hero.section.vue';
import BuildingProduct from './sections/BuildingProduct.section.vue';
import Skills from "./sections/Skills.section.vue";
import Benefits from "./sections/Benefits.section.vue";
import LetsTalk from './sections/LetsTalk.section.vue';
import ContactUs from './sections/ContactUs.section.vue';
import Footer from './sections/Footer.section.vue';
import OurTeam from './sections/OurTeam.section.vue';
</script>

<template>
    <PreLoader />
    <NavBar />
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
    <LetsTalk />
    <Benefits />

    <TipSection>
        <template v-slot:content>
            <main class="flex flex-col md:flex-row py-36 justify-center items-center p-8 gap-10">
                <h1 class="text-purple_hop text-3xl md:text-[40px] leading-[40px] md:leading-[52px] font-extrabold lg:w-[35%]">
                    Obtenha seu produto de software construído com as <span class="text-pink_hop">melhores soluções</span>
                </h1>

                <p class="text-lg leading-[32px] font-normal text-white lg:w-[30%]">Conheça a empresa de desenvolvimento de software nearshore
                    que constrói, testa, envia e mantém código de qualidade. Nosso processo garante que seu projeto seja
                    concluído no melhor tempo possível!</p>
            </main>
        </template>
    </TipSection>

    <OurTeam />

    <ContactUs />

    <Footer />
</template>