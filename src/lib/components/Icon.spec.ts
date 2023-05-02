import { render, screen, fireEvent } from "@testing-library/svelte";

import { Direction } from "$lib/enums/direction.enum";
import Icon from "./Icon.svelte";

describe("Icon Component", () => {
    const iconProps = { 
        iconSVG: 'string',
	    viewBox: '0 0 448 512',
	    height: 22,
        width: 22,
        fill: 'fill-amadeustest',
        direction: Direction.Left,
        classes: 'test-class',
        testId: 'test-icon',
        clickLogic: () => {}

    };

    test('should render a button with all props', async () => {
       const { container } = render(Icon, { props: iconProps });
       screen.debug();
       const svgIcon = container.querySelector("[data-cy-id='test-icon']") as HTMLImageElement;

        expect(svgIcon).toBeInTheDocument();
        expect(svgIcon).toHaveClass('rotate-90 fill-amadeustest test-class');
        expect(svgIcon).toHaveAttribute('viewBox', '0 0 448 512');
        expect(svgIcon).toHaveAttribute('width', "22");
        expect(svgIcon).toHaveAttribute('height', "22");
        expect(svgIcon).toHaveAttribute('data-cy-id', 'test-icon');
    });

    test.todo('should test click event', async () => {
        const { container } = render(Icon, { props: iconProps });
        const svgIcon = container.querySelector("[data-cy-id]='test-icon'") as HTMLImageElement;
        const mockMethod = vi.spyOn(Icon.arguments, 'clickLogic');
    
        await fireEvent.click(svgIcon);
        expect(mockMethod).toHaveBeenCalled();
      });
});