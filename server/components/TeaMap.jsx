const React = require("react");

const Layout = require("./Layout");

function TeaMap({ title, user }) {
  return (
    <Layout title={title} user={user}>
      <div id="map" style={{ width: "1400px", height: "620px"}}></div>
    </Layout>
  );
}

module.exports = TeaMap;
