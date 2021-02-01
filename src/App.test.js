import React from 'react';
import App from './App';

import { shallow } from 'enzyme';

/* test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
}); */

describe('<App />', () => {
  let appWrapper;
  let appInstance;
  const app = (disableLifecycleMethods = false) =>
    shallow(<App />, { disableLifecycleMethods });

  beforeEach(() => {
    appWrapper = app();
    appInstance = appWrapper.instance();
  });

  afterEach(() => {
    appWrapper = undefined;
    appInstance = undefined;
  });
  
  it('renders without crashing', () => {
    expect(app().exists()).toBe(true);
  });

  describe('the rendered div', () => {
    const div = () => appWrapper.first();
  
    it('contains everything else that gets rendered', () => {
      expect(div().children()).toEqual(appWrapper.children());
    })
  }) 

});





