import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { expect, it } from 'vitest';

import { TodosFiltersPanel } from 'src/components/todos/todos_filters_panel/TodosFiltersPanel';
import { theme } from 'src/theme';

const createFilter = () => {
  return {
    value: 0,
    title: 'Test',
  };
};

it('Test render todos filters panel', () => {
  const filtersResponse = [createFilter(), createFilter()];
  const wrapper = render(
    <ThemeProvider theme={theme}>
      <TodosFiltersPanel filters={filtersResponse} />
    </ThemeProvider>,
  );
  expect(wrapper.getAllByText('Test').length).toBe(filtersResponse.length);
});
