import { AgGridReact } from 'ag-grid-react';
import React, { useRef } from 'react';

import 'ag-grid-enterprise';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-balham.css';

import { BasicTableStyleWrapper } from './style.jsx';

const CollapseAbleTable = ({
  loading,
  getRowHeight,
  defaultColDef,
  columnDefinitions,
  onSortChanged,
  rowData,
  onRowClicked,
  pagination,
  rowHeight,
  onSelectionChanged,
  rowSelection,
  masterDetail,
  detailCellRenderer,
  getRowNodeId,
  headerHeight,
  detailRowHeight,
  className,
  gridOptions,
  height,
  ...props
}) => {
  const gridRef = useRef(null);

  return (
    <BasicTableStyleWrapper className={`ag-theme-balham ${className}`}
      style={{ height: `calc(100vh - ${height}px)` }}>
      <AgGridReact
        {...props}
        ref={gridRef}
        animateRows={true}
        columnDefs={columnDefinitions}
        defaultColDef={defaultColDef}
        deltaRowDataMode={false}
        detailCellRenderer={detailCellRenderer}
        detailRowAutoHeight={true}
        detailRowHeight={detailRowHeight}
        enableCellTextSelection={true}
        enableRangeSelection={true}
        getRowHeight={getRowHeight}
        getRowNodeId={getRowNodeId ? getRowNodeId : ({ id }) => id}
        gridOptions={gridOptions}
        headerHeight={headerHeight || 38}
        loading={loading}
        masterDetail={masterDetail}
        pagination={pagination}
        paginationPageSize={50}
        reactNext={true}
        rowData={rowData}
        rowHeight={rowHeight}
        rowSelection={rowSelection}
        suppressRowClickSelection={true}
        suppressScrollOnNewData={true}
        onRowClicked={onRowClicked}
        onSelectionChanged={onSelectionChanged}
        onSortChanged={onSortChanged}
      />
    </BasicTableStyleWrapper>
  );
};

export default CollapseAbleTable;
