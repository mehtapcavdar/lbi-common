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
</script>

<div class={classes}>
	<label for={inputName}
		>{labelName}{#if required}
			*
		{/if}</label
	>
	<div class="relative {labelName ? 'pt-2': ''}">
		<input
			data-cy-id={testId}
			disabled={isDisabled}
			readonly={isReadOnly}
			class="am-c-input sm:text-sm rounded-sm min-w-fit mr-0
        {inputError ? 'border-amadeusred' : ''} {isTypeNumber
				? 'pr-0'
				: ''} {classesForInput}"
			bind:value={inputValue}
			on:blur={(event) => {
				dispatch('onInputBlur', event),
					isTypeNumber ? (inputValue = removeLeadingZero(inputValue)) : null;
			}}
			on:input={(event) => dispatch('onInput', event)}
			on:change={(event) => dispatch('onInputChanges', event)}
			use:typeAction
			{placeholder}
			name={inputName}
			{min}
			{max}
			autocomplete="off"
		/>
		{#if extraSign}
			<div class="absolute bottom-2 z-50 left-1">{extraSign}</div>
		{/if}
	</div>
	<div data-cy-id="errormessage" class="text-amadeusred text-xs min-h-[20px]">
		{inputError}
	</div>
</div>
<style>
	.am-c-input {
		min-width: 240px;
		appearance: none;
		position: relative;
		display: block;
		width: 100%;
		padding-left: 0.75rem;
		padding-right: 0.75rem; 
		padding-top: 0.5rem;
		padding-bottom: 0.5rem; 
		border-width: 1px;
		border-color: rgb(209 213 219);
		color: rgb(17 24 39);	
		margin-bottom: 1rem;
		border-radius: 0.175rem;
	}
	:focus{
		outline: none;
		border-color: #005eb8;
		z-index: 10;
		border-width: 1px;
		
	}
	::placeholder{
		font-style: italic;
		color: #a0aec0;
	}
</style>