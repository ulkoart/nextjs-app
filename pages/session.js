import Layout from '../components/Layout';
import Session from '../components/Session';
import fetch from 'isomorphic-unfetch';

const SessionPage =  ({session, rating}) => (
  <Layout title="Session">
    <Session {...session} rating={rating}/>
  </Layout>
);

SessionPage.getInitialProps = async ({ query }) => {
  const res = await fetch(`http://localhost:3000/schedule/${query.slug}`);
  const schedule = await res.json();
  return { session: schedule, rating: query.rating }
}

export default SessionPage
