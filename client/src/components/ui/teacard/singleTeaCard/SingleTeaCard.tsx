'use client';
import { useParams } from 'next/navigation';

export default async function SingleTeaCard({ slug }: { slug: number }) {
  return (
    <div className="TeaPageConteiner flex-column">
      <div className="TeaPageCard flex-column">
        <h2>{teaData.teaName}</h2>
        <img src={teaData.teaImg} alt="teaImage" />
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
      {/* <div className="Comments flex-column">
        {teaData.Comments.map((comment) => (
          <OneCommentForm comment={comment} teaData={teaData} />
        ))}
      </div> */}
    </div>
  );
}
