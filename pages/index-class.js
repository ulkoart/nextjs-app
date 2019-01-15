import { Component } from 'react';
import fetch from 'isomorphic-unfetch';
import Session from '../components/Session';
import Layout from '../components/Layout';

class Index extends Component {
  static async getInitialProps() {
    const res = await fetch('https://ffconf.org/api/event/2018');
    const schedule = await res.json();

    return { schedule };
  }

  render() {
    const { schedule } = this.props;
    return (
      <Layout>
        <h1>NextConf Schedule Browser</h1>
        {schedule.map(s => <Session key={s.slug} {...s} />)}
      </Layout>
    );
  }
}

export default Index;
