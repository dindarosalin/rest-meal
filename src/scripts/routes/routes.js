import Hero from '../views/components/hero';
import Home from '../views/pages/restaurant-list';
import Upcoming from '../views/pages/favorite';
import Detail from '../views/pages/detail';

const routes = {
  '/': Hero, // default page
  '/home': Home,
  '/upcoming': Upcoming,
  '/detail/:id': Detail,
};

export default routes;
