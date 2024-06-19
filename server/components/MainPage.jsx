const React = require('react')
const Layout = require('./Layout')

function MainPage({ title, user }) {
    return (
        <Layout title={title} user={user}>
            <h1>Чаепитие на Эльбрусе</h1>
            <img src="/img/elbrus.jpeg" alt="Эмблема тут" className="emblem" />
        </Layout>
    )
}

module.exports = MainPage
