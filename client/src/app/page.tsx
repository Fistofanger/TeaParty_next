import Image from 'next/image';

export default function HomePage() {
  return (
    <main className="flex-column">
      <h1>Чаепитие на Эльбрусе</h1>

      <Image
        src="/img/elbrus.jpeg"
        alt="Эмблема тут"
        className="emblem"
        width={'800'}
        height={'400'}
      />
    </main>
  );
}
