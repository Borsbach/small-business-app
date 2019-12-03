import { connect } from 'react-redux'
import Navigation from '../components/Navigation'
import { userLogin, authenticate } from '../redux/actions'

const mapStateToProps = (state) => {
  return {
    user: state.user,
    login: state.login
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    userLogin: (username) => dispatch(userLogin(username)),
    authenticate: () => dispatch(authenticate()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navigation)
