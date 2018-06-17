import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createPost } from '../actions/postActions'
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
        this.props.createPost(post)
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
PostForm.propTypes = {
    createPost : PropTypes.func.isRequired
}
export default connect(null, { createPost })(PostForm);