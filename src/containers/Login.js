import { connect } from 'react-redux'
import Login from '../component/Login'
import { userLogin } from '../redux/actions'

const mapStateToProps = (state) => {
  return {
    listings: state.listings,
    user: state.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    userLogin: (username) => dispatch(userLogin(username))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
