<script lang="ts">
	import { LOADING_ANIMATION_DELAY_AND_DURATION } from '$lib/config/constants';
	import { fade } from 'svelte/transition';

	export let width: string = '140px';
	export let height: string = '140px';
	export let loadingAnimationDuration: number = LOADING_ANIMATION_DELAY_AND_DURATION;
	export let removeAnimation: boolean = false;
	export let isScreenCentered: boolean = false;
	export let classes: string = '';
	export let testId: string = '';
</script>

{#if removeAnimation}
	<div
		class="{classes} {isScreenCentered ? 'am-c-loading__screen-center' : ''}"
		data-cy-id={testId !== '' ? testId : null}
	>
		<img {width} {height} src="images/spinner.svg" alt="Loading..." class="am-c-loading" />
	</div>
{:else}
	<div
		class="{classes} {isScreenCentered ? 'am-c-loading__screen-center' : ''}"
		data-cy-id={testId !== '' ? testId : null}
		out:fade|global={{ duration: loadingAnimationDuration }}
	>
		<img {width} {height} src="images/spinner.svg" alt="Loading..." class="am-c-loading" />
	</div>
{/if}

<style>
	.am-c-loading {
		animation: rotation 1s infinite linear;
	}

	.am-c-loading__screen-center {
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		position: fixed;
	}
</style>
