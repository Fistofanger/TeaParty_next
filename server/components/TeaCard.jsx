const React = require('react');

function TeaCard({ teaData, user }) {
  return (
    <div className="TeaCard flex-column" data-teaid={teaData.id}>
      <h2>{teaData.teaName}</h2>

      <img src={teaData.teaImg} alt="teaImage" />
      <p>Сорт чая: {teaData.teaType}</p>
      <p>Регион: {teaData.teaRegion}</p>
      <div className="btns-tea flex">
        {user && user.id === teaData.userId && (
          <button type="button" className="btn-del">
            Delete card
          </button>
        )}
        {user && user.id === teaData.userId && (
          <div>
            <button type="button" className="btn-edit">
              <a href={`/teas/update/${teaData.id}`}>Edit card</a>
            </button>
          </div>
        )}
      </div>

      <div className="linksTeaCard flex">
        {/* {user.Favorites.find(({ teaId }) => teaId === teaData.id) ? (
          <p>❤️️</p>
        ) : (
          <p>♡</p>
        )} */}
        <a href={`/teas/${teaData.id}`}>Подробнее</a>
        <a href={`/teas/${teaData.id}`}>
                    Комментарии({teaData.Comments.length})
                </a>
      </div>
    </div>
  );
}

module.exports = TeaCard;
