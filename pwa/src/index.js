import 'typeface-roboto';
import './styles/index.css'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import { MuiThemeProvider } from '@material-ui/core/styles';
import { Route } from 'react-router';
import nakama from '@heroiclabs/nakama-js';
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


let client = new nakama.client("defaultkey", "127.0.0.1", 7350)
client.ssl = false;

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