<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import Icon from './Icon.svelte';
	import Input from './Input.svelte';
	import { CROSS_SVG, SEARCH_SVG } from '../config/constants';

	export let placeholderLabel: string;
	export let searchErrorMessage: string;
	export let ALLOWED_CHARS_SEARCH_REGEX: RegExp;

	export let testId = '';
	export let searchValue = '';

	const dispatch = createEventDispatcher();
	function loadResults() {
		dispatch('loadResults');
	}

	function clearSearchList() {
		searchValue = '';
		loadResults();
	}

	function isValid(searchValue: string): boolean {
		return ALLOWED_CHARS_SEARCH_REGEX.test(searchValue);
	}
</script>

<div class="relative search-container w-full">
	<div class="absolute inset-y-0 left-0 pl-3 items-center cursor-pointer z-10">
		<Icon
			iconSVG={SEARCH_SVG}
			fill="#9a9a9a"
			viewBox={'0 0 30 30'}
			width={17}
			height={17}
			classes={'mt-3'}
		/>
	</div>
	<Input
		classesForInput="search-input"
		placeholder={placeholderLabel}
		inputName="searchInput"
		{testId}
		bind:inputValue={searchValue}
		on:onInput={() => {
			if (isValid(searchValue) && searchValue?.length > 2) {
				loadResults();
			} else if (searchValue === '') {
				clearSearchList();
			}
		}}
		inputError={searchValue === '' || isValid(searchValue) ? '' : searchErrorMessage}
	/>
	{#if searchValue}
		<div class="absolute inset-y-0 right-0 pr-1 xs:pr-2 flex items-top cursor-pointer">
			<Icon
				iconSVG={CROSS_SVG}
				width={17}
				height={17}
				classes={'mt-3'}
				fill="#9a9a9a"
				clickLogic={() => {
					clearSearchList();
				}}
			/>
		</div>
	{/if}
</div>

<style>
	.search-container :global(.search-input) {
		display: block;
		line-height: 1.25rem;
		padding: 0.5rem 2rem;
	}
</style>
