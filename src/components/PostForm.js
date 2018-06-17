import React, { Component } from 'react'

class PostForm extends Component {
    state = {
        title: '',
        body : ''
    }
    onChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    onSubmit = (e) => {
        e.preventDefault();
        const post = {
            title : this.state.title,
            body : this.state.body
        }
        fetch('https://jsonplaceholder.typicode.com/posts',{
            method : 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body : JSON.stringify(post)
        })
        .then(res => res.json())
        .then(post => {
            console.log(post)
        })
        .catch(err => {
            console.log(err)
        })
    }
    render() {
        return (
        <div>
            <h1>Add Post</h1> 
            <form onSubmit={this.onSubmit}>
                <div>
                    <label>
                        Title:
                    </label>
                    <input name="title" onChange={this.onChange} type="text" value={this.state.title}/>
                </div>
                <div>
                    <label>
                        Body:
                    </label>
                    <textarea name="body" onChange={this.onChange} value={this.state.body} />
                </div>
                <button type="submit">Save</button>
            </form>       
        </div>
        )
    }
}
export default PostForm;