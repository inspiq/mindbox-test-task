import { expect, it } from 'vitest';

import { getInitialState } from 'src/utils';

const localStorageMock = (() => {
  let store: { [key: string]: string } = {};

  return {
    getItem: (key: string) => store[key] || null,
    setItem: (key: string, value: string) => {
      store[key] = value;
    },
    clear: () => {
      store = {};
    },
    removeItem: (key: string) => {
      delete store[key];
    },
  };
})();

Object.defineProperty(window, 'localStorage', {
  value: localStorageMock,
});

it('Test return default value if localStorage is empty', () => {
  localStorage.clear();
  const defaultValue = { name: 'default' };
  expect(getInitialState('non-existent-key', defaultValue)).toEqual(
    defaultValue,
  );
});

it('Test return parsed value from localStorage if key exists', () => {
  const storedValue = { name: 'stored' };
  localStorage.setItem('existing-key', JSON.stringify(storedValue));
  expect(getInitialState('existing-key', { name: 'default' })).toEqual(
    storedValue,
  );
});
