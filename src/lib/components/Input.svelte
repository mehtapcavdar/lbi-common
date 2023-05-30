<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { InputTypes } from '$lib/enums/inputtypes.enum';
	import { removeLeadingZero } from '$lib/utils/helpers';

	const dispatch = createEventDispatcher();
	export let classes = '';
	export let classesForInput = '';
	export let labelName = '';
	export let inputName = '';
	export let inputError = '';
	export let inputValue = '';
	export let placeholder = '';
	export let min: string | number = '';
	export let max: string | number = '';
	export let type: string = InputTypes.Text;
	export let extraSign: string = '';
	export let required: boolean = false;
	export let isReadOnly: boolean = false;
	export let isDisabled: boolean = false;
	export let testId: string = '';
	const isTypeNumber: boolean = type === InputTypes.Number;

	function typeAction(node: any) {
		node.type = type;
	}

	function handleNumbers(){
		inputValue = removeLeadingZero(inputValue)
		if(min !== '' && +min > +inputValue) {
			inputValue = min.toString();
		} else if (max !== '' && +max < +inputValue) {
			inputValue = max.toString();
		}
	}
</script>

<div class={classes}>
	<label for={inputName}
		>{labelName}{#if required}
			*
		{/if}</label
	>
	<div style="position: relative; {labelName ? 'padding-top: 0.5rem; ' : ''}">
		<input
			data-cy-id={testId}
			disabled={isDisabled}
			readonly={isReadOnly}
			class="input-field
        		{inputError ? 'border-amadeusred' : ''} 
				{isTypeNumber ? 'pr-0' : ''} 
				{classesForInput}"
			style="
				{inputError ? 'border-color: var(--amadeus-color-red)' : ''}
				{isTypeNumber ? 'padding-right: 0px' : ''}"
			bind:value={inputValue}
			on:blur={(event) => {
				dispatch('onInputBlur', event);
				isTypeNumber ? (handleNumbers()) : null;
			}}
			on:input={(event) => dispatch('onInput', event)}
			on:change={(event) => dispatch('onInputChanges', event)}
			use:typeAction
			{placeholder}
			name={inputName}
			id={inputName}
			{min}
			{max}
			autocomplete="off"
		/>
		{#if extraSign}
			<div class="extra-sign">{extraSign}</div>
		{/if}
	</div>
	<div data-cy-id="errormessage" class="error-message">
		{inputError}
	</div>
</div>

<style>
	::placeholder {
		font-style: italic;
		color: var(--amadeus-color-gray-500);
	}

	.extra-sign {
		position: absolute;
		bottom: 0.5rem;
		z-index: 50;
		left: 0.25rem;
	}

	.error-message {
		color: var(--amadeus-color-red);
		font-size: 0.75rem;
		line-height: 1rem;
		min-height: 20px;
	}

	.input-field {
		appearance: none;
		display: block;
		width: 100%;
		min-width: fit-content;
		padding: 0.5rem 0.75rem;
		border: 1px solid var(--amadeus-color-gray-300);
		border-radius: 0.125rem;
		color: var(--amadeus-color-gray-900);
		margin-bottom: 0.25rem;
		margin-right: 0;

		@media (min-width: 640px) {
			font-size: 0.875rem;
        	line-height: 1.25rem;
		}

	}

	.input-field:focus {
		outline: 2px solid transparent;
   		outline-offset: 2px;
		border-color: var(--amadeus-color-blue);
		z-index: 10;
	}
</style>
