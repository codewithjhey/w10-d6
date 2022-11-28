import { Card } from "react-bootstrap"
import { Component } from "react"
class SingleBook extends Component {
  state = {
    selected: false
  }

  handleSelected = () => {
    alert("Book Selected")
    // if (this.state.selected === false) {
    //   this.setState({ selected: true, bookSelectedAsin: this.props.book.asin })
    // } else {
    //   this.setState({ ...this.state, selected: false })
    // }
  }

  render() {
    return (
      <>
        <Card
          // className="book-card my-2"
          // style={{
          //   border: this.state.selected ? "2px solid magenta" : ""
          // }}
          onClick={() => this.props.handleChangeOfState(this.props.book.asin)}
        >
          <Card.Img
            className={
              this.selected ? "book-card-img selected" : "book-card-img"
            }
            src={this.props.book.img}
          />
          <Card.Body>
            <Card.Title>{this.props.book.title}</Card.Title>
          </Card.Body>
        </Card>
      </>
    )
  }
}

export default SingleBook
