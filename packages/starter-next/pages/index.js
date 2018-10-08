import styled from "styled-components";
import Link from "next/link";
import Layout from "components/Layout";

const Title = styled.h1`
  color: red;
`

const PostLink = (props) => (
  <li>
    <Link as={`/p/${props.id}`} href={`/posts?title=${props.title}`}>
      <a>{props.title}</a>
    </Link>
  </li>
);

export default () => (
  <Layout>
    <Title> Welcome to next.js!</Title>
    <ul>
      <PostLink id="hello-nextjs" title="Hello Next.js" />
      <PostLink id="post-on-nextjs" title="Post on Next.js" />
      <PostLink id="learn-nextjs" title="Learn Next.js" />
    </ul>
  </Layout>
);