import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import App from './App.view';

const mapStateToProps = state => ({
    
});

const mapDispatchToProps = dispatch => bindActionCreators({

}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(App)