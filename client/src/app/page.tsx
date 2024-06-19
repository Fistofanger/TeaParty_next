import Image from 'next/image';
import TeaCardItem from '@/app/ui/teacard/TeaCard';
import { TeaCard } from './lib/type';

export default async function HomePage() {
  return (
    <main className="flex-column">
      <h1>Чаепитие на Эльбрусе</h1>

      <img src="/img/elbrus.jpeg" alt="Эмблема тут" className="emblem" />
    </main>
  );
}
