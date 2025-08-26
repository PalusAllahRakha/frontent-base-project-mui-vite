import styled from 'styled-components';

export const BasicTableStyleWrapper = styled.div`
    /* Base AG Grid theme override */
.ag-theme-balham {
  font-family: "Inter", sans-serif;
  font-size: 13px;
  border: none;
}
.ag-row-hover {
      background-color: red !important;
}
.ag-root-wrapper.ag-layout-normal {
    height: 100%;
    border-color: #ECEFF1;
}
.ag-header {
border-color: #ECEFF1;
}
.ag-row{
border-color: #ECEFF1;
border:none;
}
.ag-theme-balham .ag-header {
  background-color: #F8F8F8;
  border-bottom: 1px solid #ECEFF1;
  font-weight: 600;
}

.ag-theme-balham .ag-header-cell {
  border-right: 1px solid #ECEFF1;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #535E63;
  font-size: 12px;
  font-weight: 500;
}

.ag-theme-balham .ag-header-cell-label {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
}

/* Sort icons */
.ag-theme-balham .ag-header-icon {
  fill: #888;
}

/* Row styling */
.ag-theme-balham .ag-row {
  border-bottom: 1px solid #ECEFF1;
}

.ag-theme-balham .ag-row-hover {
  background-color: #f5f7fa !important;
}

/* Cell styling */
.ag-theme-balham .ag-cell {
  display: flex;
  align-items: center;
  padding: 0 8px;
  /* border-right: 1px solid #f0f0f0; */
}

/* Last column no border */
.ag-theme-balham .ag-cell:last-child {
  border-right: none;
  padding-right: 0px;
  padding-block: 0px;
  border-right: 1px solid #ECEFF1 !important;
  border: none;
  border-bottom: 1px solid #ECEFF1 !important;
}
.ag-cell{
  border-color: #ECEFF1;
  color: #535E63;
  font-size: 12px;
  font-weight: 400;
}
.ag-cell:not(:last-child) {
    padding-right: 0px;
    padding-block: 0px;
    border-right: 1px solid #ECEFF1 !important;
    border: none;
    border-bottom: 1px solid #ECEFF1 !important;
}

/* Pagination bar */
.ag-theme-balham .ag-paging-panel {
  border-top: 1px solid #ECEFF1;
  background-color: #fafafa;
  padding: 4px 8px;
  font-size: 12px;
}

/* Images inside table */
.ag-theme-balham .table-img {
  width: 28px;
  height: 28px;
  object-fit: cover;
  border-radius: 50%;
  margin: auto;
}

/* Link styling */
.ag-theme-balham a {
  color: #1a73e8;
  text-decoration: none;
}
.ag-theme-balham a:hover {
  text-decoration: underline;
}

`;
