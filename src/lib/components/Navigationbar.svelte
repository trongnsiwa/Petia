<script lang ts>
	import Project from './Project.svelte';

	let projects = [
		{
			name: 'Project 1'
		},
		{
			name: 'Project 2'
		},
		{
			name: 'Project 3'
		}
	];

	let expanded = false;

	const toggle = () => {
		expanded = !expanded;
	};
</script>

<button on:click={toggle}>Your Projects</button>

{#if expanded}
	<ul>
		{#each projects as project}
			<Project name={project.name} />
		{/each}
	</ul>
{/if}
