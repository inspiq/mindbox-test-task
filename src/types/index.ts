import type { FilterValues } from 'src/enums';

export interface Todo {
  id: string;
  title: string;
  isCompleted: boolean;
}

export interface Filter {
  value: FilterValues;
  title: string;
}
