import { connect } from 'react-redux';
import { userComment} from '../actions';
import ViewComment from '../components/ViewComment'



const mapStateToProps = (state) => ({
  

 comment:state.comment
})
const mapDispatchToProps = dispatch => ({
  onClick : () => dispatch(userComment())
})
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ViewComment)