<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();
	export let classes: string = '';
	export let labelName: string = '';
	export let inputName: string = '';
	export let inputError: string = '';
	export let inputValue: string = '';
	export let placeholder: string = '';
	export let testId: string = '';
	export let showAll: boolean = false;
	export let options: Array<any> = [];
</script>

<div class={classes}>
	<label for={inputName}>{labelName}</label>
	<div class="lbi-select-wrapper {labelName ? 'lbi-select-wrapper-padding' : ''}">
		<select
			data-cy-id={testId}
			name={inputName}
			class="
                lbi-input lbi-input--auto-min-width lbi-select
                {inputError ? 'lbi-input--on-error' : ''}
            "
			bind:value={inputValue}
			on:change={() => dispatch('onSelectChanges')}
			on:blur={(event) => {
				dispatch('onInputBlur', event);
			}}
		>
			{#if placeholder}<option value="" disabled selected hidden>{placeholder}</option>{/if}
			{#if showAll}<option value="">All</option>{/if}
			{#each options as option}
				<option value={option.id}>{option.value}</option>
			{/each}
		</select>
	</div>
	<div class="lbi-error-message {!inputError ? 'lbi-error-message-hidden' : ''}">{inputError}</div>
</div>

<style>
	.lbi-input {
		min-width: 240px;
		appearance: none;
		position: relative;
		display: block;
		width: 100%;
		padding: 0.5rem 0.75rem; 
		border: 1px solid #b3b3b3;
		border-radius: 0.125rem;	
		color: #1a1a1a;	
		margin-bottom: 0.25rem;
	}
	:focus {
		outline: none;
		border-color: #005eb8;
		z-index: 10;
		
	}
	::placeholder {
		font-style: italic;
		color: #808080;
	}

	.lbi-input--auto-min-width {
		min-width: auto;
	}

	.lbi-select {
		background-image: linear-gradient(45deg, transparent 50%, black 50%),
			linear-gradient(135deg, black 50%, transparent 50%);
		background-position: calc(100% - 20px) calc(1em + 2px), calc(100% - 15px) calc(1em + 2px),
			100% 0;
		background-size: 5px 5px, 5px 5px, 2.5em 2.5em;
		background-repeat: no-repeat;
		background-color: #fff;
	}
	
	.lbi-input--on-error {
		border-color: #c60000;
	}

	.lbi-error-message {
		color: #c60000;
		font-size: 0.75rem;
    	line-height: 1rem;
		min-height: 20px;
	}

	.lbi-error-message-hidden {
		visibility: hidden;
	}

	.lbi-select-wrapper {
		position: relative;
	}

	.lbi-select-wrapper-padding {
		padding-top: 0.5rem;
	}
</style>
