<script>
import { ref } from 'vue';
import { RiMenu3Fill, RiCloseFill } from 'vue-remix-icons';

export default {
    data() {
        return {
            scrollPosition: null,
            openMenu: ref(false),
            menuItems: [
                {
                    name: "Home",
                    redirectTo: "#home"
                },
                {
                    name: "Produto",
                    redirectTo: "#product"
                },
                {
                    name: "Vantagens",
                    redirectTo: "#benefits"
                },
                {
                    name: "Fale conosco",
                    redirectTo: "#contactus"
                },
            ]
        }
    },
    methods: {
        changeBackgroundColorOnScrollDown() {
            this.scrollPosition = window.scrollY
        },
        changeMenuStatus() {
            this.openMenu = !this.openMenu
        }
    },
    mounted() {
        window.addEventListener('scroll', this.changeBackgroundColorOnScrollDown)
    },
    components: {
        RiMenu3Fill,
        RiCloseFill
    }
}
</script>

<template>
    <nav class="sticky top-0 flex justify-center items-center md:px-8 py-4 z-40 bg-blur_hop"
        :class="{ change_color: scrollPosition > 50 }">
        <div class="flex justify-between items-center w-full md:w-[80%]">
            <figure>
                <img src="../assets/hop-white-logo.png" title="HOP Digital - Logo" class="px-8 md:px-0 h-8 md:h-auto" />
            </figure>

            <div class="absolute md:hidden right-8 cursor-pointer" @click="changeMenuStatus()">
                <span v-if="!openMenu">
                    <RiMenu3Fill class="fill-white_hop h-[25px]" />
                </span>

                <span v-else>
                    <RiCloseFill class="fill-white_hop h-[25px]" />
                </span>
            </div>

            <ul class="absolute md:static md:flex flex-col md:flex-row bg-blur_hop backdrop-blur-md bg-opacity-20 md:bg-transparent md:backdrop-blur-none md:bg-opacity-100 text-white md:text-purple_hop gap-10 w-full md:w-auto top-14 px-8 md:px-0"
                :class="[openMenu ? 'left-0' : 'left-[-100%]']">
                <li v-for="item in menuItems" class="my-12 md:my-0">
                    <a :href="item.redirectTo"
                        class="pb-1 hover:border-2 hover:border-b-purple_hop border-transparent duration-100 ease-in-out">
                        {{ item.name }}
                    </a>
                </li>
            </ul>
        </div>
    </nav>
</template>

<style>
.change_color {
    backdrop-filter: blur(8px);
    --tw-bg-opacity: 0.2;
}
</style>