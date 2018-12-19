/* global it, describe, expect */
import SmartBool from '../src/SmartBool.ts';

describe('SmartBool', () => {
  it('Sets boolean values', async () => {
    const sb = new SmartBool();

    expect(sb.isTrue).toBe(false);
    expect(sb.isFalse).toBe(!sb.isTrue);

    sb.setTrue();

    expect(sb.isTrue).toBe(true);
    expect(sb.isFalse).toBe(!sb.isTrue);

    sb.setFalse();

    expect(sb.isTrue).toBe(false);
    expect(sb.isFalse).toBe(!sb.isTrue);
  });

  it('Toggles boolean values', async () => {
    const sb = new SmartBool();

    expect(sb.isTrue).toBe(false);
    expect(sb.isFalse).toBe(!sb.isTrue);

    sb.toggle();

    expect(sb.isTrue).toBe(true);
    expect(sb.isFalse).toBe(!sb.isTrue);

    sb.toggle();

    expect(sb.isTrue).toBe(false);
    expect(sb.isFalse).toBe(!sb.isTrue);
  });

  it('Awaits a request', async () => {
    const sb = new SmartBool();

    const request = new Promise(resolve => setTimeout(resolve, 100));
    expect(sb.isTrue).toBe(false);
    expect(sb.saving()).toBe('Save');
    const sbUntil = sb.until(request);
    expect(sb.saving()).toBe('Saving...');
    expect(sb.isTrue).toBe(true);
    await sbUntil;
    expect(sb.saving()).toBe('Save');
    expect(sb.isTrue).toBe(false);
  });
});
