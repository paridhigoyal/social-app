import React, { Component } from 'react';
import {connect} from 'react-redux';
import {userPost} from '../actions/index'

import UserPost from '../containers/UserPost';

export class Post extends Component {
    constructor(props){
        super(props)
        this.state={
            email:'',
            post:'',
            caption:''
        }
    }
    handleEmailChange=(event)=>{
        this.setState({
            email:event.target.value
        })
    }
    handlePostChange=(event)=>{
        this.setState({
            post:event.target.value
        })
    }
    handleCaptionChange=(event)=>{
        this.setState({
            caption:event.target.value
        })
    }
    validate=()=>{
       
        let emailError='';
        if(!this.state.email.includes('@')){
            emailError="Invalid";

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
            
         this.props.userPost(this.state.email,this.state.caption,this.state.post)
     
    }
    }
    render() {
        return ( <div>
            <form onSubmit={this.handleSubmit}>
               
                    <label>Email:</label>
                    <input type='text' value={this.state.email}
                    onChange={this.handleEmailChange}/><br />
                    <label>post:</label>
                    <input type='file' value={this.state.post}
                    onChange={this.handlePostChange}/><br/>
                    <label>caption:</label>
                    <input type='text' value={this.state.caption}
                    onChange={this.handleCaptionChange}/>

                    <button type="submit" >Submit</button>
                    
                 
                
            </form>
            <UserPost/>
            </div>
        )
    }
}

export default connect(null,{userPost})(Post);
