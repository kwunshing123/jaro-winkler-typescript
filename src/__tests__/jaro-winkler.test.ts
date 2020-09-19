import {jaro, jaroWinkler} from '../index';

test('Jaro Extreme Case', () => {
    expect(jaro('', '')).toBe(0);
});

test('Jaro-winkler Extreme Case', () => {
    expect(jaroWinkler('', '')).toBe(0);
});

test('Jaro: Str1 longer than Str2 case', () => {
    expect(jaro('ab', 'a')).toBe(0.8333333333333334);
});

test('Jaro-winkler: Str1 longer than Str2 case', () => {
    expect(jaroWinkler('ab', 'a')).toBe(0.8500000000000001);
});

test('Jaro: Str2 longer than Str1 case', () => {
    expect(jaro('ab', 'a')).toBe(0.8333333333333334);
});

test('Jaro-winkler: Str2 longer than Str1 case', () => {
    expect(jaroWinkler('a', 'ab')).toBe(0.8500000000000001);
});

test('Jaro: Case Sensitive', () => {
    expect(jaro('AB', 'ab')).toBe(0);
});

test('Jaro-winkler: Case Sensitive', () => {
    expect(jaroWinkler('AB', 'ab')).toBe(0);
});

test('Jaro: Non-case Sensitive', () => {
    expect(jaro('AB', 'ab', { caseSensitive: false})).toBe(1);
});

test('Jaro-winkler: Non-case Sensitive', () => {
    expect(jaroWinkler('AB', 'ab', { caseSensitive: false})).toBe(1);
});

test('Jaro Normal Case', () => {
    expect(jaro('TRATE', 'TRACE')).toBe(0.8666666666666667);
});

test('Jaro-winkler Normal Case', () => {
    expect(jaroWinkler('TRATE', 'TRACE')).toBe(0.9066666666666667);
});
