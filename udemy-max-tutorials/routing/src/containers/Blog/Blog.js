import React, { Component } from "react";
// import axios from 'axios';
import "./Blog.css";
import Posts from "./Posts/Posts";
import { Route, NavLink, Switch } from "react-router-dom";
import NewPost from "./NewPost/NewPost";
import FullPost from "./FullPost/FullPost";

class Blog extends Component {
  render() {
    return (
      <div className="Blog">
        <header>
          <nav>
            <ul>
              <li>
                <NavLink
                  exact
                  to="/"
                  activeClassName="my-active"
                  activeStyle={{
                    color: "#fa923f",
                    textDecoration: "underline"
                  }}
                >
                  Home
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
        <Route exact path="/" component={Posts} />
        <Switch>
          <Route exact path="/new-post" component={NewPost} />
          <Route exact path="/:id" component={FullPost} />
        </Switch>
      </div>
    );
  }
}

export default Blog;
