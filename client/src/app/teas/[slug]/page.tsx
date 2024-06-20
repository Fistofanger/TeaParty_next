import OneCommentForm from '@/components/ui/comment/OneCommentCard';
import styles from './SingleTeaPage.module.css';

import { getOneTeaCards } from '@/lib/api';
import { Comment } from '@/lib/type';
import Image from 'next/image';

export default async function SingleTeaPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  const teaData = await getOneTeaCards(+slug);
  return (
    <div className={styles.container}>
      <div className={styles.TeaCardContainer}>
        <h2>{teaData.teaName}</h2>
        <Image
          src={teaData.teaImg}
          alt="teaImage"
          width={220}
          height={150}
          priority
          className={styles.ImgContainer}
        />
        <p>Сорт чая: {teaData.teaType}</p>
        <p>Регион: {teaData.teaRegion}</p>
        <p>Описание: {teaData.teaDescription}</p>

        <button type="button" className="btn-back">
          <a href="/teas">назад</a>
        </button>
      </div>
      {/* {user ? (
        <CommentAddForm teaData={teaData} />
      ) : (
        <p>
          ☝️ Для добавления комментариев необходимо зарегистрироваться или
          авторизироваться
        </p>
      )} */}
      <div className="Comments flex-column">
        {teaData.Comments.map((comment: Comment) => (
          <OneCommentForm comment={comment} />
        ))}
      </div>
    </div>
  );
}
