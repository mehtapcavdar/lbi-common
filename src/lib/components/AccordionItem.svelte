<script lang="ts">
	import { slide } from 'svelte/transition';

	export let open = false;
	export let disabled = false;
	export let showBody = true;
	export let clickLogic: null | ((...args: any) => any) = null;
	export let animationDurationForShowingBody = 200;
	export let animationDurationForHidingBody = 0;
	export let buttonTestId = '';
	export let bodyTestId = '';
	export let buttonClasses = '';
	export let bodyClasses = '';

	const handleClick = () => (open = !open);
</script>

<button
	class="accordion-button {buttonClasses}"
	{disabled}
	data-cy-id={buttonTestId}
	on:click={(e) => {
		if ($$slots.body && showBody) {
			handleClick();
			clickLogic ? clickLogic(e) : null;
		}
	}}
>
	{#if (showBody && $$slots.body)}
		<svg xmlns="http://www.w3.org/2000/svg" height="17" width="17" class="chevron" transform={open ? "rotate(180)" : "rotate(0)"} viewBox="0 0 448 512"><path xmlns="http://www.w3.org/2000/svg" fill="#005eb8" d="M240.971 130.524l194.343 194.343c9.373 9.373 9.373 24.569 0 33.941l-22.667 22.667c-9.357 9.357-24.522 9.375-33.901.04L224 227.495 69.255 381.516c-9.379 9.335-24.544 9.317-33.901-.04l-22.667-22.667c-9.373-9.373-9.373-24.569 0-33.941L207.03 130.525c9.372-9.373 24.568-9.373 33.941-.001z"/></svg>
	{/if}
	<slot name="button" />
</button>

{#if open && $$slots.body && showBody}
	<div
		class="accordion-body {!$$slots.body && !showBody ? 'no-before' : ''} {bodyClasses}"
		in:slide|local={{ duration: animationDurationForShowingBody }}
		out:slide|local={{ duration: animationDurationForHidingBody }}
		data-cy-id={bodyTestId}
	>
		<slot name="body" />
	</div>
{/if}

<style>
	.accordion-button {
		display: var(--accordion-button-display, flex);
		align-items: var(--accordion-button-align-items, center);
		width: var(--accordion-button-width, 100%);
		font-size: var(--accordion-button-font-size, 1rem);
		color: var(--accordion-button-color, #1a1a1a);
		text-align: var(--accordion-button-text-align, left);
		background-color: var(--accordion-button-bg-color, #fff);
		overflow-anchor: none;
		cursor: var(--accordion-button-cursor, pointer);

		padding-top: var(--accordion-button-pt, 0.75rem);
		padding-right: var(--accordion-button-pr, 1rem);
		padding-bottom: var(--accordion-button-pb, 0.75rem);
		padding-left: var(--accordion-button-pl, 1rem);

		border-top: var(--accordion-button-border-t, 1px);
		border-left: var(--accordion-button-border-l, 1px);
		border-bottom: var(--accordion-button-border-b, 1px);
		border-right: var(--accordion-button-border-r, 1px);

		border-style: var(--accordion-button-border-style, solid);
		border-color: var(--accordion-button-border-color, #ccc);

		&:hover {
			background-color: var(--accordion-button-hover-bg-color, #f4f9fb);
		}

		&[disabled] {
			color: var(--accordion-button-disabled-color, #b3b3b3);
			background-color: var(--accordion-button-disabled-bg-color, #e6e6e6);
			opacity: var(--accordion-button-disabled-opacity, 1);
			cursor: var(--accordion-button-disabled-cursor, not-allowed);
		}
	}

	.chevron {
		margin-top: var(--accordion-chevron-mt, 0rem);
		margin-right: var(--accordion-chevron-mr, 0.75rem);
		margin-bottom: var(--accordion-chevron-mb, 0rem);
		margin-left: var(--accordion-chevron-ml, 0rem);
	}

	.accordion-body {
		background-color: var(--accordion-body-bg-color, #fff);
		padding-top: var(--accordion-body-pt, 0.75rem);
		padding-right: var(--accordion-body-pr, 1rem);
		padding-bottom: var(--accordion-body-pb, 0.75rem);
		padding-left: var(--accordion-body-pl, 1rem);

		border-top: var(--accordion-body-border-t, 0px);
		border-left: var(--accordion-body-border-l, 1px);
		border-bottom: var(--accordion-body-border-b, 1px);
		border-right: var(--accordion-body-border-r, 1px);

		border-style: var(--accordion-body-border-style, solid);
		border-color: var(--accordion-body-border-color, #ccc);
	}

	button:focus:not(:focus-visible) {
		outline: 0;
	}
</style>
