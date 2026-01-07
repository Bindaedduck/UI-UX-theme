import { type ReactNode, useMemo, useState } from 'react';
import { 
  Chip, Table, TableBody, TableCell, Box,
  TableContainer, TableHead, TableRow, TablePagination, 
  TableSortLabel
} from '@mui/material';

export interface Column<T> {
    id: keyof T | 'actions';
    label: string;
    align?: 'left' | 'center' | 'right';
    minWidth?: number;
    
    format?: (value: any, row: T) => ReactNode;
}

interface DataTableProps<T> {
    columns: Column<T>[];
    rows: T[];
    rowKey: keyof T;
    rowsPerPageOptions?: number[];
    defaultRowPerPage?: number;
}

type Order = 'asc' | 'desc';

export default function DataTable<T>({
  columns, 
  rows, 
  rowKey,
  rowsPerPageOptions = [10, 25, 100],
  defaultRowPerPage = 10

}: DataTableProps<T>) {
  const [page, setPage] = useState(0); // 현재 페이지 of 전체 페이지
  const [rowsPerPage, setRowsPerPage] = useState(defaultRowPerPage); // 한 번에 보여줄 페이지
  const [order, setOrder] = useState<Order | null>(null);
  const [orderBy, setOrderBy] = useState<keyof T | null>(null);

  const handleChangePage = (_: unknown, newPage: number) => setPage(newPage);

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const visibleRows = useMemo(
    () =>
      [...rows]
        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage),
    [ page, rowsPerPage]
  );

  return(
      <>
          <TableContainer sx={{ width: '100%' }}>
            <Table stickyHeader>
              <TableHead sx={{ height: 60 }}> 
                <TableRow>
                  {columns.map((column) => (
                    <TableCell
                        key={column.id as string}
                        align={column.align || 'left'}
                        sx={{ minWidth: column.minWidth }}
                        sortDirection={false}
                    >
                        {column.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {visibleRows
                  .map((row) => (
                    <TableRow
                        key={row[rowKey] as string}
                        hover
                        sx={{ height: 80 }}
                    >
                        {columns.map((column) => {
                            const value = row[column.id as keyof T];
                            return (
                                <TableCell
                                    key={`${row[rowKey]}-${column.id as string}`}
                                    align={column.align || 'left'}
                                >
                                    {column.format ? column.format(value, row) : (value as ReactNode)}
                                </TableCell>
                            )
                        })}
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>

          <TablePagination
            rowsPerPageOptions={rowsPerPageOptions}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
      </>
  )
}