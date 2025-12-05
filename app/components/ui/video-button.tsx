import { useModalVideo } from '~/contexts/modal-video-provider';

export default function VideoButton({ videoUrl }: { videoUrl: string }) {
  const { openModal } = useModalVideo();

  return (
    <button
      title='Play Video'
      className='request-loader'
      onClick={() => openModal(videoUrl)}>
      <span className={'visually-hidden'}>video button</span>
      <i className='fa-solid fa-play'></i>
    </button>
  );
}
