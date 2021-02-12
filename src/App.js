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
import User from './Users/Pages/User';
import UserProfile from './Users/Pages/UserProfile';
import CandidatesProfile from './Candidates/pages/CandidatesProfile';
import Candidates from './Candidates/pages/Candidates';
import NewCandidates from './Candidates/pages/NewCandidates';
import HomeView from './shared/Home/HomeView';
import HomeCandidates from './Candidates/pages/HomeCandidates';
import Voter from './Voters/pages/Voters';
import HowItwork from './shared/Home/HowItwork';
import Insipiration from './shared/Home/Insipiration';
import Team from './shared/Home/Team';
// import Voters from './Voters/pages/Voters';
import AvailablePost from './Voters/pages/AvailablePost';
import NewUser from './Users/Pages/NewUser';
import LoginUser from './Users/Pages/LoginUser';

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
      main: yellow[500],
    },
    secondary: {
      main: green[500],
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
              <HowItwork />
              <Post />
              <Insipiration />
              <Team />
              <Footer />
            </Route>
            <Route path='/admin' exact>
              <Admin />
            </Route>
            <Route path='/candidates' exact>
              <HomeCandidates />
              <Candidates />
              <Post />
              <Footer />
            </Route>
            <Route path='/cast' exact>
              <Voter />
              <User />
              <Post />
              <Footer />
            </Route>
            <Route path='/register' exact>
              <NewUser />
            </Route>
            <Route path='/login' exact>
              <LoginUser />
            </Route>
            <Route path='/apply' exact>
              <NewCandidates />
            </Route>
            <Route path='/vote' exact>
              <AvailablePost />
            </Route>
            <Route path='/:userId/profile' exact>
              <UserProfile />
            </Route>
            <Route path='/:UserId/candidate/profile' exact>
              <CandidatesProfile />
            </Route>
            <Route path='/users' exact>
              <User />
            </Route>
            <Route path='/all/candidates' exact>
              <Candidates />
            </Route>
            <Redirect to='/' />
          </Switch>
        </main>
      </Router>
    </ThemeProvider>
  );
}

export default App;
