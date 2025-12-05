import { useModalVideo } from '~/contexts/modal-video-provider';

export default function ModalVideoSection() {
  const { isOpen, videoUrl, closeModal } = useModalVideo();

  if (!isOpen) return null;

  return (
    <div
      id='modal-overlay'
      className='modal-overlay'
      onClick={(e: React.MouseEvent<HTMLDivElement>) => {
        const target = e.target as HTMLElement;
        if (target.id === 'modal-overlay') closeModal();
      }}>
      <span className='my-close' onClick={closeModal}>
        <i className='fa-solid fa-xmark'></i>
      </span>
      <div className='my-modal'>
        <iframe
          id='my-video-frame'
          src={videoUrl}
          allowFullScreen
          title='Video'></iframe>
      </div>
    </div>
  );
}
