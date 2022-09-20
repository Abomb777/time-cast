import { toWindows,toUnix } from '../main';

describe('findOrCreate method', () => {
    it('Test no cast on win', () => {
        expect(toWindows('GMT Standard Time')).toBe('GMT Standard Time');
    });
    it('Test no cast on Unix', () => {
        expect(toUnix('Europe/London')).toBe('Europe/London');
    });

    it('Test Unix to Windows', () => {
        expect(toWindows('Europe/London')).toBe('GMT Standard Time');
    });
    it('Test Windows to Unix', () => {
        expect(toUnix('GMT Standard Time')).toBe('Europe/London');
    });

    it('Test iso2 toWindows', () => {
        expect(toWindows('GB')).toBe('GMT Standard Time');
    });
    it('Test iso2 toUnix', () => {
        expect(toUnix('GB')).toBe('Europe/London');
    });
});