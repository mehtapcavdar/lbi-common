<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	export let labelText = '';
	export let inputName = '';
	export let inputError = '';
	export let options: any = [];
	export let classesForError = '';
	export let classesForInput = '';
	export let classesForInputLabel = '';
	export let classesForLabel = '';
	export let classesForRadioGroup = '';
	export let isRequired: boolean = false;
	export let isDisabled: boolean = false;
	export let testId: string;
	export let selectedOption: any;

	const dispatch = createEventDispatcher();

	$: selectedOption, dispatch('optionSelected', selectedOption);
</script>

<div role="radiogroup" data-cy-id={testId} class="flex flex-col {classesForRadioGroup}">
	{#if labelText}
		<span class="font-bold mb-2 {classesForLabel}">
			{labelText}
			{#if isRequired}
				<span aria-hidden="true" class="font-normal"> * </span>
			{/if}
		</span>
	{/if}

	{#each options as option, index}
		<div class="min-h-[1.5rem] pl-[1.375rem] mb-[0.125rem]" aria-required={isRequired}>
			<input
				type="radio"
				name={`${inputName}`}
				value={option?.value}
				class="
					w-4 h-4 mt-1 align-top bg-no-repeat bg-center bg-contain border-amadeusgray600 border-2 rounded-full appearance-none pr-1 float-left ml-[-1.375rem] 
					{isDisabled ? 'cursor-not-allowed' : 'cursor-pointer'}
					{inputError !== '' ? 'error' : 'normal'} 
					{classesForInput}"
				disabled={isDisabled}
				required={isRequired}
				bind:group={selectedOption}
				on:blur={() => dispatch('optionSelected', selectedOption)}
				data-cy-id={`${testId}-${index}-input`}
			/>
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<label
				for={`${inputName}`}
				on:click={() => (selectedOption = option.value)}
				class="
					{isDisabled ? 'cursor-not-allowed' : 'cursor-pointer'} 
					{inputError !== '' ? 'error' : 'normal'} 
					{classesForInputLabel}"
				data-cy-id={`${testId}-${index}-label`}
			>
				{option.name}
			</label>
		</div>
	{/each}
	<div data-cy-id="errormessage" class="text-amadeusred text-xs min-h-[20px] {classesForError}">
		{inputError}
	</div>
</div>

<style>
	input[type='radio']:checked {
		background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='2.5' fill='%23005eb8'/%3e%3c/svg%3e");
	}

	input[type='radio']:checked:disabled {
		background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='2.5' fill='%23b3b3b3'/%3e%3c/svg%3e");
		border-color: var(--amadeus-color-gray-300) !important;
	}

	input[type='radio']:disabled {
		background-color: #e6e6e6 !important;
		border-color: var(--amadeus-color-gray-300) !important;
		pointer-events: auto;
		filter: none;
		opacity: 1;
	}

	label.normal {
		color: var(--amadeus-color-gray-900);
	}

	input[type='radio'].normal {
		border-color: var(--amadeus-color-gray-600);
	}

	input[type='radio'].normal:focus {
		outline: 0;
		box-shadow: 0 0 0 0.25rem #005eb840;
	}
	input[type='radio'].normal:checked {
		border-color: var(--amadeus-color-blue);
	}

	label.error {
		color: var(--amadeus-color-red);
	}

	input[type='radio'].error {
		border-color: var(--amadeus-color-red);
	}

	input[type='radio'].error:focus {
		outline: 0;
		box-shadow: 0 0 0 0.25rem #c6000040;
	}

	input[type='radio'].error:checked {
		border-color: var(--amadeus-color-red);
	}
</style>
