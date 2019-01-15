import Layout from '../components/Layout';
import React from 'react'

export default class Error extends React.Component {
  static getInitialProps({ res, err }) {
    const statusCode = res ? res.statusCode : err ? err.statusCode : null;
    return { statusCode, err: err ? err.message : '' };
  }

  render() {
    return (
      <Layout>
      <p>
        {this.props.err}:
        {this.props.statusCode
          ? `An error ${this.props.statusCode} occurred on server`
          : 'An error occurred on client'}
      </p>
    </Layout>
    )
  }
}
