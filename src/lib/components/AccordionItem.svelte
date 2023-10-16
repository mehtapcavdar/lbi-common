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
	class:rotate={open}
	class:no-before={!showBody || !$$slots.body}
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
		padding-left: var(--accordion-button-pl, 2rem);

		border-top: var(--accordion-button-border-t, 1px);
		border-left: var(--accordion-button-border-l, 1px);
		border-bottom: var(--accordion-button-border-b, 1px);
		border-right: var(--accordion-button-border-r, 1px);

		border-style: var(--accordion-button-border-style, solid);
		border-color: var(--accordion-button-border-color, #ccc);

		&.no-before {
			padding-top: var(--accordion-button-no-arrow-pt, 0.75rem);
			padding-right: var(--accordion-button-no-arrow-pr, 1rem);
			padding-bottom: var(--accordion-button-no-arrow-pb, 0.75rem);
			padding-left: var(--accordion-button-no-arrow-pl, 1rem);
		}

		&.no-before::before {
			content: none;
		}

		&::before {
			content: var(--accordion-button-chevron-url, url('$lib/assets/chevron-up.svg'));
			position: var(--accordion-button-chevron-position, absolute);
			margin-left: var(--accordion-button-chevron-ml, -1.5rem);
			transform: var(--accordion-button-transform, rotate(180deg));
			transition: var(--accordion-button-chevron-transition, transform 0.2s ease-in-out);
		}

		&.rotate::before {
			transform: var(--accordion-button-transform-rotate, rotate(0deg));
		}

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
