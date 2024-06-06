import type { ReactElement } from 'react';
import styled from 'styled-components';

import { TodosFilterCard } from 'src/components/todos/todos_filters_panel/TodosFilterCard';
import { useFilterContext } from 'src/context';
import type { Filter } from 'src/types';

const MainLayout = styled.ul`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const TodosFiltersPanelElement = ({
  filters,
}: {
  filters: Filter[];
}): ReactElement => {
  const { setFilter, filter } = useFilterContext();

  return (
    <MainLayout>
      {filters.map((item) => (
        <TodosFilterCard
          key={item.value}
          title={item.title}
          onChangeFilter={() => setFilter(item.value)}
          isActive={item.value === filter}
        />
      ))}
    </MainLayout>
  );
};

export const TodosFiltersPanel = TodosFiltersPanelElement;
