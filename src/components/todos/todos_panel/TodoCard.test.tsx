import { fireEvent, render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { v4 as uuidv4 } from 'uuid';
import { expect, it, vi } from 'vitest';

import { TodoCard } from 'src/components/todos/todos_panel/TodoCard';
import { theme } from 'src/theme';

const createTodo = () => {
  return {
    id: uuidv4(),
    title: 'Test',
    isCompleted: false,
  };
};

const onToggleCompleteTodo = vi.fn();
const wrapper = render(
  <ThemeProvider theme={theme}>
    <TodoCard
      todo={createTodo()}
      onToggleCompleteTodo={onToggleCompleteTodo}
      isLastElement={false}
      index={0}
    />
  </ThemeProvider>,
);

it('Test render todos panel', () => {
  expect(wrapper.getByText('Test')).toBeTruthy();
});

it('Test click button toggle complete todo', () => {
  const checkbox = wrapper.getByTestId('checkbox');
  fireEvent.click(checkbox);
  expect(onToggleCompleteTodo).toBeCalled();
});
