import { Box } from '@mui/material';
import React, { useMemo, useRef, useState, useCallback } from 'react';

import Pagination from '../../components/pagination/index.jsx';
import CollapseAbleTable from '../../components/table/index.jsx';
import { WorksheetRowData, WorksheetColumnDefinitions, defaultColDef as defColDef, AMSNBAPerSizeColumnDefs, AMSNNCAColumnDefs, AMSNBAPerSizeRowData, AMSNNCARowData } from '../utils/constant/index.jsx';
import { useSelector } from 'react-redux';

const STORAGE_KEY = 'worksheet_pin_states';

const WorkSheet = () => {
  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [gridApi, setGridApi] = useState(null);
  const [columnApi, setColumnApi] = useState(null);

  const gridRef = useRef(null);
  const defaultColDef = useMemo(() => defColDef, []);

  const onColumnPinned = useCallback(() => {
    if (!columnApi) return;
    const state = columnApi.getColumnState();
    const pinState = {};
    state.forEach((col) => {
      if (col.pinned) {
        pinState[col.colId] = col.pinned;
      }
    });
    localStorage.setItem(STORAGE_KEY, JSON.stringify(pinState));
  }, [columnApi]);

  const onGridReady = useCallback((params) => {
    setGridApi(params.api);
    setColumnApi(params.columnApi);

    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const pinState = JSON.parse(saved);
      const colState = params.columnApi.getColumnState().map((col) => ({
        ...col,
        pinned: pinState[col.colId] || null
      }));
      params.columnApi.applyColumnState({ state: colState });
    }
  }, []);

  const selectedOption = useSelector((state) => state.grid.selectedOption);

  const columnDefs = useMemo(() => {
    if (selectedOption === 'AMSNBAPerSize') {
      return AMSNBAPerSizeColumnDefs;
    } else if (selectedOption === 'AMSNNCA') {
      return AMSNNCAColumnDefs;
    } else {
      return WorksheetColumnDefinitions;
    }
  }, [selectedOption]);

  const rowData = useMemo(() => {
    if (selectedOption === 'AMSNBAPerSize') {
      return AMSNBAPerSizeRowData;
    } else if (selectedOption === 'AMSNNCA') {
      return AMSNNCARowData;
    } else {
      return WorksheetRowData;
    }
  }, [selectedOption]);

  return (
    <Box display="flex" flexDirection="column" gap={2}>
      <CollapseAbleTable
        loading={false}
        height={150}
        ref={gridRef}
        onGridReady={onGridReady}
        columnDefinitions={columnDefs}
        defaultColDef={defaultColDef}
        rowData={rowData}
        rowSelection="single"
        rowHeight={32}
        pagination={false}
        paginationPageSize={10}
        suppressRowClickSelection={true}
        onColumnPinned={onColumnPinned}
      />
      <Pagination
        currentPage={page}
        totalItems={1228}
        itemsPerPage={rowsPerPage}
        itemsPerPageOptions={[10, 20, 50, 100]}
        onPageChange={setPage}
        onItemsPerPageChange={(num) => {
          setRowsPerPage(num);
          setPage(1);
        }}
      />
    </Box>
  );
};

export default WorkSheet;
