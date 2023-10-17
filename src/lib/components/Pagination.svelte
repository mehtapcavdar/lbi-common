<script lang="ts">
	import { CHEVRON_SVG, DOUBLE_CHEVRON_SVG } from "$lib/config/constants";
	import { Direction } from "$lib/enums/direction.enum";
	import Icon from "./Icon.svelte";

	export let allContent: any = [];
	export let currentPage = 1; // Update this to simulate page change.
	export let itemsPerPage = 2;
	export let totalItems = allContent.length;
	export let totalPages = Math.ceil(totalItems / itemsPerPage);

	export function setCurrentPage(newPage: number) {
		currentPage = newPage;
	}
</script>

<ul class="pagination">
	<li>
		<a
			href={null}
			class="pagination-icon"
			class:disabled={currentPage === 1}
			aria-disabled={currentPage === 1}
            tabindex="0"
			on:click={() => {
				if (currentPage !== 1) setCurrentPage(1);
			}}>
                <Icon 
                    iconSVG={DOUBLE_CHEVRON_SVG} 
                    direction={Direction.Left}
                    width={17}
                    height={17}
                    fill={currentPage === 1 ? '#b3b3b3' : '#000'}
                />
            </a
		>
	</li>
	<li>
		<a
			href={null}
			class="pagination-icon"
			class:disabled={currentPage === 1}
			aria-disabled={currentPage === 1}
            tabindex="0"
			on:click={() => {
				if (currentPage !== 1) setCurrentPage(currentPage - 1);
			}}>
                <Icon 
                    iconSVG={CHEVRON_SVG} 
                    direction={Direction.Left}
                    width={17}
                    height={17}
                    fill={currentPage === 1 ? '#b3b3b3' : '#000'}
                    />
            </a
		>
	</li>
	{#each [2, 1] as i}
		{#if currentPage - i > 0}
			<li>
				<a
					href={null}
                    tabindex="0"
					class="pagination-link"
					on:click={() => setCurrentPage(currentPage - i)}>{currentPage - i}</a
				>
			</li>
		{/if}
	{/each}
	<li><a href={null} class="pagination-link active">{currentPage}</a></li>
	{#each Array(2) as _, i}
		{#if currentPage + (i + 1) <= totalPages}
			<li>
				<a
					href={null}
                    tabindex="0"
					class="pagination-link"
					on:click={() => setCurrentPage(currentPage + (i + 1))}
					>{currentPage + (i + 1)}</a
				>
			</li>
		{/if}
	{/each}
	<li>
		<a
			href={null}
			class="pagination-icon"
			class:disabled={currentPage === totalPages}
			aria-disabled={currentPage === totalPages}
            tabindex="0"
			on:click={() => {
				if (currentPage !== totalPages) setCurrentPage(currentPage + 1);
			}}>
                <Icon 
                    iconSVG={CHEVRON_SVG} 
                    direction={Direction.Right}
                    width={17}
                    height={17}
                    fill={currentPage === totalPages ? '#b3b3b3' : '#000'}
                />
            </a
		>
	</li>
	<li>
		<a
			href={null}
			class="pagination-icon"
			class:disabled={currentPage === totalPages}
			aria-disabled={currentPage === totalPages}
            tabindex="0"
			on:click={() => {
				if (currentPage !== totalPages) setCurrentPage(totalPages);
			}}>
                <Icon 
                    iconSVG={DOUBLE_CHEVRON_SVG} 
                    direction={Direction.Right}
                    width={17}
                    height={17}
                    fill={currentPage === totalPages ? '#b3b3b3' : '#000'}
                />
            </a
		>
	</li>
</ul>

<style>
	.pagination {
		display: flex;
		list-style: none;
	}

	.disabled {
		cursor: not-allowed;
	}

	.pagination-link,
    .pagination-icon {
		position: relative;
		display: block;

		text-align: center;
		margin: 0 0.125rem;
		z-index: initial;

		height: 2.25rem;
		min-width: 2.25rem;
		line-height: 2.25rem;
		font-size: 1rem;

		padding-left: var(--df-pagination-padding-x, 0.5rem);
		padding-right: var(--df-pagination-padding-x, 0.5rem);
		padding-top: var(--df-pagination-padding-y, 0rem);
		padding-bottom: var(--df-pagination-padding-y, 0rem);
		font-size: var(--df-pagination-font-size, 1rem);
		color: var(--df-pagination-color, #000);
		background-color: var(--df-pagination-bg, #fff);
        border-radius: var(--df-pagination-border-radius, 0.125rem);

		border: none;

		&:hover {
			color: var(--df-pagination-hover-color, #000);
			background-color: var(--df-pagination-hover-bg, #ccc);
			border-color: var(--df-pagination-hover-border-color, #b3b3b3);
		}

		&:focus {
			color: var(--df-pagination-focus-color, #005eb8);
			background-color: var(--df-pagination-focus-bg, #ccc);
			box-shadow: var(--df-pagination-focus-box-shadow, 0 0 0 0.25rem rgba(0, 94, 184, 0.25));
		}

		&.active {
			color: var(--df-pagination-active-color, #fff);
			background-color: var(--df-pagination-active-bg, #005eb8);
			border-color: var(--df-pagination-active-border-color, #005eb8);
		}

		&.disabled {
			color: var(--df-pagination-disabled-color, #b3b3b3);
			background-color: var(--df-pagination-disabled-bg, #fff);
			border-color: var(--df-pagination-disabled-border-color, #b3b3b3);
		}

	}

    .pagination-icon {
        display: flex;
        align-items: center;
        margin-top: -1px;
        border-radius: 50%;
    }
</style>
