import type { FilterBox, SearchBox } from "../../../components/TableControls";
import TableControls from "../../../components/TableControls";

const HistoryTableContorlsSearchBoxes: SearchBox[] = [
    {
        id: "reqId",
        placeholder: "REQ ID",
        size: "small",
        minWidth: 280

    },
    {
        id: "fileName",
        placeholder: "FILE NAME",
        size: "small",
        minWidth: 280

    }
]

const HistoryTableContorlsFilterBoxes: FilterBox[] = [
    {
        labelId: "idpTypeLabelId",
        label: "IDP TYPE",
        name: "idpType",
        size: "small",
        minWidth: 140,
        menuBoxes: [
            { value: "ur" },
            { value: "br" },
            { value: "lb" },
            { value: "da" },
            { value: "jv" },
        ]
    },
    {
        labelId: "statusLabelId",
        label: "STATUS",
        name: "status",
        size: "small",
        minWidth: 140,
        menuBoxes: [
            { value: "success" },
            { value: "pending" },
            { value: "error" }
        ]
    }
]

export default function HistoryTableContorls() {
    return(
        <TableControls
            searchBoxes={HistoryTableContorlsSearchBoxes}
            filterBoxes={HistoryTableContorlsFilterBoxes}
        >
        </TableControls>
    )
}