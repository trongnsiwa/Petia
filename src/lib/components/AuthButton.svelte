<script lang="ts">
	export let name: any;
</script>

<button class="btn bg-white border-gray-400 w-full">
	<span class="flex items-center justify-center gap-3">
		<img src="images/{name}.png" alt={name} class="w-6 h-6" />
		<span class="normal-case">Continue with <span class="capitalize">{name}</span></span>
	</span>
</button>
