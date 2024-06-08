import { fireEvent, render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { expect, it, vi } from 'vitest';

import { TodosFilterCard } from 'src/components/todos/todos_filters_panel/TodosFilterCard';
import { theme } from 'src/theme';

const onChangeFilter = vi.fn();
const title = 'Test';
const wrapper = render(
  <ThemeProvider theme={theme}>
    <TodosFilterCard
      title={title}
      isActive={false}
      onChangeFilter={onChangeFilter}
    />
  </ThemeProvider>,
);

it('Test render todos filter card', () => {
  expect(wrapper.getByText(title)).toBeTruthy();
});

it('Test click button on change filter', () => {
  const filterCard = wrapper.getByText(title);
  fireEvent.click(filterCard);
  expect(onChangeFilter).toBeCalled();
});
