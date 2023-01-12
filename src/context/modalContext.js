import { createContext, useEffect, useState } from "react";

export const ModalContext = createContext();

export const ModalContextProvider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <ModalContext.Provider
      value={{ showModal, isModalOpen, handleOk, handleCancel }}
    >
      {children}
    </ModalContext.Provider>
  );
};
