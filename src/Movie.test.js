import React from 'react';
import { render, cleanup } from 'react-testing-library';
import { MemoryRouter } from 'react-router-dom';
import Movie from './Movie';

afterEach(() => {
  cleanup();
  console.error.mockClear();
});

console.error = jest.fn();

test('<Movie>', () => {
  render(
    <Movie />,
  );

  expect(console.error).toHaveBeenCalledTimes(1);
});

const movie = {
  id: 'hi',
  title: 'Level Up Big Day Out',
  poster_path: 'adsfadsfa.jpg',
};
test('<Movie> with movie', () => {
  const { debug } = render(
    <MemoryRouter>
      <Movie movie={movie} />
    </MemoryRouter>,
  );

  expect(console.error).not.toHaveBeenCalledTimes(1);
  debug();
});
