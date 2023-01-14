<script lang ts>
	let isLoggedIn = false;
</script>

<div class="navbar bg-petia-400 justify-center">
	<div class="container">
		<div class="flex-1">
			<a href="/" class="text-petia-100 text-xl font-bold">Petia</a>
		</div>
		<div class="flex-none">
			{#if isLoggedIn}
				<a href="/logout" class="text-petia-100 btn btn-ghost">Log out</a>
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
