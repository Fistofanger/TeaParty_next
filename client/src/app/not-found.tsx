import Image from 'next/image';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="NotFound flex-column">
      <h1>Page not found</h1>
      <Image
        src="/img/404img.jpg"
        alt="NotFound logo"
        className="NotFoundLogo"
        width={'800'}
        height={'400'}
      />
      <Link href={'/'}>На главную</Link>
    </div>
  );
}
