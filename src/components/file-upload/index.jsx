'use client';
import React, { useState } from 'react';
import {
  Box,
  Button,
  Typography,
  IconButton,
  Paper,
  Link,
} from '@mui/material';
import { FiFile, FiTrash2 } from 'react-icons/fi';
import uploadIcon from '../../assets/icons/upload-icon.svg';

const FileUpload = ({
  sampleFileUrl = '#',
  sampleFileText = 'Download Sample File',
  dropText = 'Drop your file here to upload',
  browseText = 'Browse',
  uploadedText = 'Uploaded Files',
  onFileUpload,
  onFileDelete,
  multiple = true,
  accept = '',
}) => {
  const [files, setFiles] = useState([]);

  const handleFiles = (newFiles) => {
    let filteredFiles = newFiles;
    if (accept) {
      const acceptTypes = accept.split(',').map((t) => t.trim());
      filteredFiles = newFiles.filter((file) =>
        acceptTypes.some((type) => {
          if (type.startsWith('.')) return file.name.endsWith(type);
          if (type.includes('/*')) {
            const baseType = type.split('/')[0];
            return file.type.startsWith(baseType + '/');
          }
          return file.type === type;
        })
      );
    }

    let fileList = multiple ? [...files, ...filteredFiles] : [...filteredFiles];
    setFiles(fileList);
    if (onFileUpload) onFileUpload(fileList);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    handleFiles(Array.from(e.dataTransfer.files));
  };
  const handleDelete = (index) => {
    const updatedFiles = files.filter((_, i) => i !== index);
    setFiles(updatedFiles);
    if (onFileDelete) onFileDelete(updatedFiles);
  };

  return (
    <Paper
      variant="outlined"
      sx={{
        p: '36px 64px',
        borderRadius: 2,
        borderColor: '#e0e0e0',
      }}
    >
      <Box
        onDrop={handleDrop}
        onDragOver={(e) => e.preventDefault()}
        sx={{
          border: '2px dashed #e0e0e0',
          borderRadius: 2,
          p: '24px',
          textAlign: 'center',
          bgcolor: '#f9fbfc',
          cursor: 'pointer',
        }}
      >
        <img src={uploadIcon} alt="upload-icon" />
        <Typography fontSize={14} fontWeight={400} color='#7E8A90' variant="body1" sx={{ mt: '16px', mb: '8px' }}>
          {dropText}
        </Typography>
        <Link sx={{ fontSize: 12, fontWeight: 400, color: '#3370FF', textDecoration: 'underline' }} href={sampleFileUrl} underline="hover" color="primary">
          {sampleFileText}
        </Link>
        <Box mt={2}>
          <Button
            variant="outlined"
            component="label"
            sx={{
              textTransform: 'none',
              borderColor: '#1976d2',
              color: '#1976d2',
              maxWidth: 344,
              width: '100%',
            }}
          >
            {browseText}
            <input
              type="file"
              hidden
              multiple={multiple}
              accept={accept}
              onChange={(e) => handleFiles(Array.from(e.target.files))}
            />
          </Button>
        </Box>
      </Box>


      <Box mt={2}>
        <Typography variant="subtitle1" fontWeight="500">
          {uploadedText}
        </Typography>
        {files.map((file, index) => (
          <Box
            key={index}
            sx={{
              display: 'flex',
              alignItems: 'center',
              mt: 1,
              justifyContent: 'space-between',
            }}
          >
            <Box display="flex" alignItems="center">
              <FiFile size={18} color="#1976d2" style={{ marginRight: 6 }} />
              <Typography variant="body2">{file.name}</Typography>
            </Box>
            <IconButton
              color="error"
              size="small"
              onClick={() => handleDelete(index)}
            >
              <FiTrash2 size={18} />
            </IconButton>
          </Box>
        ))}
        {files.length === 0 && (
          <Typography textAlign="center" variant="body2">No files uploaded</Typography>
        )}
      </Box>
    </Paper>
  );
};

export default FileUpload;
