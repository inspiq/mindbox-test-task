import { expect, it } from 'vitest';

import { TodosFiltersPanel } from 'src/components/todos/todos_filters_panel/TodosFiltersPanel';
import { render } from 'src/utils';

const createFilter = () => {
  return {
    value: 0,
    title: 'Test',
  };
};

it('Test render todos filters panel', () => {
  const filtersResponse = [createFilter(), createFilter()];
  const wrapper = render(<TodosFiltersPanel filters={filtersResponse} />);
  expect(wrapper.getAllByText('Test').length).toBe(filtersResponse.length);
});
