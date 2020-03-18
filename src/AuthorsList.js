import React from "react";

// redux
import { connect } from "react-redux";

// Components
import AuthorCard from "./AuthorCard";

const AuthorsList = props => {
  const authorCards = props.authors.map(author => (
    <AuthorCard key={author.id} author={author} />
  ));

  return (
    <div className="authors">
      <h3>Authors</h3>
      <div className="row">{authorCards}</div>
    </div>
  );
};

const mapStateProps = state => {
  return {
    authors: state.authors
  };
};
export default connect(mapStateProps)(AuthorsList);
