import $ from '../src/scripts/ts/index';

import { describe, it } from 'mocha';
import { expect } from 'chai';

describe('Foo', () => {
  it('should equal: foo', () => {
    expect('foo').to.equal('foo');
  });
});
