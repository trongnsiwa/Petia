<script lang ts>
	import Icon from '@iconify/svelte';

	let isLoggedIn = true;
	let name = 'Trong';
</script>

<div class="navbar bg-petia-400 items-center justify-center">
	<div class="container">
		<div class="flex-1">
			<a href="/" class="text-petia-100 text-xl font-bold">Petia</a>
		</div>
		<div class="flex-none">
			{#if isLoggedIn}
				<div class="dropdown dropdown-end dropdown-bottom">
					<label tabindex="0" class="btn btn-ghost btn-circle border-none avatar">
						<div class="rounded-full w-8">
							<img
								src="https://api.dicebear.com/5.x/micah/svg?seed={name}&backgroundColor=EAE7B1"
								alt="avatar"
							/>
						</div>
					</label>
					<ul
						tabindex="0"
						class="dropdown-content menu p-2 shadow shadow-petia-400 bg-base-100 w-52 rounded-xl mt-4"
					>
						<li class="hover:bg-gray-100 text-sm rounded-xl hover:text-petia-400">
							<a href="/"><Icon icon="lucide:log-out" class="h-5 w-5" /> Log out</a>
						</li>
					</ul>
				</div>
			{:else}
				<div class="flex items-center gap-5">
					<a href="/login" class="text-petia-100 text-sm hover">Log in</a>
					<a href="/signup" class="btn normal-case text-petia-100 font-normal hover:bg-petia-200/50"
						>Sign up</a
					>
				</div>
			{/if}
		</div>
	</div>
</div>
