import { 
    removeLeadingZero, 
    clickOutside, 
    formatVariableKey, 
    getMinWidth, 
    isInViewport 
} from "./helpers";

describe('Helper functions', () => {
    test('should test removeLeadingZero', () => {
        expect(removeLeadingZero('01')).toBe('1');
        expect(removeLeadingZero('001')).toBe('1');
        expect(removeLeadingZero('0test')).toBe('test');
        expect(removeLeadingZero('0101')).toBe('101');
    });

    test('should test formatVariableKey', () => {
        expect(removeLeadingZero('01')).toBe('1');
    });
})