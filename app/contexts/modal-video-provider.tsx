import { createContext, useContext, useState } from 'react';

type ModalVideoContextType = {
  videoUrl: string;
  isOpen: boolean;
  openModal: (url: string) => void;
  closeModal: () => void;
};

const ModalVideoContext = createContext({} as ModalVideoContextType);

export function ModalVideoProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [videoUrl, setVideoUrl] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const openModal = (url: string) => {
    setVideoUrl(url);
    setIsOpen(true);
  };

  const closeModal = () => {
    setVideoUrl('');
    setIsOpen(false);
  };

  return (
    <ModalVideoContext.Provider
      value={{ videoUrl, isOpen, openModal, closeModal }}>
      {children}
    </ModalVideoContext.Provider>
  );
}
export function useModalVideo() {
  const context = useContext(ModalVideoContext);
  if (!context) {
    throw new Error('useModalVideo must be used within a ModalVideoProvider');
  }
  return context;
}
