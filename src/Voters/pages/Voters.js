import './Voters.css';
import cover from '../../images/gunnar.jpg';
import leftcover from '../../images/ele.svg';
import { Link } from 'react-router-dom';
import home from '../../images/vote2.png';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
const HomeView = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('xs'));
  console.log(matches);
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
              Praesent commodo cursus magna, vel scelerisque nisl consectetur
              et. Maecenas sed diam eget risus varius blandit sit amet non
              magna. Aenean lacinia bibendum nulla sed consectetur. Cras mattis
              consectetur purus sit amet fermentum. Donec ullamcorper nulla non
              metus auctor fringilla. Cras mattis
              <Link
                style={{
                  textDecoration: 'none',
                }}
                to='/vote'>
                <Button className='register'>Vote Now</Button>
              </Link>
            </p>
          </Typography>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Paper
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
