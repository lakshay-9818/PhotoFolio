import { createContext, useState } from "react";
export const AlbumContext = createContext();
export const AlbumProvider = ({ children }) => {
  const [albumId, setAlbumId] = useState(null);
  const handleIdChange = (id) => {
    setAlbumId(id);
  };
  return (
    <AlbumContext.Provider value={{ albumId, handleIdChange }}>
      {children}
    </AlbumContext.Provider>
  );
};
