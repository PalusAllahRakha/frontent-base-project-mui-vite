import { createContext, useState } from 'react';

export const FileUploadContext = createContext();

const FileUploadProvider = ({ children }) => {
  const [openModal, setOpenModal] = useState(false);

  const openModalHandler = () => {
    setOpenModal(true);
  };

  const closeModalHandler = () => {
    setOpenModal(false);
  };

  return (
    <FileUploadContext.Provider value={{ openModal, openModalHandler, closeModalHandler }}>
      {children}
    </FileUploadContext.Provider>
  );
};

export default FileUploadProvider;
