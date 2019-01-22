import * as apiActions from './apiActions';
import * as userActions from './userActions';

const actions = {
  ...apiActions,
  ...userActions
};

export { actions };
