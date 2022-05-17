import React from "react";
import "../styles/app-header.css"

const AppHeader = ({liked, allPosts}) => {
  return (
    <div className="app-header d-flex">
      <h1>Constantine</h1>  
      <h2>{allPosts} записей, из них понравилось {liked}</h2>
    </div>
  )
}

export default AppHeader;