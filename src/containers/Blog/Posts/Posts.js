// import FullPost from "./FullPost/FullPost";
// import NewPost from "./NewPost/NewPost";
import React, { Component } from "react";
import axios from "../../../axios";
import Post from "../../../components/Post/Post";
import "./Posts.css";
import { Link } from "react-router-dom";

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      selectedPostId: null,
      error: false
    };
  }
  postSelectedHandler = id => {
    this.props.history.push("/post/" + id);
  };

  componentDidMount() {
    console.log("props from Posts js page", this.props);
    axios
      .get("/posts")
      .then(response => {
        const posts = response.data.slice(0, 4);
        const updatedPosts = posts.map(post => {
          return {
            ...post,
            author: "Max"
          };
        });
        this.setState({ posts: updatedPosts });
        // console.log( response );
      })
      .catch(error => {
        console.log(error);
        //this.setState({ error: true });
      });
  }

  render() {
    let posts = <p style={{ textAlign: "center" }}>Something went wrong!</p>;
    if (!this.state.error) {
      posts = this.state.posts.map(post => {
        return (
          //   <Link to={"/post/" + post.id} key={post.id}>
          <Post
            key={post.id}
            title={post.title}
            author={post.author}
            clicked={() => this.postSelectedHandler(post.id)}
          />
          //   </Link>
        );
      });
    }
    return <section className="Posts">{posts}</section>;
  }
}

export default Posts;
