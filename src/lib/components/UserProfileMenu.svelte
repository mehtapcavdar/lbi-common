<script lang="ts">
	import { CHEVRON_SVG, Direction, Icon } from '$lib';
	import { USER_SVG, USER_LOGOUT_SVG } from '$lib/config/constants';

	export let testId = '';
	export let classes = '';
	export let classesForDropdownButton = '';
	export let dropdownLabel: string;
	export let options: { link: string; label: string }[];
	export let funcLabel: string;
	export let func: any;

	let isDropdownOpen: boolean = false;

	function toggleDropdown() {
		isDropdownOpen = !isDropdownOpen;
	}

	document.onclick = function (e) {
		let dropdown_menu = document.querySelector('.dropdown-button');
		if (!dropdown_menu?.contains(e.target)) {
			isDropdownOpen = false;
		}
	};
</script>

<div class="dropdown-wrapper {classes}">
	<button
		data-cy-id={testId}
		class="dropdown-button {classesForDropdownButton}"
		on:click={() => toggleDropdown()}
	>
		<Icon
			iconSVG={USER_SVG}
			classes={'cursor-pointer mx-2'}
			tabIndex={0}
			width={17}
			height={17}
			direction={Direction.Up}
		/>
		{dropdownLabel}
		<Icon
			iconSVG={CHEVRON_SVG}
			classes={'cursor-pointer mx-2'}
			tabIndex={0}
			width={15}
			height={15}
			direction={isDropdownOpen ? Direction.Up : Direction.Down}
		/>
	</button>

	{#if isDropdownOpen}
		<div class="dropdown">
			{#each options as option}
				<a href={option.link} class="dropdown-list">{option.label} </a>
			{/each}
			<hr class="divider" />
			<div
				class="dropdown-list-divider"
				role="button"
				tabindex="0"
				on:keydown={(e) => {
					if (e.key === 'Enter') func();
				}}
				on:click={() => func()}
			>
				<Icon
					iconSVG={USER_LOGOUT_SVG}
					classes={'cursor-pointer'}
					tabIndex={0}
					fill="#808080"
					width={28}
					height={17}
					direction={Direction.Up}
				/>
				{funcLabel}
			</div>
		</div>
	{/if}
</div>

<style>
	.divider {
		border-color: #ccc;
	}
	.dropdown-list-divider {
		display: flex;
		flex-direction: row;
		align-items: center;
		padding: 0.75rem 1rem;
	}
	.dropdown-list-divider:hover {
		color: rgb(55 65 81);
		background-color: rgb(229 231 235);
	}
	.dropdown-list:hover {
		background-color: rgb(229 231 235);
		color: rgb(55 65 81);
	}
	.dropdown-list {
		padding: 0.5rem 1rem;
	}
	.dropdown-wrapper {
		width: fit-content;
		font-weight: 100;
		user-select: none;
		position: relative;
	}
	.dropdown-button {
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		width: 100%;
		align-items: center;
		border-radius: 0.25rem;
		border-width: 2px;
		padding: 0.5rem;
	}
	.dropdown-button:focus {
		border-style: unset;
		border-color: var(--df-lightblue);
		--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width)
			var(--tw-ring-offset-color);
		--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(4px + var(--tw-ring-offset-width))
			var(--tw-ring-color);
		box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
		background-color: aliceblue;
	}
	.dropdown {
		display: flex;
		flex-direction: column;
		border-width: 2px;
		width: 105%;
		border-radius: 0.25rem;
		border-color: rgb(209 213 219);
		background-color: white;
		position: absolute;
		margin-top: 2px;
		right: 0px;
		z-index: 10;
		text-align: start;
		color: rgb(55 65 81);
		box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
	}
</style>
