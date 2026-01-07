import { type ReactNode, useMemo, useState } from 'react';
import { 
  Chip, Table, TableBody, TableCell, Box,
  TableContainer, TableHead, TableRow, TablePagination, 
  TableSortLabel
} from '@mui/material';
import { visuallyHidden } from '@mui/utils';

export interface Column<T> {
    id: keyof T | 'actions';
    label: string;
    align?: 'left' | 'center' | 'right';
    minWidth?: number;
    sortDirection?: Order | false;
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

function getComparator<T, Key extends keyof T>(
  order: Order,
  orderBy: Key,
): (a: T, b: T) => number {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function descendingComparator<T, Key extends keyof T>(
    a: T, 
    b: T, 
    orderBy: keyof T
  ) {
  if (b[orderBy] < a[orderBy]) return -1;
  if (b[orderBy] > a[orderBy]) return 1;
  return 0;
}

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

  const createSortHandler = (property: keyof T, _: React.MouseEvent<unknown>) => {
    if (orderBy !== property) {
      // 새로운 컬럼 클릭: 오름차순 시작
      setOrder('asc');
      setOrderBy(property);
    } else {
      // 같은 컬럼 클릭: asc -> desc -> null(기본) 순환
      if (order === 'asc') {
        setOrder('desc');
      } else if (order === 'desc') {
        setOrder(null);
        setOrderBy(null);
      } else {
        setOrder('asc');
        setOrderBy(property);
      }
    }
  };

  const visibleRows = useMemo(() => {
      if(!order || !orderBy) 
        return [...rows].slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
      else
        return [...rows]
                  .sort(getComparator(order, orderBy))
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
   },[ page, rowsPerPage, order, orderBy]);

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
                        sortDirection={orderBy === column.id && order ? order : false}
                    >
                      {!(column.sortDirection === false) ? 
                        <TableSortLabel
                          active={orderBy === column.id}
                          direction={orderBy === column.id && order ? order : 'asc'}
                          onClick={(e) => createSortHandler(column.id as keyof T, e)}
                          sx={{ minWidth: column.minWidth }}
                        >
                          {column.label}
                          {orderBy === column.id ? (
                            <Box component="span" sx={visuallyHidden}>
                              {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                            </Box>
                          ) : null}
                        </TableSortLabel>
                      : column.label}
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