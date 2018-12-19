/* global it, describe, expect */
import SmartBool from '../src/SmartBool.ts';

describe('SmartBool', () => {
  it('Sets boolean values', async () => {
    const sb = new SmartBool();

    expect(sb.isTrue).toBe(false);
    sb.setTrue();
    expect(sb.isTrue).toBe(true);
  });
});
