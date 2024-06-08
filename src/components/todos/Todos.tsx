import {
  type KeyboardEvent,
  type ReactElement,
  useMemo,
  useState,
} from 'react';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';

import { UiInput } from 'src/components';
import { TodosPanel } from 'src/components/todos/todos_panel/TodosPanel';
import { TodosManagement } from 'src/components/todos/TodosManagement';
import { useTodosContext } from 'src/context';

const MainLayout = styled.div`
  max-width: 550px;
  width: 100%;
  min-height: 100px;
  box-shadow: 0px 0px 6px 0px ${({ theme }) => theme.shadow};
`;

const TodosElement = (): ReactElement => {
  const [todoValue, setTodoValue] = useState('');
  const { setTodos, todos } = useTodosContext();

  const incompleteTodosCount = useMemo(
    () => todos.filter((todo) => !todo.isCompleted).length,
    [todos],
  );

  const onKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (!todoValue.trim()) return;

    if (e.key === 'Enter') {
      const newTodo = {
        id: uuidv4(),
        title: todoValue,
        isCompleted: false,
      };
      setTodos((prev) => [newTodo, ...prev]);
      setTodoValue('');
    }
  };

  const onClearCompletedTodos = () => {
    setTodos((prevTodos) => prevTodos.filter((todo) => !todo.isCompleted));
  };

  return (
    <MainLayout>
      <UiInput
        onChange={(e) => setTodoValue(e.target.value)}
        value={todoValue}
        onKeyDown={onKeyDown}
        placeholder="What needs to be done?"
        type="text"
      />
      <TodosPanel todos={todos} setTodos={setTodos} />
      <TodosManagement
        onClearCompletedTodos={onClearCompletedTodos}
        incompleteTodosCount={incompleteTodosCount}
      />
    </MainLayout>
  );
};

export const Todos = TodosElement;
