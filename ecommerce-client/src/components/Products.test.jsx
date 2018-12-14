import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter, Link } from "react-router-dom";

import Products from './Products';

const mockProducts = [
  { id: 1, name: 'Widget' },
  { id: 2, name: 'Whatzit' },
  { id: 3, name: 'Gadget' }
];

it('renders all the products', () => {
  const component = renderer.create(
    <MemoryRouter><Products products={mockProducts} /></MemoryRouter>
  );

  const p = component.root.findByType('ul');
  expect(p.children).toHaveLength(3);
});

it('renders products with a link', () => {
  const component = renderer.create(
    <MemoryRouter><Products products={mockProducts} /></MemoryRouter>
  );

  const p = component.root.findByType('ul');
  const link = p.children[0].findByType(Link);

  expect(link).toBeDefined();
});

it('renders products with the correct path', () => {
  const component = renderer.create(
    <MemoryRouter><Products products={mockProducts} /></MemoryRouter>
  );

  const p = component.root.findByType('ul');
  const link = p.children[0].findByType(Link);

  expect(link.props['to']).toBe('/products/1');
});

it('renders products with the correct name', () => {
  const component = renderer.create(
    <MemoryRouter><Products products={mockProducts} /></MemoryRouter>
  );

  const p = component.root.findByType('ul');
  const anchor = p.children[0].findByType('a'); // get the actual anchor, not the component

  expect(anchor.children).toEqual(['Widget']);
});