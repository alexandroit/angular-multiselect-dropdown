import { normalizeIdentifier } from './identifier';

describe('normalizeIdentifier', () => {
    it('preserves the existing identifier contract', () => {
        expect(normalizeIdentifier('---Option???One---')).toBe('option-one');
        expect(normalizeIdentifier('___option_one___')).toBe('___option_one___');
        expect(normalizeIdentifier('---')).toBe('');
    });

    it('handles adversarial runs with linear work', () => {
        expect(normalizeIdentifier('-'.repeat(150000) + 'option')).toBe('option');
        expect(normalizeIdentifier('left' + '?'.repeat(150000) + 'right')).toBe('left-right');
    });
});
