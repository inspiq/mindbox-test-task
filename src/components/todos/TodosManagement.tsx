import { type ReactElement, useMemo } from 'react';
import pluralize from 'pluralize';
import styled from 'styled-components';

import { TodosFiltersPanel } from 'src/components/todos/todos_filters_panel/TodosFiltersPanel';
import { useTodosContext } from 'src/context';
import { filters } from 'src/mocks';

const MainLayout = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 10px;
  border-top: 1px solid ${({ theme }) => theme.light_grey};
`;

const Action = styled.div`
  cursor: pointer;
  font-size: 12px;
  font-weight: ${({ theme }) => theme.w400};
  color: ${({ theme }) => theme.grey};
`;

const ActiveTodoCount = styled(Action)`
  cursor: default;
`;

const TodosManagementElement = (): ReactElement => {
  const { setTodos, todos } = useTodosContext();

  const onClearCompletedTodos = () => {
    setTodos((prevTodos) => prevTodos.filter((todo) => !todo.isCompleted));
  };
  const incompleteTodosCount = useMemo(
    () => todos.filter((todo) => !todo.isCompleted).length,
    [todos],
  );

  return (
    <MainLayout>
      <ActiveTodoCount>
        {pluralize('item', incompleteTodosCount, true)} left
      </ActiveTodoCount>
      <TodosFiltersPanel filters={filters} />
      <Action onClick={onClearCompletedTodos}>Clear completed</Action>
    </MainLayout>
  );
};

export const TodosManagement = TodosManagementElement;
