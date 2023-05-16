<script>
import RiCheckboxCircleLine from "vue-remix-icons/icons/ri-checkbox-circle-line.vue";

export default {
    data() {
        return {
            detailsList: ["Desenvolvimento MVP", "Desenvolvimento de API", "Desenvolvimento SaaS", "Desenvolvimento de aplicações web", "Desenvolvimento de app móveis"]
        }
    },
    components: {
        RiCheckboxCircleLine
    }
}
</script>

<template>
    <section class="flex justify-center h-full md:h-screen w-full bg-blur_hop">
        <main class="flex flex-col lg:flex-row justify-between items-center h-full px-8 py-20 lg:w-[80%]">
            <!-- Left Side Image -->
            <figure>
                <img src="../assets/building_product.png" />
            </figure>

            <!-- Description -->
            <div class="flex flex-col justify-center items-center lg:justify-start lg:items-start lg:w-[50%] mt-16 lg:mt-0">
                <h1 class="text-4xl md:text-[48px] md:leading-[60px] lg:leading-[58px] text-purple_hop font-extrabold">
                    Construindo um novo produto?
                </h1>

                <p class="text-md md:text-[18px] leading-[32px] text-white_hop mt-8 lg:mt-5">
                    Vamos ajuda-lo a lançar seu produto com maior valor. Somos especialistas em:
                </p>

                <!-- Skills -->
                <ul class="flex flex-col mt-8 gap-y-10">
                    <li
                        class="flex text-white gap-x-8" 
                        v-for="(detail, index) in detailsList" 
                        :key="index"
                    >
                        <RiCheckboxCircleLine class="h-[20px] bg-transparent fill-white_hop"/> {{ detail }}
                    </li>
                </ul>
            </div>
        </main>
    </section>
</template>