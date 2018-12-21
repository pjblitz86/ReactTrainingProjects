import React, { Component } from "react";
// import axios from 'axios';
import "./Blog.css";
import Posts from "./Posts/Posts";
import { Route, NavLink, Switch } from "react-router-dom";
import asyncComponent from "../../hoc/asyncComponent";
// import NewPost from "./NewPost/NewPost";

const AsyncNewPost = asyncComponent(() => {
  return import("./NewPost/NewPost"); // here we decide which component will be loaded lazily
});

class Blog extends Component {
  state = {
    auth: true
  };
  render() {
    return (
      <div className="Blog">
        <header>
          <nav>
            <ul>
              <li>
                <NavLink
                  exact
                  to="/posts/"
                  activeClassName="my-active"
                  activeStyle={{
                    color: "#fa923f",
                    textDecoration: "underline"
                  }}
                >
                  POSTS
                </NavLink>
              </li>
              <li>
                <NavLink
                  exact
                  to={{
                    pathname: "/new-post",
                    hash: "#submit",
                    search: "?quick-submit=true"
                  }}
                >
                  New Post
                </NavLink>
              </li>
            </ul>
          </nav>
        </header>
        {/* <Route exact path="/" render={() => <h1>Home</h1>} />
        <Route path="/" render={() => <h1>Home2</h1>} /> */}
        <Switch>
          {this.state.auth ? (
            <Route path="/new-post" component={AsyncNewPost} />
          ) : null}
          <Route path="/posts" component={Posts} />
          <Route render={() => <h1>Not found</h1>} />
          {/* last comes catch all - error/404 route if no route was catched  */}
          {/* <Redirect from="/" to="/posts" /> */}
          {/* <Route path="/" component={Posts} /> */}
        </Switch>
      </div>
    );
  }
}

export default Blog;
