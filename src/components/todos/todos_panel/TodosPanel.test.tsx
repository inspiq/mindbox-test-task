import { v4 as uuidv4 } from 'uuid';
import { expect, it, vi } from 'vitest';

import { TodosPanel } from 'src/components/todos/todos_panel/TodosPanel';
import { render } from 'src/utils';

const createTodo = () => {
  return {
    id: uuidv4(),
    title: 'Test',
    isCompleted: false,
  };
};

it('Test render todos panel', () => {
  const todosResponse = [createTodo(), createTodo()];
  const wrapper = render(
    <TodosPanel todos={todosResponse} setTodos={vi.fn()} />,
  );
  expect(wrapper.getAllByText('Test').length).toBe(todosResponse.length);
});

it('Test render no todos found message', () => {
  const wrapper = render(<TodosPanel todos={[]} setTodos={vi.fn()} />);
  expect(wrapper.getByText('No todos found..')).toBeTruthy();
});
