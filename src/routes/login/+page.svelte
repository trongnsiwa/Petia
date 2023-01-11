<script lang ts>
	import AuthButton from '$lib/components/AuthButton.svelte';
</script>

<div>
	<div>
		<h3>Petia</h3>
		<h4>Log in</h4>
		<div>
			<AuthButton />
			<AuthButton />
			<AuthButton />
		</div>
		<div>
			<p>Don't you have an account?</p>
			<a href="/signup">Sign up</a>
		</div>
	</div>
</div>

<style>
</style>
