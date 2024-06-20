import TeaCardItem from '@/components/ui/teacard/TeaCard';
import { getTeaCards } from '@/lib/api';
import { TeaCard } from '@/lib/type';

export default async function TeaPages() {
  
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
