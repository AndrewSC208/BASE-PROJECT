import 'typeface-roboto';
import './styles/index.css'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import { MuiThemeProvider } from '@material-ui/core/styles';
import { Route } from 'react-router';
/**
 * UTILS
 */
import theme from './utils/theme';
import registerServiceWorker from './utils/registerServiceWorker';
/**
 * STORE
 */
import store, { history } from './store';
/**
 * VIEWS
 */
import Home       from './views/home'
import Signup     from './views/signup'
import Login      from './views/login'
import Dashboard  from './views/dashboard'
/**
 * SERVICES
 */
render(
    <Provider store={store}>
        <MuiThemeProvider theme={theme}>
            <ConnectedRouter history={history}>
                <div>
                    <main>
                        <Route exact path="/" component={Home} />
                        <Route path="/signup" component={Signup} />
                        <Route path="/login" component={Login} />
                        <Route path="/dashboard" component={Dashboard} />
                    </main>
                </div>
            </ConnectedRouter>
        </MuiThemeProvider>
    </Provider>,
    document.querySelector('#root')
)

registerServiceWorker();