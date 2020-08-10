import React, { Component } from 'react';
import Comment from './Comment'




export class PostFeed extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    }
    likeCounter = () => {
        this.setState(
            { count: this.state.count + 1 }
        )

    }
    render() {


        const { post } = this.props
        return (
            <div>

                <ul>
                    {post.map(item =>
                        <ul>
                            {item.email} posted an post
                           <img alt="" src={item.post} /><br />
                            {item.caption}<br />
                            <Comment />
                            <button type="submit" className="button1" onClick={() => this.likeCounter()}>Like</button>
                            {this.state.count}

                        </ul>)}


                </ul>

            </div>
        )
    }
}

export default PostFeed


