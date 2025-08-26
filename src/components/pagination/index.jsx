// import React from "react";
// import { Box, Typography } from "@mui/material";
// import { IoMdArrowDropright, IoMdArrowDropleft } from "react-icons/io";
// import CustomSelect from "../select";

// const Pagination = ({
//   currentPage,
//   totalItems,
//   itemsPerPage,
//   itemsPerPageOptions = [10, 20, 50, 100],
//   onPageChange,
//   onItemsPerPageChange,
// }) => {
//   const totalPages = Math.ceil(totalItems / itemsPerPage);
//   const startItem = (currentPage - 1) * itemsPerPage + 1;
//   const endItem = Math.min(currentPage * itemsPerPage, totalItems);

//   const handlePrev = () => {
//     if (currentPage > 1) onPageChange(currentPage - 1);
//   };

//   const handleNext = () => {
//     if (currentPage < totalPages) onPageChange(currentPage + 1);
//   };

//   return (
//     <Box
//       display="flex"
//       alignItems="center"
//       justifyContent="space-between"
//       gap={1}
//     >
//       <Box display="flex" alignItems="center" gap={1}>
//         <Box display="flex" alignItems="center" gap={0}>
//           <Typography
//             fontSize={12}
//             lineHeight="16px"
//             fontWeight={400}
//             color="#535E63"
//           >
//             Items per page:
//           </Typography>
//           <CustomSelect
//             options={itemsPerPageOptions.map((num) => ({
//               value: num,
//               label: num.toString(),
//             }))}
//             placeholder={itemsPerPage.toString()}
//             value={{ value: itemsPerPage, label: itemsPerPage.toString() }}
//             borderLess={true}
//             isClearable={false}
//             isMulti={false}
//             onChange={(selected) => onItemsPerPageChange(selected.value)}
//           />
//         </Box>
//         <Box width="1px" height="16px" bgcolor="#E7E7E7" />
//         <Typography
//           fontSize={12}
//           lineHeight="16px"
//           fontWeight={400}
//           color="#7E8A90"
//         >
//           {startItem} – {endItem} of {totalItems} items
//         </Typography>
//       </Box>
//       <Box display="flex" alignItems="center" gap={1}>
//         <Box width="1px" height="16px" bgcolor="#E7E7E7" />
//         <CustomSelect
//           options={Array.from({ length: totalPages }, (_, i) => ({
//             value: i + 1,
//             label: (i + 1).toString(),
//           }))}
//           placeholder={currentPage.toString()}
//           value={{ value: currentPage, label: currentPage.toString() }}
//           borderLess={true}
//           isClearable={false}
//           isMulti={false}
//           onChange={(selected) => onPageChange(selected.value)}
//         />
//         <Typography
//           fontSize={12}
//           lineHeight="16px"
//           fontWeight={400}
//           color="#7E8A90"
//         >
//           of {totalPages} pages
//         </Typography>
//         <Box width="1px" height="16px" bgcolor="#E7E7E7" />
//         <IoMdArrowDropleft
//           onClick={handlePrev}
//           style={{
//             cursor: currentPage === 1 ? "not-allowed" : "pointer",
//             fontSize: "20px",
//             opacity: currentPage === 1 ? 0.4 : 1,
//           }}
//         />
//         <Box width="1px" height="16px" bgcolor="#E7E7E7" />
//         <IoMdArrowDropright
//           onClick={handleNext}
//           style={{
//             cursor: currentPage === totalPages ? "not-allowed" : "pointer",
//             fontSize: "20px",
//             opacity: currentPage === totalPages ? 0.4 : 1,
//           }}
//         />
//       </Box>
//     </Box>
//   );
// };

// export default Pagination;
import { Box, Typography, Select, MenuItem } from '@mui/material';
import React from 'react';
import { IoMdArrowDropright, IoMdArrowDropleft } from 'react-icons/io';

import { borderlessSelectSx } from '../../pages/utils/constant';

const Pagination = ({
  currentPage,
  totalItems,
  itemsPerPage,
  itemsPerPageOptions = [10, 20, 50, 100],
  onPageChange,
  onItemsPerPageChange
}) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startItem = (currentPage - 1) * itemsPerPage + 1;
  const endItem = Math.min(currentPage * itemsPerPage, totalItems);

  const handlePrev = () => {
    if (currentPage > 1) onPageChange(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) onPageChange(currentPage + 1);
  };

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      gap={1}
    >
      <Box display="flex" alignItems="center" gap={1}>
        <Box display="flex" alignItems="center" gap={0.5}>
          <Typography
            fontSize={12}
            lineHeight="16px"
            fontWeight={400}
            color="#535E63"
          >
            Items per page:
          </Typography>
          <Select
            value={itemsPerPage}
            onChange={(e) => onItemsPerPageChange(Number(e.target.value))}
            size="small"
            sx={borderlessSelectSx}
          >
            {itemsPerPageOptions.map((num) => (
              <MenuItem sx={{ fontSize: 12 }} key={num} value={num}>
                {num}
              </MenuItem>
            ))}
          </Select>
        </Box>
        <Box width="1px" height="16px" bgcolor="#E7E7E7" />
        <Typography
          fontSize={12}
          lineHeight="16px"
          fontWeight={400}
          color="#7E8A90"
        >
          {startItem} – {endItem} of {totalItems} items
        </Typography>
      </Box>
      <Box display="flex" alignItems="center" gap={1}>
        <Box width="1px" height="16px" bgcolor="#E7E7E7" />
        <Select
          value={currentPage}
          onChange={(e) => onPageChange(Number(e.target.value))}
          size="small"
          sx={borderlessSelectSx}
        >
          {Array.from({ length: totalPages }, (_, i) => (
            <MenuItem sx={{ fontSize: 12 }} key={i + 1} value={i + 1}>
              {i + 1}
            </MenuItem>
          ))}
        </Select>
        <Typography
          fontSize={12}
          lineHeight="16px"
          fontWeight={400}
          color="#7E8A90"
        >
          of {totalPages} pages
        </Typography>
        <Box width="1px" height="16px" bgcolor="#E7E7E7" />
        <IoMdArrowDropleft
          onClick={handlePrev}
          style={{
            cursor: currentPage === 1 ? 'not-allowed' : 'pointer',
            fontSize: '20px',
            opacity: currentPage === 1 ? 0.4 : 1
          }}
        />
        <Box width="1px" height="16px" bgcolor="#E7E7E7" />
        <IoMdArrowDropright
          onClick={handleNext}
          style={{
            cursor: currentPage === totalPages ? 'not-allowed' : 'pointer',
            fontSize: '20px',
            opacity: currentPage === totalPages ? 0.4 : 1
          }}
        />
      </Box>
    </Box>
  );
};

export default Pagination;
