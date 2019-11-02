import { connect } from 'react-redux'
import Navigation from '../components/Navigation'
import { userLogin } from '../redux/actions'

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    userLogin: (username) => dispatch(userLogin(username))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navigation)
