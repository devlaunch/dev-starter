import { withRouter } from 'next/router';
import Layout from 'components/Layout';

const Content = withRouter(props => (
  <React.Fragment>
    <h1>{props.router.query.title}</h1>
    <p>This is the content of Blog post</p>
  </React.Fragment>
));

const Page = props => (
  <Layout>
    <Content />
  </Layout>
);

export default Page;
