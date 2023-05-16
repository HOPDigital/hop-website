<script>
import { RiInstagramLine, RiFacebookBoxFill, RiLinkedinBoxFill } from 'vue-remix-icons';

export default {
	components: {
		RiInstagramLine,
		RiFacebookBoxFill,
		RiLinkedinBoxFill
	}
}
</script>

<template>
	<footer class="bg-darker_blur_hop py-16 w-full">
		<main class="flex flex-col justify-center items-center px-8 text-white">
			<span class="bg-white_hop opacity-[0.2] w-full md:w-[80%] h-[2px] my-5"></span>

			<div class="flex flex-row justify-between items-center text-xs md:text-sm md:w-[80%]">
				<p>© {{ new Date().getFullYear() }} Hop Digital. Todos os direitos reservados.</p>

				<div class="flex flex-row gap-x-3">
					<a href="https://www.instagram.com/digital.hop/" target="_blank" title="HOP Digital - Instagram">
						<RiInstagramLine class="h-[24px] bg-white_hop bg-opacity-[0.1] fill-white_hop p-1 rounded-full" />
					</a>

					<a href="https://www.facebook.com/hopdigitalsfw" target="_blank" title="HOP Digital - Facebook">
						<RiFacebookBoxFill class="h-[24px] bg-white_hop bg-opacity-[0.1] fill-white_hop p-1 rounded-full" />
					</a>

					<a href="https://www.linkedin.com/company/digital-hop/about/" target="_blank" title="HOP Digital - LinkedIn">
						<RiLinkedinBoxFill class="h-[24px] bg-white_hop bg-opacity-[0.1] fill-white_hop p-1 rounded-full" />
					</a>
				</div>
			</div>
		</main>
	</footer>
</template>