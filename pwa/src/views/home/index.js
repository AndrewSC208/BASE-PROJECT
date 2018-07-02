import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import HomeView from './view';

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => bindActionCreators({
    toSignup: () => push('/signup'),
    toLogin:  () => push('/login'),
}, dispatch)

// Look into using es7 decorators to clean this line up
export default connect(mapStateToProps, mapDispatchToProps)(HomeView)