import { type ReactElement } from 'react';
import pluralize from 'pluralize';
import styled from 'styled-components';

import { TodosFiltersPanel } from 'src/components/todos/todos_filters_panel/TodosFiltersPanel';
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

interface Props {
  incompleteTodosCount: number;
  onClearCompletedTodos: () => void;
}

const TodosManagementElement = ({
  incompleteTodosCount,
  onClearCompletedTodos,
}: Props): ReactElement => (
  <MainLayout>
    <ActiveTodoCount>
      {pluralize('item', incompleteTodosCount, true)} left
    </ActiveTodoCount>
    <TodosFiltersPanel filters={filters} />
    <Action onClick={onClearCompletedTodos}>Clear completed</Action>
  </MainLayout>
);

export const TodosManagement = TodosManagementElement;
