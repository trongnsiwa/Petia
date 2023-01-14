<script lang ts>
	import AuthButton from '$lib/components/AuthButton.svelte';
</script>

<h4 class="pt-16">Create an account</h4>
<div class="pt-7 flex flex-col gap-3 w-full">
	<AuthButton name="google" />
	<AuthButton name="github" />
	<AuthButton name="email" />
</div>
<div class="inline-flex gap-1.5 pt-5 text-sm">
	<p>Already have an account?</p>
	<a href="/login" class="font-bold text-petia-400 hover:underline">Log in</a>
</div>
