import { Box, Typography } from '@mui/material';
import Modal from '../../../components/modal/index.jsx';
import FileUpload from '../../../components/file-upload/index.jsx';

export const FileUploadModal = ({ open, onClose }) => {
  return (
    <Modal
      open={open}
      onClose={onClose}
      closeButton={true}
      width={832}
    >
      <Box display="flex" flexDirection="column" gap={'32px'}>
        <Typography fontSize={18} fontWeight={700} color="#3370FF">Upload Search Terms File</Typography>
        <FileUpload
          sampleFileUrl="#"
          sampleFileText="Download Sample File"
          dropText="Drop your file here to upload"
          browseText="Browse"
          uploadedText="Uploaded Files"
          onFileUpload={(files) => console.log(files)}
          onFileDelete={(files) => console.log(files)}
          multiple={true}
          accept=".csv,.xlsx,.svg"
        />
      </Box>
    </Modal>
  );
};
