import React from "react";
import PostListItem from "./post-list-item"
import { ListGroup } from "reactstrap";
import "../styles/post-list.css"

const PostList = ({posts, onDelete, onToggleImportant, onToggleLike}) => {

  let elements = posts.map((item, i) => {
    const {id, ...itemProps} = item
    return (
      <li className="list-group-item" key={i}>
        <PostListItem
          {...itemProps}
          onDelete={() => onDelete(id)}
          onToggleImportant={() => onToggleImportant(id)}
          onToggleLike={() => onToggleLike(id)}
        />
      </li>
    )})

  return (
    <ListGroup className="app-list">
      {elements}
    </ListGroup>
  )
}

export default PostList