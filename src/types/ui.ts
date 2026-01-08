import type { ReactNode } from "react";

export interface SearchBox {
  id: string;
  placeholder: string;
  size: 'small' | 'medium';
  minWidth?: number;
}

export interface MenuBox {
  value: string;
}

export interface FilterBox {
  labelId: string;
  label: string;
  name: string;
  size: 'small' | 'medium';
  minWidth?: number;
  menuBoxes: MenuBox[]
}

export type Order = 'asc' | 'desc';

export interface Column<T> {
    id: keyof T | 'actions';
    label: string;
    align?: 'left' | 'center' | 'right';
    minWidth?: number;
    sortDirection?: Order | false;
    format?: (value: any, row: T) => ReactNode;
}

export interface DataTableProps<T> {
    columns: Column<T>[];
    rows: T[];
    rowKey: keyof T;
    rowsPerPageOptions?: number[];
    defaultRowPerPage?: number;
}

export interface DataProps {
  searchBoxes?: SearchBox[];
  filterBoxes: FilterBox[];
}


