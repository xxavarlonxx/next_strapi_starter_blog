import { Button, Divider, makeStyles, Typography } from '@material-ui/core';
import { Fragment } from 'react';
import Link from 'next/link';
import { baseURL, fetchQuery } from '../../utils';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import PostMarkdown from '../../components/PostMarkdown';
import Moment from 'react-moment';

const Post = ({ post }) => {
  const styles = useStyles();

  return (
    <div className={styles.container}>
      <Link href='/'>
        <Button color='primary' startIcon={<ArrowBackIcon />} size='large'>
          Back
        </Button>
      </Link>
      <Typography variant='h1' gutterBottom>
        {post.title}
      </Typography>
      <PostMarkdown value={post.text} />
      <Divider variant='middle' />
      <Typography variant='overline' display='block' gutterBottom>
        <span>published at </span>
        <Moment format='DD.MM.YYYY HH:mm'>{post.published_at}</Moment>
      </Typography>
    </div>
  );
};

const useStyles = makeStyles({
  container: {
    paddingTop: 30,
  },
});

export default Post;

export async function getStaticProps({ params }) {
  const post = await fetchQuery('/posts', `${params.postId}`);

  if (!post) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      post,
    },
  };
}

export async function getStaticPaths() {
  const posts = await fetchQuery('/posts');
  const paths = posts.map((post) => {
    return {
      params: {
        postId: String(post.id),
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
}
