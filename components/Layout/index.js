import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';
import NProgress from 'nprogress';
import Router from 'next/router';

Router.events.on('routeChangeStart', url => {
  console.log(`Loading: ${url}`)
  NProgress.start()
})
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

export default ({ children, title = "default title" }) => (
  <div id="root">
    <Head>
      <title>{ title }</title>
      <link rel="stylesheet" href="/static/nprogress.css"/>
    </Head>
    <Header />
    <main>{ children }</main>
    <Footer />
  </div>
);
