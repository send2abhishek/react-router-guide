import React, { Component } from "react";
// import axios from 'axios';
import Posts from "./Posts/Posts";
import { Route, NavLink, Switch, Redirect } from "react-router-dom";
import "./Blog.css";
import NewPost from "./NewPost/NewPost";
import FullPost from "../../containers/Blog/FullPost/FullPost";

class Blog extends Component {
  render() {
    return (
      <div className="Blog">
        <header>
          <nav>
            <ul>
              <li>
                <NavLink to="/" exact>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={{
                    pathname: "/new-post",
                    hash: "#submit",
                    search: "?quick-submit=true"
                  }}
                  exact
                >
                  New Post
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" exact>
                  Demo
                </NavLink>
              </li>
            </ul>
          </nav>
        </header>
        {/* <Posts /> */}
        {/* <Route path="/" exact render={() => <h1>Home</h1>} />
        <Route path="/" exact render={() => <h1>Home 2</h1>} /> */}
        <Switch>
          <Route path="/" exact component={Posts} />
          <Route path="/new-post" exact component={NewPost} />
          <Route path="/post/:id" exact component={FullPost} />
          <Redirect to="/" component={Posts} />
          {/* <Route path="*" render={() => <h1>Not Found</h1>} /> */}
        </Switch>
        {/* <section>
          <FullPost id={this.state.selectedPostId} />
        </section>
        <section>
          <NewPost />
        </section> */}
      </div>
    );
  }
}

export default Blog;
