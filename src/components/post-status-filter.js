import React, { Component } from 'react'
import "../styles/post-status-filter.css"

export default class PostStatusFilter extends Component {
  constructor(props) {
    super(props) 
    this.buttons = [
      {name: "all", label: "all"},
      {name: "like", label: "liked"},
    ]
  }
  render() {
    const buttons = this.buttons.map(({name, label}) => {
      const {filter, onFilterSelect} = this.props
      const active = filter === name
      const className = active ? "btn-info" : "btn-outline-secondary"
      return (
        <button 
          key={name} 
          className={`btn ${className}`}
          onClick={() => onFilterSelect(name)}
        >{label}</button>
      )
    })
    return (
      <div className="btn-group">
        {buttons}
      </div>
    )
  }
}
