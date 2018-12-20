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

    const request = new Promise(resolve => setTimeout(resolve, 10));
    expect(sb.isTrue).toBe(false);
    expect(sb.saving()).toBe('Save');
    const sbUntil = sb.until(request);
    expect(sb.saving()).toBe('Saving...');
    expect(sb.isTrue).toBe(true);
    await sbUntil;
    expect(sb.saving()).toBe('Save');
    expect(sb.isTrue).toBe(false);
  });

  it('Throws errors but still sets boolean', async () => {
    const sb = new SmartBool();

    expect(sb.isTrue).toBe(false);
    try {
      const request = new Promise((resolve, reject) => setTimeout(reject, 10));
      await sb.until(request);
    }
    catch (err) {
      // Do nothing
    }
    expect(sb.isTrue).toBe(false);
  });
});
