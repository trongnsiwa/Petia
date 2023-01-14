<script>
	import Navbar from '$lib/components/Navbar.svelte';
	import Sidebar from '$lib/components/Sidebar.svelte';
</script>

<Navbar />

<div>
	<Sidebar />
	<slot />
</div>
