import React, { Component } from 'react';
import axios from 'axios';

class PostList extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         posts: []
      }
    }

    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => { 
            console.log(response);
            this.setState({
                posts: response.data
            })
        })
        .catch(error => {
            console.log(error);
        })
    }
    
  render() {
      const { posts } = this.state;
    return <div>
        <h1>List of Posts</h1>
        {
            posts.length ?
            posts.map(post => <div key={post.id}><h2>{post.title}</h2><p>{post.body}</p></div>) : null
        }
    </div>;
  }
}

export default PostList;
