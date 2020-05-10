import * as React from "react";
import Loading from "./Loading";

export interface Column<T> {
  id: string;
  header: string | JSX.Element;
  cell: (data: T) => string | JSX.Element;
}

interface Props<T> {
  data: T[];
  columns: Column<T>[];
  loading?: boolean;
  error?: string;
}

function Table<T extends { id: string }>({ data, columns, loading, error }: Props<T>): React.ReactElement<T> {
  
  return (
    <table className="table">
      <thead>
        <tr>
          {columns.map(column => <th scope="col" key={column.id}>{column.header}</th>)}
        </tr>
      </thead>
      <tbody>
        {loading && <tr><td><Loading /></td></tr>}
        {error && <tr className="text-danger"><td>{error}</td></tr>}

        {!error && data.length ? data.map(item => (
          <tr key={item.id}>
            {columns.map(column => <td key={column.id}>{column.cell(item)}</td>)}
          </tr>
        )) : <tr><td>No items</td></tr>}
      </tbody>
    </table>
  );
};

export default Table;
