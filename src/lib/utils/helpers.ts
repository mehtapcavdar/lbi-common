export function removeLeadingZero(input: string): string {
	return input.replace(/^0+/, '');
}

/** Dispatch event on click outside of node */
export function clickOutside(node) {
	const handleClick = (event) => {
		if (node && !node.contains(event.target) && !event.defaultPrevented) {
			node.dispatchEvent(new CustomEvent('click_outside', node));
		}
	};

	document.addEventListener('click', handleClick, true);

	return {
		destroy() {
			document.removeEventListener('click', handleClick, true);
		}
	};
}

export const formatVariableKey = (str) => {
	return str
		.replace(/-_$/g, '')
		.replace(/([a-z0-9])([A-Z])/g, '$1-$2')
		.replace(/([A-Z])([A-Z])(?=[a-z])/g, '$1-$2')
		.toLowerCase();
};

export const getMinWidth = (element, maxWidth) => {
	const extraCharPadding = 2;
	const elementWidth = element.getBoundingClientRect().width + extraCharPadding;
	const elementStyle = window.getComputedStyle(element);
	const elementPaddingLeft = parseInt(elementStyle.getPropertyValue('padding-left'), 10);
	const elementPaddingRight = parseInt(elementStyle.getPropertyValue('padding-right'), 10);
	const elementPadding = elementPaddingLeft + elementPaddingRight;
	const contentWidth = elementWidth - elementPadding;

	return Math.round(Math.min(maxWidth, contentWidth || maxWidth));
};

export const isInViewport = (element) => {
	const rect = element.getBoundingClientRect();

	return (
		rect.top >= 0 &&
		rect.left >= 0 &&
		rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
		rect.right <= (window.innerWidth || document.documentElement.clientWidth)
	);
};
