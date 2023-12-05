import { render, screen } from '@testing-library/svelte';

import AccordionItem from './AccordionItem.svelte';
import html from 'svelte-htm';
import userEvent from '@testing-library/user-event';

describe('Button Component', () => {
	const AccordionItemProps = {
		open: false,
        disabled: false,
		showBody: true,
		clickLogic: null,
        animationDurationForShowingBody: 200,
        animationDurationForHidingBody: 0,
		buttonTestId: `testAccordionItemButton`,
        bodyTestId: 'testAccordionItemBody',
        buttonClasses: '',
        bodyClasses: ''
	};

    test('should render accordionItem with all props', async () => {
        render(AccordionItem, { props: AccordionItemProps });

        const accordionItemButton = screen.getByRole(`button`);
        expect(accordionItemButton).toBeInTheDocument();
        expect(accordionItemButton).toBeEnabled();
        expect(accordionItemButton).toHaveAttribute(
            'data-cy-id',
            'testAccordionItemButton'
        );

    });

    test('should render accordionItem disabled', async () => {
        render(AccordionItem, { props: {...AccordionItemProps, disabled: true }});

        const accordionItemButton = screen.getByRole(`button`);
        expect(accordionItemButton).toBeInTheDocument();
        expect(accordionItemButton).toBeDisabled();
        expect(accordionItemButton).toHaveAttribute(
            'data-cy-id',
            'testAccordionItemButton'
        );

    });

    test('should render accordionItem with the body opened', async () => {
       
        render(html`
            <${AccordionItem} open=${true}>
                <div slot="button">Click</div>
                <div slot="body">Clicked</div>
            </${AccordionItem}>
        `);

        const accordionItemButton = screen.getByText(`Click`);
        const accordionItemBody = screen.getByText(`Clicked`);
        expect(accordionItemButton).toBeInTheDocument();
        expect(accordionItemBody).toBeInTheDocument();
    });

    test('should open the accordionItem body on click on the AccordionItem button', async () => {
        const user = userEvent.setup();
        render(html`
            <${AccordionItem}>
                <div slot="button">Click</div>
                <div slot="body">Clicked</div>
            </${AccordionItem}>
        `, { props: AccordionItemProps });

        const accordionItemButton = screen.getByText(`Click`);
        expect(accordionItemButton).toBeInTheDocument();
        
        await user.click(accordionItemButton);
        
        const accordionItemBody = screen.getByText(`Clicked`);
        expect(accordionItemBody).toBeInTheDocument();
    });

	test('should test click event', async () => {
		const clickFunc = vi.fn();
     const user = userEvent.setup();
		render(html`
            <${AccordionItem} clickLogic=${clickFunc}>
                <div slot="button">Click</div>
                <div slot="body">Clicked</div>
            </${AccordionItem}>
        `);
		const accordionItemButton = screen.getByText('Click');

		await user.click(accordionItemButton);
		expect(clickFunc).toHaveBeenCalled();
	});
});
