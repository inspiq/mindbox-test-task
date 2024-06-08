import { fireEvent } from '@testing-library/react';
import { expect, it, vi } from 'vitest';

import { TodosFilterCard } from 'src/components/todos/todos_filters_panel/TodosFilterCard';
import { render } from 'src/utils';

const onChangeFilter = vi.fn();
const title = 'Test';
const wrapper = render(
  <TodosFilterCard
    title={title}
    isActive={false}
    onChangeFilter={onChangeFilter}
  />,
);

it('Test render todos filter card', () => {
  expect(wrapper.getByText(title)).toBeTruthy();
});

it('Test click button on change filter', () => {
  const filterCard = wrapper.getByText(title);
  fireEvent.click(filterCard);
  expect(onChangeFilter).toBeCalled();
});
