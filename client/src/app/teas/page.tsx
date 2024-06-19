import Image from 'next/image';
import TeaCardItem from '@/app/ui/teacard/TeaCard';
import { TeaCard } from '@/app/lib/type';

export default async function Home() {
  async function getTeaCards() {
    const response = await fetch('http://localhost:4000/teas');
    const { data } = await response.json();
    return data;
  }
  const teaCards = await getTeaCards();

  return (
    <main className="flex-column">
      <h1>Чайная вечеринка</h1>
      {teaCards.map((teaCard: TeaCard) => (
        <TeaCardItem key={teaCard.id} teaCard={teaCard} />
      ))}
    </main>
  );
}
