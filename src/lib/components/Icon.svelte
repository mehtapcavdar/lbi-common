<script lang="ts">
	import { Direction } from '$lib/enums/direction.enum';

	export let iconSVG: string;
	export let viewBox: string = '0 0 448 512';
	export let height: number = 22;
	export let width: number = 22;
	export let fill: string = '#005eb8';
	export let direction: Direction = Direction.Left;
	export let clickLogic: Function | null = null;
	export let classes: string = '';
	export let testId: string = '';
	export let tabIndex: number = 0;

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

	function handleKeyboardPress(e: KeyboardEvent): Function | null {
		if (clickLogic) {
			switch (e.key) {
				case 'Enter':
					return clickLogic(e);
				default:
					return null;
			}
		}
		return null;
	}
</script>

<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
<svg
	on:click={(e) => (clickLogic ? clickLogic(e) : null)}
	on:keypress={(e) => handleKeyboardPress(e)}
	preserveAspectRatio="xMinYMax meet"
	{height}
	{width}
	xmlns="http://www.w3.org/2000/svg"
	class="{getIconDirection(direction)} {classes}"
	{fill}
	data-cy-id={testId}
	{viewBox}
	tabindex={clickLogic ? tabIndex : null}
	role={clickLogic ? 'button' : null}
>
	<path d={iconSVG} />
</svg>
