<script>
	import Navbar from '$lib/components/Navbar.svelte';
	import Sidebar from '$lib/components/Sidebar.svelte';
</script>

<Navbar />

<div class="container mx-auto">
	<Sidebar />
	<slot />
</div>
