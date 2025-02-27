import { AgGridReact, AgGridReactProps } from "ag-grid-react";
import ImageCellRenderer from "./ImageCellRenderer";

interface Props {
  rowData: { url: string; name: string }[];
  quickFilterText?: string;
}

function PokemonGrid({ rowData, quickFilterText }: Props) {
  const gridOptions: AgGridReactProps<{ url: string; name: string }> = {
    columnDefs: [
      {
        field: "url",
        cellRenderer: (params: { data: { name: string } }) => (
          <ImageCellRenderer
            url={`https://img.pokemondb.net/artwork/${params.data.name}.jpg`}
          />
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
    quickFilterText,
  };

  return (
    <>
      <AgGridReact {...gridOptions} />
    </>
  );
}

export default PokemonGrid;
