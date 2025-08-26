import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Close from '../../assets/icons/close.svg';
const defaultStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: '#FFFFFF',
  border: '1px solid transparent',
  borderRadius: '10px',
};
export default function BasicModal({
  open,
  onClose,
  title,
  description,
  children,
  modalStyle,
  titleVariant,
  titleId,
  descriptionId,
  closeButton,
  width,
  ...modalProps
}) {
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby={titleId}
      aria-describedby={descriptionId}
      {...modalProps}
    >
      <Box sx={{ ...defaultStyle, ...modalStyle, width: width || 400 }}>
        <Box p="36px" position="relative" width="100%" height="100%">
          {closeButton ? (
            <Box component="img" position="absolute" top={16} right={16} onClick={onClose} sx={{ cursor: 'pointer' }} src={Close} alt="close" />
          ) : null}
          {title ? (
            <Typography id={titleId} variant={titleVariant} component="h2">
              {title}
            </Typography>
          ) : null}
          {description ? (
            <Typography id={descriptionId} sx={{ mt: 2 }}>
              {description}
            </Typography>
          ) : null}
          {children}
        </Box>
      </Box>
    </Modal>
  );
}
