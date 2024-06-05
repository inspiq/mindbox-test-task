import type { ReactElement } from 'react';
import styled from 'styled-components';

import { TodosFilterCard } from 'src/components/todos/todos_filters_panel/TodosFilterCard';
import { useFilterContext } from 'src/context';
import type { Filter } from 'src/types';

const MainLayout = styled.div`
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
          onChangeFilter={() => setFilter(item)}
          isActive={item.value === filter.value}
        />
      ))}
    </MainLayout>
  );
};

export const TodosFiltersPanel = TodosFiltersPanelElement;
