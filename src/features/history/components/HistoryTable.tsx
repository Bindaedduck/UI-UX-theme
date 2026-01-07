import { Chip } from "@mui/material";
import type { Column } from "../../../components/DataTable";
import type { HistoryTableRow } from "../types";
import DataTable from "../../../components/DataTable";
import { tableItem } from "../../../tableItem";


const HistoryTableColumns: Column<HistoryTableRow>[] = [
    {
        id: 'req_id',
        label: 'REQ ID'
    },
    {
        id: 'biz_cls',
        label: 'BIZ CLS',
        align: 'center'
    },
    {
        id: 'idp_type',
        label: 'IDP TYPE',
        align: 'center',
        minWidth: 100,
        format: (value: string) => <Chip label={value} />
    },
    {
        id: 'file_name',
        label: 'FILE NAME',
        sortDirection: false
    },
    {
        id: 'file_path',
        label: 'FILE PATH',
        sortDirection: false
    },
    {
        id: 'page',
        label: 'PAGE',
        align: 'center',
        sortDirection: false
    },
    {
        id: 'status',
        label: 'STATUS',
        align: 'center',
        format: (value: string) => {
            const color = value === 'success' ? 'success' : value === 'pending' ? 'default' : 'error';
            return <Chip label={value} color={color} variant='outlined'/>;
        }
    },
    {
        id: 'start_date_time',
        label: 'START DATE TIME',
        align: 'center',
        minWidth: 150
    },
    {
        id: 'end_date_time',
        label: 'END DATE TIME',
        align: 'center',
        minWidth: 150
    }    
];

export default function HistoryTable() {
    return(
        <DataTable<HistoryTableRow>
            columns={HistoryTableColumns}
            rows={tableItem}
            rowKey='req_id'>
        </DataTable>
    )
}