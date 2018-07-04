import 'typeface-roboto';
import './styles/index.css'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import { MuiThemeProvider } from '@material-ui/core/styles';
import { Route } from 'react-router';
import * as nakamajs from '../node_modules/@heroiclabs/nakama-js/dist/nakama-js.umd.js';
/**
 * app specific
 */
import theme from './utils/theme';
import registerServiceWorker from './utils/registerServiceWorker';
import store, { history } from './store'
/**
 * views
 */
import Home       from './views/home'
import Signup     from './views/signup'
import Login      from './views/login'
import Dashboard  from './views/dashboard'

var client = new nakamajs.Client("defaultkey", "127.0.0.1", 7350);
client.usessl = false;

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