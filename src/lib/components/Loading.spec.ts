import { render, screen, waitFor } from '@testing-library/svelte';

import Loading from './Loading.svelte';

describe('Loading Component', () => {
	const loadingProps = {
		width: '150px',
		height: '135px',
		loadingAnimationDuration: 555,
		removeAnimation: false,
		isScreenCentered: false,
		testId: 'test-loading'
	};

	test('should render a loading spinner', async () => {
		const { container } = render(Loading, { props: loadingProps });
		const loadingDiv = container.querySelector("[data-cy-id='test-loading']") as HTMLDivElement;

		expect(loadingDiv).toBeInTheDocument();
		expect(loadingDiv).toContainHTML('img');
		waitFor(() => expect(screen.getAllByAltText('Loading...')).toBeInTheDocument());
		waitFor(() => expect(screen.getAllByAltText('Loading...')).toHaveAttribute('width', '150px'));
		waitFor(() => expect(screen.getAllByAltText('Loading...')).toHaveAttribute('height', '135px'));

		expect(loadingDiv).toHaveAttribute('data-cy-id', 'test-loading');
	});

	test('should render a loading spinner with screen centering class', async () => {
		loadingProps.isScreenCentered = true;

		const { container } = render(Loading, { props: loadingProps });
		const loadingDiv = container.querySelector("[data-cy-id='test-loading']") as HTMLDivElement;

		expect(loadingDiv).toBeInTheDocument();
		expect(loadingDiv).toHaveClass('am-c-loading__screen-center');
	});
});
