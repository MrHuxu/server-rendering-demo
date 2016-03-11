import Home from '../components/Home.jsx';
import Test from '../components/Test.jsx';

export default {
  path: '/',
  component: Home,
  childRoutes: [{
    path      : 'test',
    component : Test
  }]
};