import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import Admin from './Admin/pages/Admin';
import MainNavigation from './shared/Navigation/MainNavigation';
import Footer from './shared/Footer/Footer';
import Post from './PostToApply/pages/Post';
import AplliedUsers from './AplliedUsers/pages/AppliedUsers';
import HomeView from './shared/Home/HomeView';
import HomeCandidates from './Candidates/Components/HomeCandidates';
import Voter from './Voters/Components/Voters';
// import HowItwork from './shared/Home/HowItwork';
import Insipiration from './shared/Home/Insipiration';
import Team from './shared/Home/Team';
import Voters from './Voters/pages/Voters';
import Register from './LoginAndSignup/pages/Register';
import Login from './LoginAndSignup/pages/Login';

import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { green, yellow } from '@material-ui/core/colors';

const theme = createMuiTheme({
  typography: {
    h2: {
      fontSize: 20,
      marginBottom: 10,
    },
    h6: {
      fontSize: 20,
      margin: '0 20px',
      padding: -5,
    },
  },
  palette: {
    primary: {
      main: green[500],
    },
    secondary: {
      main: yellow[500],
    },
  },
});
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <MainNavigation />
        <main>
          <Switch>
            <Route path='/' exact>
              <HomeView />
              <Post />
              <Insipiration />
              <Team />
              <Footer />
            </Route>
            <Route path='/admin' exact>
              <Admin />
              <Footer />
            </Route>
            <Route path='/candidates' exact>
              <HomeCandidates />
              <AplliedUsers />
              <Post />
              <Footer />
            </Route>
            <Route path='/cast' exact>
              <Voter />
              <Voters />
              <Post />
              <Footer />
            </Route>
            <Route path='/register' exact>
              <Register />
            </Route>
            <Route path='/login' exact>
              <Login />
            </Route>
            <Route path='/aprroved-candidate' exact></Route>
            <Redirect to='/' />
          </Switch>
        </main>
      </Router>
    </ThemeProvider>
  );
}

export default App;
