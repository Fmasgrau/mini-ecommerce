import React from 'react';
import { screen, render } from '@testing-library/react';
import Card from './Card';

beforeEach(() =>
  render(
    <Card
      title="Title"
      imgSrc="https://raw.githubusercontent.com/N3evin/AmiiboAPI/master/images/icon_02c40001-00670502.png"
      imgAlt="TestImage"
      price={1}
      type="Card"
      onClick={() => true}
      buttonText="ButtonTest"
    />
  )
);

describe('Card Component', () => {
  it('Should contain a title', () => {
    const title = screen.getByText('Title');

    expect(title).toBeInTheDocument();
  });

  it('Should contain an image', () => {
    const image = screen.getByAltText('TestImage');

    expect(image).toBeInTheDocument();
  });

  it('Should contain a price', () => {
    const price = screen.getByText('1');

    expect(price).toBeInTheDocument();
  });
  it('Should contain a type', () => {
    const type = screen.getByText('Card');

    expect(type).toBeInTheDocument();
  });
  it('Should render a button', () => {
    const button = screen.getByRole('button');

    expect(button).toBeInTheDocument();
  });
  it('Should render a text inside the button', () => {
    const buttonText = screen.getByText('ButtonTest');

    expect(buttonText).toBeInTheDocument();
  });
});
