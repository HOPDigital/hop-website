<script>
export default {
    data() {
        return {
            show: false
        }
    },
    mounted() {
        this.showToggle()
    },
    methods: {
        showToggle() {
            setTimeout(() => {
                this.show = true
            }, 1000)
        }
    }
}
</script>

<template>
    <div v-if="!show" class="absolute flex flex-col justify-center items-center h-full md:h-screen w-full z-50 bg-darker_blur_hop">
        <figure>
            <img src="../assets/hop-logo.png" class="h-60" />
        </figure>

        <div class="absolute h-60 w-60 border-4 border-l-transparent border-r-white_hop border-b-transparent border-t-transparent 
                animate-spin ease-in-out duration-500 rounded-full"></div>
    </div>
</template>