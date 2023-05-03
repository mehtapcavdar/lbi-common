import { render, screen, fireEvent, waitFor } from '@testing-library/svelte'; 
import { tick } from 'svelte';

import Input from './Input.svelte';
import { InputTypes } from '$lib/enums/inputtypes.enum';

describe('Input Component', () => {
    let inputProps = {
        classes: 'test-class',
        classesForInput: 'test-class-for-input',
        labelName: 'label-name',
        inputName: 'input-name',
        inputError: '',
        inputValue: 'input-value',
        placeholder: 'placeholder',
        min: '',
        max: '',
        type: InputTypes.Text,
        extraSign: '',
        required: false,
        isReadOnly: false,
        isDisabled: false,
        testId: 'test-input'
    };

    beforeEach(() => {
        inputProps = {
            classes: 'test-class',
            classesForInput: 'test-class-for-input',
            labelName: 'label-name',
            inputName: 'input-name',
            inputError: '',
            inputValue: 'input-value',
            placeholder: 'placeholder',
            min: '',
            max: '',
            type: InputTypes.Text,
            extraSign: '',
            required: false,
            isReadOnly: false,
            isDisabled: false,
            testId: 'test-input'
        };
    });

	test('should render an input with all default props', async () => {
		const { container } = render(Input, { props: inputProps });
        const labelForInput = container.querySelector("[for='input-name']") as HTMLLabelElement;
        const outerDiv = container.querySelector('.test-class') as HTMLDivElement;
        const errorDiv = container.querySelector("[data-cy-id='errormessage']") as HTMLDivElement;

        expect(outerDiv).toBeInTheDocument();
        expect(outerDiv).toHaveClass('test-class');
		expect(screen.getByPlaceholderText(inputProps.placeholder)).toBeInTheDocument();
        expect(labelForInput).toBeInTheDocument();
        expect(labelForInput).toHaveTextContent(inputProps.labelName);
        expect(screen.getByPlaceholderText(inputProps.placeholder)).toHaveValue('input-value');
        expect(screen.getByPlaceholderText(inputProps.placeholder)).toHaveClass('test-class-for-input');
        expect(screen.getByPlaceholderText(inputProps.placeholder)).toHaveAttribute(
            'placeholder',
            'placeholder'
        );
        expect(screen.getByPlaceholderText(inputProps.placeholder)).toHaveAttribute(
            'type',
            'text'
        );
        expect(screen.getByPlaceholderText(inputProps.placeholder)).toHaveAttribute(
            'name',
            'input-name'
        );
        expect(screen.getByPlaceholderText(inputProps.placeholder)).toHaveAttribute(
            'data-cy-id',
            'test-input'
        );

        expect(errorDiv).toBeInTheDocument().toContainHTML('');
	});

	test('should render a required input', async () => {
        inputProps.required = true;
        const { container } = render(Input, { props: inputProps });
        const labelForInput = container.querySelector("[for='input-name']") as HTMLLabelElement;

        expect(labelForInput).toHaveTextContent(`${inputProps.labelName}*`);
    });

    test('should render a read-only input', async () => {
        inputProps.isReadOnly = true;
        render(Input, { props: inputProps });

        expect(screen.getByPlaceholderText(inputProps.placeholder)).toHaveAttribute(
            'readonly',
            ''
        )
    });
    
    test('should render a disabled input', async () => {
        inputProps.isDisabled = true;
        render(Input, { props: inputProps });

        expect(screen.getByPlaceholderText(inputProps.placeholder)).toBeDisabled();
    });

    test('should render an input with extra sign', async () => {
        inputProps.extraSign = '$';
        render(Input, { props: inputProps });

        const { container } = render(Input, { props: inputProps });
        const extraSignDiv = container.querySelector('absolute bottom-2 z-50 left-1') as HTMLDivElement;

        waitFor(() => expect(extraSignDiv).toBeInTheDocument());
    });

    test('should render a numeric input', async () => {
        inputProps.type = InputTypes.Number;
        render(Input, { props: inputProps });
        const input = screen.getByPlaceholderText(inputProps.placeholder) as HTMLInputElement;

        expect(input).toHaveClass('pr-0');
    });

    test('should render a numeric input with min value', async () => {
        inputProps.type = InputTypes.Number;
        inputProps.min = '2';
        render(Input, { props: inputProps });
        const input = screen.getByPlaceholderText(inputProps.placeholder) as HTMLInputElement;

        expect(input).toHaveClass('pr-0');
        expect(input).toHaveAttribute('min', '2');
    });

    test('should render a numeric input with max value', async () => {
        inputProps.type = InputTypes.Number;
        inputProps.max = '2';
        render(Input, { props: inputProps });
        const input = screen.getByPlaceholderText(inputProps.placeholder) as HTMLInputElement;

        expect(input).toHaveClass('pr-0');
        expect(input).toHaveAttribute('max', '2');
    });

    test('should render a numeric input with min & max value', async () => {
        inputProps.type = InputTypes.Number;
        inputProps.min= '0';
        inputProps.max = '10';
        render(Input, { props: inputProps });
        const input = screen.getByPlaceholderText(inputProps.placeholder) as HTMLInputElement;

        expect(input).toHaveClass('pr-0');
        expect(input).toHaveAttribute('min', '0');
        expect(input).toHaveAttribute('max', '10');
    });

    test('should render an error message', async () => {
        inputProps.inputError = 'Error Test!';
        render(Input, { props: inputProps });
        const input = screen.getByPlaceholderText(inputProps.placeholder) as HTMLInputElement;
        const errorDiv = document.querySelector("[data-cy-id='errormessage']") as HTMLDivElement;

        expect(input).toBeInTheDocument();
        expect(errorDiv).toBeInTheDocument().toContainHTML('Error Test!');
    });

    test('should correctly bind value', async () => { 
        render(Input, { props: inputProps });
        const input = screen.getByPlaceholderText(inputProps.placeholder) as HTMLInputElement;

        fireEvent.change(input, {target: { value: 'test value' } });
        await tick();

        expect(input.value).toEqual('test value');

    });
});