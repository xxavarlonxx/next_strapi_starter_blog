import { makeStyles } from '@material-ui/core';
import PostItem from '../components/PostItem';
import { fetchQuery } from '../utils';
import AboutMe from '../components/AboutMe';
import Hero from '../components/Hero';
import { Fragment } from 'react';

const Home = ({ posts, author }) => {
  const styles = useStyles();

  return (
    <Fragment>
      <Hero />
      <AboutMe author={author} />
      {posts.map((post) => (
        <PostItem key={post.id} post={post} className={styles.container} />
      ))}
    </Fragment>
  );
};

const useStyles = makeStyles({
  container: {
    flexGrow: 1,
  },
});

export async function getServerSideProps() {
  const posts = await fetchQuery('/posts', null, '_sort=published_at:desc');
  const author = await fetchQuery('/author');
  if (!posts || !author) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      posts,
      author,
    },
  };
}

export default Home;
