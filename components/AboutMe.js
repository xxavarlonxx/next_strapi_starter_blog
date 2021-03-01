import { Avatar, makeStyles, Typography } from '@material-ui/core';

const AboutMe = ({ author }) => {
  const styles = useStyles();

  return (
    <div className={styles.container}>
      <Avatar
        alt={author.name}
        src={`http://localhost:1337${author.avatar.url}`}
        className={styles.avatar}
      />
      <Typography className={styles.bio} variant='subtitle2'>
        {author.bio}
      </Typography>
    </div>
  );
};

const useStyles = makeStyles({
  container: {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 30,
    paddingBottom: 50,
  },
  avatar: {
    width: 60,
    height: 60,
    marginRight: 20,
  },
  bio: {
    flexGrow: 1,
  },
});

export default AboutMe;
