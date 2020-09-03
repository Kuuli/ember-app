import Route from '@ember/routing/route';

export default class DashboardRoute extends Route {
    model() {
        return ['Bootstrap dasboard', 'Creative ui dashboards', 'Albert Hofmann dashboards'];
      }
}
