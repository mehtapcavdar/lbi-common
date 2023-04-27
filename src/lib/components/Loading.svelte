<script lang="ts">
	import { LOADING_ANIMATION_DELAY_AND_DURATION } from '$lib/config/constants';
	import { fade } from 'svelte/transition';
	
	export let width: string = '140px';
	export let height: string = '140px';
	export let loadingAnimationDuration: number = LOADING_ANIMATION_DELAY_AND_DURATION;
	export let removeAnimation: boolean = false;
	export let isScreenCentered: boolean = false;
</script>

{#if removeAnimation}
	<div class={isScreenCentered ? 'am-c-loading__screen-center' : ''}>
		<img {width} {height} src="/images/spinner.svg" alt="Loading..." class="am-c-loading" />
	</div>
{:else}
	<div
		class={isScreenCentered ? 'am-c-loading__screen-center' : ''}
		out:fade={{ duration: loadingAnimationDuration }}
	>
		<img {width} {height} src="/images/spinner.svg" alt="Loading..." class="am-c-loading" />
	</div>
{/if}

<style>
	.am-c-loading__screen-center {
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		position: fixed;
	}
</style>
