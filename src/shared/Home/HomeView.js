import './HomeView.css';
import home from '../../images/vote2.png';
import cover from '../../images/gunnar.jpg';
import leftcover from '../../images/account.svg';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import { Link } from 'react-router-dom';

const HomeView = () => {
  return (
    <Grid
      style={{
        marginTop: 0,
        backgroundImage: `url(${cover})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '90vh',
      }}
      container
      spacing={3}
      justify='center'>
      <Grid style={{ marginTop: '30px' }} item xs={12} sm={6}>
        <Paper style={{ height: 'autho', width: '90%', margin: '0 10px' }}>
          <Typography variant='h3'></Typography>
          <Typography className='lelf-cover'>
            <img src={leftcover} alt='' />

            <p>
              <strong>
                {' '}
                Why you should use <br /> VoteTante?
              </strong>{' '}
              <br />
              Enables voters to cast their vote privately and easily from any
              location and on any device with Internet access (PC, tablet,
              smartphone, etc.), ensuring maximum election engagement by
              enabling remote and disabled voters to participate on equal terms.
              <Link
                style={{
                  textDecoration: 'none',
                }}
                to='/register'>
                <Button className='register'>Register Now</Button>
              </Link>
            </p>
          </Typography>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Paper
          className='right-cover'
          style={{
            height: 'autho',
            width: '90%',
            backgroundColor: 'transparent',
          }}>
          <Typography>
            <img
              style={{
                width: '90%',
              }}
              src={home}
              alt=''
            />
          </Typography>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default HomeView;
