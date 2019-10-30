import { connect } from 'react-redux'
import AddListing from '../components/AddListing'

const mapDispatchToProps = (dispatch) => {
  return {
    addListing: (listing) => dispatch(addListing(listing))
  }
}

export default connect(null, mapDispatchToProps)(AddListing)
