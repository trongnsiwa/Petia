<script lang ts>
	import Navigationbar from './Navigationbar.svelte';
	import Searchbar from './Searchbar.svelte';

	let name = 'Trong';
</script>

<div class="h-[calc(100vh-64px)] w-[30rem] flex flex-col justify-center px-10">
	<h1 class="text-2xl">
		Working hard, <span class="font-bold text-petia-400 text-3xl">{name}</span>
	</h1>

	<div class="mt-3 h-3/4 w-full border border-petia-200 rounded-2xl">
		<Searchbar />
		<div class="border-t border-petia-200 w-full h-full">
			<Navigationbar />
		</div>
	</div>
</div>
