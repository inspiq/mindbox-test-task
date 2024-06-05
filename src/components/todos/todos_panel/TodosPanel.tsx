import {
  type Dispatch,
  type ReactElement,
  type SetStateAction,
  useCallback,
  useMemo,
} from 'react';
import styled from 'styled-components';

import { TodoCard } from 'src/components/todos/todos_panel/TodoCard';
import { useFilterContext } from 'src/context';
import { FilterValues } from 'src/enums';
import type { Todo } from 'src/types';

const MainLayout = styled.ul`
  display: flex;
  flex-direction: column;
`;

const NotFound = styled.div`
  font-size: 16px;
  font-weight: ${({ theme }) => theme.w400};
  color: ${({ theme }) => theme.grey};
  padding: 15px 10px;
`;

interface Props {
  todos: Todo[];
  setTodos: Dispatch<SetStateAction<Todo[]>>;
}

const filterFunctions = {
  [FilterValues.All]: () => true,
  [FilterValues.Active]: (todo: Todo) => !todo.isCompleted,
  [FilterValues.Completed]: (todo: Todo) => todo.isCompleted,
};

const TodosPanelElement = ({ todos, setTodos }: Props): ReactElement => {
  const { filter } = useFilterContext();

  const onToggleCompleteTodo = useCallback(
    (todoId: string) => {
      setTodos((prev) =>
        prev.map((todo) =>
          todo.id === todoId
            ? { ...todo, isCompleted: !todo.isCompleted }
            : todo,
        ),
      );
    },
    [setTodos],
  );

  const filteredTodos = useMemo(
    () => todos.filter(filterFunctions[filter.value]),
    [filter.value, todos],
  );

  if (!filteredTodos.length) {
    return <NotFound>No todos found..</NotFound>;
  }

  return (
    <MainLayout>
      {filteredTodos.map((todo, index) => (
        <TodoCard
          key={todo.id}
          todo={todo}
          onToggleCompleteTodo={() => onToggleCompleteTodo(todo.id)}
          isLastElement={index === filteredTodos.length - 1}
          index={index}
        />
      ))}
    </MainLayout>
  );
};

export const TodosPanel = TodosPanelElement;
