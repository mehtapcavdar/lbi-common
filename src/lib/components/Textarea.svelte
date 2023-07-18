<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();
	export let classes = '';
	export let classesForInput = '';
	export let labelName = '';
	export let inputName = '';
	export let inputError = '';
	export let inputValue = '';
	export let placeholder = '';
	export let required: boolean = false;
	export let isReadOnly: boolean = false;
	export let isDisabled: boolean = false;
	export let testId: string = '';
</script>

<div class={classes}>
	<label for={inputName}
		>{labelName}{#if required}
			*
		{/if}</label
	>
	<div class="lbi-input--wrapper-position {labelName ? 'lbi-input--wrapper-padding' : ''}">
		<textarea
			data-cy-id={testId}
			disabled={isDisabled}
			readonly={isReadOnly}
			class="lbi-input--field
        		{inputError ? 'lbi-input--field-error-border' : ''} 
				{classesForInput}"
			bind:value={inputValue}
			on:blur={(event) => dispatch('onInputBlur', event)}
			on:input={(event) => dispatch('onInput', event)}
			on:change={(event) => dispatch('onInputChanges', event)}
			{placeholder}
			name={inputName}
			id={inputName}
			autocomplete="off"
		/>
	</div>
	<div data-cy-id="errormessage" class="lbi-input--error-message">
		{inputError}
	</div>
</div>

<style>
	::placeholder {
		font-style: italic;
		color: #808080;
	}

	.lbi-input--extra-sign {
		position: absolute;
		bottom: 0.5rem;
		z-index: 50;
		left: 0.25rem;
	}

	.lbi-input--error-message {
		color: #c60000;
		font-size: 0.75rem;
		line-height: 1rem;
		min-height: 20px;
	}

	.lbi-input--field {
		appearance: none;
		display: block;
		width: 100%;
		min-width: auto;
		padding: 0.5rem 0.75rem;
		border: 1px solid #b3b3b3;
		border-radius: 0.125rem;
		color: #1a1a1a;
		margin-bottom: 0.25rem;
		margin-right: 0;
	}
	
	@media (min-width: 640px) {
			.lbi-input--field {
				font-size: 0.875rem;
				line-height: 1.25rem;
			}
		}

	.lbi-input--field:focus {
		outline: 2px solid transparent;
   		outline-offset: 2px;
		border-color: #005eb8;
		z-index: 10;
	}

	.lbi-input--field-error-border {
		border-color: #c60000;
	}

	.lbi-input--field-number-padding {
		padding-right: 0;
	}

	.lbi-input--wrapper-position {
		position: relative;
	}

	.lbi-input--wrapper-padding {
		padding-top: 0.5rem;
	}
</style>
