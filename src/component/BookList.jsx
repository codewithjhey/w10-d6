import { Component } from "react"
import { Container, Row, Col, InputGroup, Form } from "react-bootstrap"
import SingleBook from "./SingleBook"

class BookList extends Component {
  state = {
    filter: ""
  }

  filterBookList = (value) => {
    this.setState({
      filter: value
    })
  }

  render() {
    return (
      <Container>
        <InputGroup
          className="my-3 ml-4"
          onChange={(e) => this.filterBookList(e.target.value)}
        >
          <Form.Control
            aria-label="Search"
            type="search"
            placeholder="Search for Books"
          />
        </InputGroup>

        <Row>
          {this.props.books
            .filter((book) => book.title.includes(this.state.filter))
            .map((book) => {
              return (
                <Col sm={6} md={4} lg={3} my={3} key={book.asin}>
                  <SingleBook book={book} />
                </Col>
              )
            })}
        </Row>
      </Container>
    )
  }
}
export default BookList
