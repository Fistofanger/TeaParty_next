import { TeaCard } from '@/lib/type';
import Image from 'next/image';

// const React = require('react');
import styles from '@/components/ui/teacard/TeaCard.module.css';

export default function TeaCardItem({ teaCard }: { teaCard: TeaCard }) {
  return (
    <div className={`${styles.Container} flex-column`} data-teaid={teaCard.id}>
      <h2>{teaCard.teaName}</h2>
      <div className={styles.ImgContainer}>
        <Image src={teaCard.teaImg} alt="teaImage" fill />
      </div>
      <p>Сорт чая: {teaCard.teaType}</p>
      <p>Регион: {teaCard.teaRegion}</p>
      <div className="btns-tea flex">
        {/* {user && user.id === teaData.userId && ( */}
        <button type="button" className="btn-del">
          Delete card
        </button>
        {/* )} */}
        {/* {user && user.id === teaData.userId && ( */}
        <div>
          <button type="button" className="btn-edit">
            <a href={`/teas/update/${teaCard.id}`}>Edit card</a>
          </button>
        </div>
        {/* )} */}
      </div>

      <div className="linksTeaCard flex">
        {/* {user.Favorites.find(({ teaId }) => teaId === teaData.id) ? (
          <p>❤️️</p>
        ) : (
          <p>♡</p>
        )} */}
        <a href={`/teas/${teaCard.id}`}>Подробнее</a>
        <a href={`/teas/${teaCard.id}`}>
          Комментарии({teaCard.Comments.length})
        </a>
      </div>
    </div>
  );
}
