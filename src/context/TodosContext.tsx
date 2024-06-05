import {
  createContext,
  type Dispatch,
  type PropsWithChildren,
  type SetStateAction,
  useContext,
  useEffect,
  useState,
} from 'react';

import { LocalStorageKeys } from 'src/enums';
import type { Todo } from 'src/types';
import { getInitialState } from 'src/utils';

interface Values {
  todos: Todo[];
  setTodos: Dispatch<SetStateAction<Todo[]>>;
}

const initialValues: Values = {
  todos: [],
  setTodos: () => undefined,
};

export const TodosContext = createContext<Values>(initialValues);

export const TodosProvider = ({ children }: PropsWithChildren) => {
  const [todos, setTodos] = useState<Todo[]>(() =>
    getInitialState<Todo[]>(LocalStorageKeys.Todos, []),
  );

  useEffect(() => {
    localStorage.setItem(LocalStorageKeys.Todos, JSON.stringify(todos));
  }, [todos]);

  const contextValues = {
    todos,
    setTodos,
  };

  return (
    <TodosContext.Provider value={contextValues}>
      {children}
    </TodosContext.Provider>
  );
};

export const useTodosContext = () => useContext(TodosContext);
