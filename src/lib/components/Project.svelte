<script lang="ts">
	export let expanded = false;
	export let name: string;

	const toggle = () => {
		expanded = !expanded;
	};
</script>

<button on:click={toggle}>{name}</button>

{#if expanded}
	<ul>
		<li>Project Information</li>
		<li>Work Items</li>
		<li>Notes</li>
	</ul>
{/if}
