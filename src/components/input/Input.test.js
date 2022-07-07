import React from 'react';
import renderer from 'react-test-renderer';
import Input from './Input';

test('Link changes the class when hovered', () => {
  const component = renderer.create(
    <Input page="http://www.facebook.com">Facebook</Input>,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  // manually trigger the callback
  tree.props.onMouseEnter();
  // re-rendering
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  // manually trigger the callback
  tree.props.onMouseLeave();
  // re-rendering
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});