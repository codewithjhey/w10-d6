import { Component } from "react"
import AddComments from "./AddComments"
import CommentsList from "./CommentsList"

class CommentArea extends Component {
  render() {
    return (
      <div>
        <AddComments elementId={this.props.elementId} />
        <CommentsList elementId={this.props.elementId} />
      </div>
    )
  }
}

export default CommentArea
