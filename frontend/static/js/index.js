import Dashboard from './views/Dashboard.js';
import About from './views/About.js';

const navigateTo = async (path) => {
  window.history.pushState(null, null, path);

  await router();
}

const router = async () => {
  const routes = [
    { path: '/', view: Dashboard },
    { path: '/about', view: About }
  ];

  const foundRoute = routes.find(route => route.path === window.location.pathname)

  if (foundRoute) {
    document.getElementById('app').innerHTML = await foundRoute.view.render()
  }
};

const listenRouterLinks = () => {
  document.body.addEventListener('click', async event => {
    if (event.target.matches('[data-link]')){
      event.preventDefault();

      await navigateTo(event.target.href);
    }
  })
};

const listenHistoryPush = () => {
  window.addEventListener('popstate', router)
};

document.addEventListener('DOMContentLoaded', async () => {
  listenRouterLinks();
  listenHistoryPush();

  await router();
});
