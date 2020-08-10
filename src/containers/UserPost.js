import { connect } from 'react-redux';
import { userPost} from '../actions';

import PostFeed from '../components/PostFeed';


const mapStateToProps = (state) => ({
  
 post: state.post,
 
 
})
const mapDispatchToProps = dispatch => ({
  onClick : () => dispatch(userPost())
  
})
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostFeed)