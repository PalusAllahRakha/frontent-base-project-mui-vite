import { Box } from '@mui/material';
import React, { useMemo, useState } from 'react';

import Pagination from '../../components/pagination/index.jsx';
import CollapseAbleTable from '../../components/table/index.jsx';
import { SearchTermsRowData as rowData, SearchTermsColumnDefinitions as colDef, defaultColDef as defColDef } from '../utils/constant/index.jsx';
import { FileUploadModal } from './file-Upload-modal/index.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal, } from '../../features/search-terms/file-upload.jsx';


const SearchTerms = () => {
  const SearchTermsRowData = useMemo(() => rowData, []);
  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const SearchTermsColumnDefinitions = useMemo(() => colDef, []);
  const defaultColDef = useMemo(() => defColDef, []);

  const dispatch = useDispatch();
  const closeModalHandler = () => {
    dispatch(closeModal());
  };
  const open = useSelector((state) => state.fileUpload.openModal);

  return (
    <Box display="flex" flexDirection="column" gap={2}>
      <CollapseAbleTable
        loading={false}
        height={150}
        columnDefinitions={SearchTermsColumnDefinitions}
        defaultColDef={defaultColDef}
        rowData={SearchTermsRowData}
        rowSelection="single"
        rowHeight={32}
        pagination={false}
        paginationPageSize={10}
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
      <FileUploadModal
        open={open}
        onClose={closeModalHandler}
      />
    </Box>
  );
};

export default SearchTerms;
