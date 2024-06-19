const React = require("react");
const Layout = require("./Layout");

function FormAddTea({title, teaData, user}) {
  return (
        <Layout title={title} user={user}>
    <form action="/teas" method="POST" className="FormUpdateTea" data-teaId={teaData.id}>
      <input type="text" name="teaName" value={teaData.teaName}/>
      <input type="file" multiple name="teaImg"/>
      <input type="text" name="teaType" value={teaData.teaType}/>
      <input type="text" name="teaLocation" value={teaData.teaLocation}/>
      <input type="text" name="teaRegion" value={teaData.teaRegion}/>
      <input type="text" name="teaDescription" value={teaData.teaDescription}/>
      <button type="submit">Обновить данные</button>
    </form>
    </Layout>
  );
}

module.exports = FormAddTea;
