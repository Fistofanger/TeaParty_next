import TeaCardItem from '@/components/ui/teacard/TeaCard';
import { TeaCard } from '@/lib/type';

export default async function TeaPages() {
  async function getTeaCards() {
    const response = await fetch('http://localhost:4000/teas', {
      next: { revalidate: 600 },
    });
    const { data } = await response.json();
    return data;
  }
  const teaCards = await getTeaCards();

  return (
    <main className="flex-column">
      <h1>Чайная вечеринка</h1>
      <div className="grid">
        {teaCards.map((teaCard: TeaCard) => (
          <TeaCardItem key={teaCard.id} teaCard={teaCard} />
        ))}
      </div>
    </main>
  );
}
