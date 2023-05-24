<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();
	export let classes = '';
	export let labelName = '';
	export let inputName = '';
	export let inputError = '';
	export let inputValue = '';
	export let placeholder = '';
	export let showAll = false;
	export let options: Array<any> = [];
</script>

<div class={classes}>
	<label for={inputName}>{labelName}</label>
	<div class="relative {labelName ? 'pt-2': ''}">
		<select
			name={inputName}
			class="
                am-c-input am-c-input--auto-min-width am-c-select
                {inputError ? 'am-c-input--on-error' : ''}
            "
			bind:value={inputValue}
			on:change={() => dispatch('onSelectChanges')}
			on:blur={(event) => {dispatch('onInputBlur', event)}}
		>
			{#if placeholder}<option value="" disabled selected hidden>{placeholder}</option>{/if}
			{#if showAll}<option value="">All</option>{/if}
				{#each options as option}
					<option value={option.id}>{option.value}</option>
				{/each}
		</select>
	</div>
	<div class="text-amadeusred text-xs {!inputError ? 'invisible' : ''}">{inputError}.</div>
</div>
<style>
	.am-c-input {
		min-width: 240px;
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

	.am-c-input--auto-min-width {
		min-width: auto;
	}

	.am-c-select {
		background-image: linear-gradient(45deg, transparent 50%, black 50%),
		linear-gradient(135deg, black 50%, transparent 50%);
		background-position: calc(100% - 20px) calc(1em + 2px), calc(100% - 15px) calc(1em + 2px), 100% 0;
		background-size: 5px 5px, 5px 5px, 2.5em 2.5em;
		background-repeat: no-repeat;
	}
	
	.am-c-input--on-error {
		border-color: #c60000;
	}
</style>