import { compose } from 'redux';

/* eslint-disable no-underscore-dangle */
export const composeEnhancers =
    (process.env.NODE_ENV === 'development' &&
        window &&
        (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
    compose;
/* eslint-enable */
