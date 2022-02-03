import React, { Component } from 'react';
import db from '../firebase.js'
import { addDoc, collection } from "firebase/firestore";

class PostForm extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         userId: '',
         title: '', 
         body: ''
      }
    }

    changeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    submitHandler = (e) => {
        e.preventDefault();
        console.log(this.state);

        const post = {
            title: 'hey',
            body: 'coucou'
        }

    addDoc(collection(db, "posts"), post).then((response) => {
        console.log("added");
        });



        // .then(() => {
        //     alert('otop');
        // })
        // .catch((error) => {
        //     alert(error.message);
        // })
    }
    
    
  render() {
    const { userId, title, body } = this.state;
    return <div>
        <form onSubmit={this.submitHandler}>
            <div>
                <input 
                    type="text" 
                    placeholder='userId' 
                    name='userId' 
                    value={userId} 
                    onChange={this.changeHandler}
                />
            </div>
            <div>
                <input 
                    type="text" 
                    placeholder='title' 
                    name='title' 
                    value={title} 
                    onChange={this.changeHandler}
                />
            </div>
            <div>
                <input 
                    type="text" 
                    placeholder='body' 
                    name='body' 
                    value={body}
                    onChange={this.changeHandler}
                />
            </div>
            <button type='submit'>Submit</button>
        </form>
    </div>;
  }
}

export default PostForm;
