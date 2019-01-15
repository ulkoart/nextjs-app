import Layout from '../components/Layout';
import Session from '../components/Session';
import fetch from 'isomorphic-unfetch';

const API = process.env.API || process.env.NOW_URL;

 const Index = ({ schedule = [], ...props }) => (
  <Layout>
    <h1>NextConf Schedule Browser</h1>
    {schedule.map(s => <Session key={s.slug} {...s} />)}
  </Layout>
);

Index.getInitialProps = async () => {
  const res = await fetch(`http://localhost:3000/schedule`);
  const schedule = await res.json();
  return { schedule }
}

export default Index;
