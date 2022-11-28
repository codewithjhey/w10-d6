import { Card, Col } from "react-bootstrap"
import { Component } from "react"
import AddComments from "./CommentsList"
import CommentsList from "./AddComments"

class SingleBook extends Component {
  state = {
    selected: false
  }

  handleSelected = () => {
    if (this.state.selected === false) {
      this.setState({ selected: true })
    } else {
      this.setState({ selected: false })
    }
  }

  render() {
    return (
      <>
        <Card
          className="book-card my-2"
          style={{
            border: this.state.selected ? "2px solid magenta" : ""
          }}
          onClick={() => this.handleSelected()}
        >
          <Card.Img className="book-card-img" src={this.props.book.img} />
          <Card.Body>
            <Card.Title>{this.props.book.title}</Card.Title>
          </Card.Body>
        </Card>
        {this.state.selected && (
          <AddComments elementId={this.props.book.asin} />
        )}
        {this.state.selected && (
          <CommentsList elementId={this.props.book.asin} />
        )}
      </>
    )
  }
}

export default SingleBook
