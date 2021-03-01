import { makeStyles, Typography } from '@material-ui/core';

const Hero = () => {
  const styles = useStyles();

  return (
    <div className={styles.container}>
      <Typography variant='h1' className={styles.hero}>
        Next JS Starter blog
      </Typography>
    </div>
  );
};

const useStyles = makeStyles({
  container: {
    flexGrow: 1,
    paddingTop: 30,
    paddingBottom: 30,
  },
  hero: {
    fontSize: '9em',
    fontWeight: 900,
    letterSpacing: 2,
    textTransform: 'uppercase',
  },
});

export default Hero;
