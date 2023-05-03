<script lang="ts">
	import { Direction } from "$lib/enums/direction.enum";

	export let iconSVG: string;
	export let viewBox: string = '0 0 448 512';
	export let height: number = 22;
	export let width: number = 22;
	export let fill: string = '#005eb8';
	export let direction: Direction = Direction.Left;
	export let clickLogic: Function | null = null;
	export let classes: string = '';
	export let testId: string = '';

	function getIconDirection(direction: Direction): string {
		switch (direction) {
			case Direction.Left:
				return 'rotate-90';
			case Direction.Right:
				return '-rotate-90';
			case Direction.Up:
				return 'rotate-180';
			case Direction.Down:
				return 'rotate-0';

			default:
				return 'rotate-90';
		}
	}
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<svg
	on:click={(e) => (clickLogic ? clickLogic(e) : null)}
	preserveAspectRatio="xMinYMax meet"
	{height} {width}
	xmlns="http://www.w3.org/2000/svg"
	class="{getIconDirection(direction)} {classes}"
	fill={fill}
	data-cy-id={testId}
	{viewBox}
>
	<path d={iconSVG} />
</svg>
