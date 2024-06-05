import {
  createContext,
  type Dispatch,
  type PropsWithChildren,
  type SetStateAction,
  useContext,
  useEffect,
  useState,
} from 'react';

import { FilterValues, LocalStorageKeys } from 'src/enums';
import type { Filter } from 'src/types';
import { getInitialState } from 'src/utils';

interface Values {
  filter: Filter;
  setFilter: Dispatch<SetStateAction<Filter>>;
}

const initialValues: Values = {
  filter: {
    value: FilterValues.All,
    title: 'Все',
  },
  setFilter: () => undefined,
};

export const FilterContext = createContext<Values>(initialValues);

export const FilterProvider = ({ children }: PropsWithChildren) => {
  const [filter, setFilter] = useState(() =>
    getInitialState<Filter>(LocalStorageKeys.Filter, {
      value: FilterValues.All,
      title: 'Все',
    }),
  );

  useEffect(() => {
    localStorage.setItem(LocalStorageKeys.Filter, JSON.stringify(filter));
  }, [filter]);

  const contextValues = {
    filter,
    setFilter,
  };

  return (
    <FilterContext.Provider value={contextValues}>
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => useContext(FilterContext);
