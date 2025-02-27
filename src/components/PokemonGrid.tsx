import { AgGridReact } from "ag-grid-react";
import ImageCellRenderer from "./ImageCellRenderer";

interface Props {
  rowData: { image: string; name: string }[];
}

function PokemonGrid({ rowData }: Props) {
  const gridOptions = {
    columnDefs: [
      {
        field: "image",
        cellRenderer: (params: any) => (
          <ImageCellRenderer url={params.data.image} />
        ),
        flex: 1,
      },
      { field: "name", flex: 1 },
    ],
    defaultColDef: {
      filter: true,
      resizable: false,
      suppressHeaderMenuButton: true,
    },
    pagination: true,
    paginationPageSize: 5,
    paginationPageSizeSelector: [5, 10, 20],
    rowData,
    rowHeight: 200,
    domLayout: "autoHeight",
  };

  return (
    <>
      <AgGridReact {...gridOptions} />
    </>
  );
}

export default PokemonGrid;
