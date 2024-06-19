const React = require('react')
const Layout = require('./Layout')

function AuthorizationPage({ title }) {
    return (
        <Layout title={title}>
            <h2>Welcome back!</h2>
            <form className="Authorization">
                <input
                    type="email"
                    name="email"
                    placeholder="email"
                    required
                    minlength="3"
                />
                <input
                    type="password"
                    name="password"
                    placeholder="password"
                    required
                    minlength="3"
                />
                <button type="submit">Submit</button>
            </form>
        </Layout>
    )
}

module.exports = AuthorizationPage
