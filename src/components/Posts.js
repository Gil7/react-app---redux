import React, { Component } from 'react'

class Posts extends Component {
    state = {
        posts: []
    }
    componentDidMount = () => {
        this.loadPosts()
    }
    loadPosts = () => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(posts => {
            this.setState({
                posts: posts
            })
        })
        .catch(err => {
            console.log(err)
        })
    }
    render() {
        const postItems = this.state.posts.map((post, index) => {
            return (
                <div key={post.id}>
                    <h3>
                        {post.title}
                    </h3>
                    <p>
                        {post.body}
                    </p>
                </div>
            )
        })
        return (
        <div>
            <h1>Posts</h1>
            {postItems}
        </div>
        )
    }
}
export default Posts