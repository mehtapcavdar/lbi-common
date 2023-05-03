import {
	removeLeadingZero,
	formatVariableKey,
	getMinWidth,
	isInViewport
} from './helpers';

describe('Helper functions', () => {
	test('should test removeLeadingZero', () => {
		expect(removeLeadingZero('01')).toBe('1');
		expect(removeLeadingZero('001')).toBe('1');
		expect(removeLeadingZero('0test')).toBe('test');
		expect(removeLeadingZero('0101')).toBe('101');
		expect(removeLeadingZero('101')).toBe('101');
		expect(removeLeadingZero('0101 0101')).toBe('101 0101');
	});

	test.todo('should test clickOutside', () => {});

	test.todo('should test formatVariableKey', () => {});

	test.todo('should test getMinWidth', () => {});

	test.todo('should test isInViewport', () => {});
});
