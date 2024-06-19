const React = require('react');
const Layout = require('./Layout');

const CommentAddForm = require('./CommentAddForm');
const OneCommentForm = require('./OneCommentForm');

function TeaPage({ title, user, teaData }) {
  return (
    <Layout title={title} user={user}>
      <div className="TeaPageConteiner flex-column" data-teaid={teaData.id}>
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
        {user ? (
          <CommentAddForm teaData={teaData} />
        ) : (
          <p>
            ☝️ Для добавления комментариев необходимо зарегистрироваться или
            авторизироваться
          </p>
        )}
        <div className="Comments flex-column">
          {teaData.Comments.map((comment) => (
            <OneCommentForm comment={comment} teaData={teaData} />
          ))}
        </div>
      </div>
    </Layout>
  );
}

module.exports = TeaPage;
