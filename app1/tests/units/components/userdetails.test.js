/* eslint-disable no-undef */

import React from 'react';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';
import { Userdetails } from '@root/components/userdetails';

const defaultComponent = <Userdetails t={() => {}} />;

test('Userdetails is rendered', () => {
  expect(toJson(shallow(defaultComponent))).toMatchSnapshot();
});

/* eslint-enable no-undef */
