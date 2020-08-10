import React, { Component } from 'react'
import {userComment} from '../actions/index'
import {connect} from 'react-redux'
import UserComment from '../containers/UserComment';

export class Comment extends Component {
    constructor(props){
        super(props);
        this.state=({
            email:'',
            comment:''
        })
    }
    handleEmailChange=(event)=>{
        this.setState({
            email:event.target.value
        })
    }
    handleCommentChange=(event)=>{
        this.setState({
            comment:event.target.value
        })
    }
    validate=()=>{
       
        let emailError='';
        if(!this.state.email.includes('@')){
            emailError="Invalid";
            alert(emailError)

        }
        if(emailError){
            this.setState({emailError});
            return false;
        }
        return true;

    };
    handleSubmit=(event)=>{
        event.preventDefault();

        const isValid=this.validate();
        if(isValid){
            
         this.props.userComment(this.state.email,this.state.comment)
         this.setState({
             email:'',
             comment:''
         })
     
    }
    }
    render() {
        return (<div>
          <form  onSubmit={this.handleSubmit} >
              <label>Email:</label>
              <input type='text'value={this.state.email}
              onChange={this.handleEmailChange}/><br/>
              <label>Comment:</label>
              <input type="textarea" value={this.state.comment} onChange={this.handleCommentChange}/>
              <button type="submit">Comment</button>
              <UserComment/>
          </form>
          
          </div>
        )
    }
}

export default connect(null,{userComment})(Comment);
