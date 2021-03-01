import { makeStyles, fade } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import PersonIcon from '@material-ui/icons/Person';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import { Box, Button } from '@material-ui/core';
import Link from 'next/link';
import { grey } from '@material-ui/core/colors';
import Moment from 'react-moment';

const PostItem = ({ post }) => {
  const styles = useStyles();

  return (
    <Link href={`/post/${post.id}`}>
      <Box
        className={styles.container}
        border={1}
        borderColor='grey.300'
        borderRadius={10}
      >
        <Typography variant='h3' color='primary'>
          {post.title}
        </Typography>
        <div style={{ display: 'flex', direction: 'row', marginBottom: 15 }}>
          <Box className={styles.box}>
            <PersonIcon style={{ marginRight: 5, color: grey[400] }} />
            <Typography variant='caption' color='textSecondary'>
              Andre Hochschulte
            </Typography>
          </Box>
          <Box className={styles.box}>
            <AccessTimeIcon style={{ marginRight: 5, color: grey[400] }} />
            <Typography variant='caption' color='textSecondary'>
              <Moment format='DD.MM.YYYY'>{post.published_at}</Moment>
            </Typography>
          </Box>
        </div>
        <Typography variant='body1' component='p' style={{ marginBottom: 15 }}>
          {`${post.shortDescription}...`}
        </Typography>
        <Link href={`/post/${post.id}`}>
          <Button
            color='primary'
            size='medium'
            variant='outlined'
            style={{ paddingLeft: 0, paddingRight: 0 }}
          >
            More
          </Button>
        </Link>
        <a />
      </Box>
    </Link>
  );
};

const useStyles = makeStyles({
  container: {
    marginBottom: 30,
    padding: 20,
    '&:hover': {
      borderColor: 'primary',
    },
  },
  box: {
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
    paddingRight: 15,
  },
});

export default PostItem;
