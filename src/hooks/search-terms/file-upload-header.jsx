import { useState } from 'react';
import { createContext } from 'react';

const fileUploadProvider = ({ children }) => {
  const fileUploadContext = createContext();
  const [file, setFile] = useState(null);

  return (
    <fileUploadContext.Provider value={{ file, setFile }}>
      {children}
    </fileUploadContext.Provider>
  );
};
export default fileUploadProvider;
