import { render, screen, fireEvent } from "@testing-library/svelte";

import { ButtonType } from "$lib/enums/buttontype.enum";
import Button from "./Button.svelte";
import { getButtonSize }
import { Size } from "$lib/enums/size.enum";
import { TEST_IDS } from "$lib/enums/testconstants.enum";

describe("Button Component", () => {
    const buttonProps = { 
        label: 'Test Button', 
        isDisabled: true,
        additionalClasses: 'test-class',
        type: ButtonType.Primary,
        buttonSize: Size.Large,
        testingId: `${TEST_IDS.ButtonId}-Test Button`,
        clickLogic: () => vi.fn()

    };

    test('should render a button with all props', async () => {
       render(Button, { props: buttonProps });

        expect(screen.getByText(buttonProps.label)).toBeInTheDocument();
        expect(screen.getByText(buttonProps.label)).toBeDisabled();
        expect(screen.getByText(buttonProps.label)).toHaveClass('test-class am-c-df_btn am-c-df_btn-primary am-c-df_btn__lg');
        expect(screen.getByText(buttonProps.label)).toHaveAttribute('data-cy-id', 'ButtonId-Test Button');
    });

    test.todo('should test click event', async () => {
        render(Button, { props: buttonProps });
        const mockMethod = vi.spyOn(Button.arguments, 'clickLogic');
    
        await fireEvent.click(screen.getByText(buttonProps.label));
        expect(mockMethod).toHaveBeenCalled();
      });
})