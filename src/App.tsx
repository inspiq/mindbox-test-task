import 'src/index.css';

import type { ReactElement } from 'react';
import { ThemeProvider } from 'styled-components';

import { Layout, Todos } from 'src/components';
import { FilterProvider, TodosProvider } from 'src/context';
import { theme } from 'src/theme';

const AppElement = (): ReactElement => {
  return (
    <FilterProvider>
      <TodosProvider>
        <ThemeProvider theme={theme}>
          <Layout>
            <Todos />
          </Layout>
        </ThemeProvider>
      </TodosProvider>
    </FilterProvider>
  );
};

export const App = AppElement;
