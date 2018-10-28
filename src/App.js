import React from "react";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";

// Components
import Sidebar from "./Sidebar";
import Loading from "./Loading";
import AuthorsList from "./AuthorsList";
import AuthorDetail from "./AuthorDetail";
import BookList from "./BookList";

import { connect } from "react-redux";

const App = ({ loading }) => {
  const getView = () => {
    if (loading) {
      return <Loading />;
    } else {
      return (
        <Switch>
          <Redirect exact from="/" to="/authors" />
          <Route path="/authors/:authorID" component={AuthorDetail} />
          <Route path="/authors/" component={AuthorsList} />
          <Route path="/books/:bookColor?" component={BookList} />
        </Switch>
      );
    }
  };
  return (
    <div id="app" className="container-fluid">
      <div className="row">
        <div className="col-2">
          <Sidebar />
        </div>
        <div className="content col-10">{getView()}</div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    loading: state.rootAuthors.loading || state.rootBooks.loading
  };
};

export default withRouter(connect(mapStateToProps)(App));
