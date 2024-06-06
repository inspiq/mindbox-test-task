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
import { getInitialState } from 'src/utils';

interface Values {
  filter: FilterValues;
  setFilter: Dispatch<SetStateAction<FilterValues>>;
}

const initialValues: Values = {
  filter: FilterValues.All,
  setFilter: () => undefined,
};

export const FilterContext = createContext<Values>(initialValues);

export const FilterProvider = ({ children }: PropsWithChildren) => {
  const [filter, setFilter] = useState(() =>
    getInitialState<FilterValues>(LocalStorageKeys.Filter, FilterValues.All),
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
