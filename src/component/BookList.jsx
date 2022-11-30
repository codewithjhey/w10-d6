import { useState } from "react"
import { Container, Row, Col, InputGroup, Form } from "react-bootstrap"
import SingleBook from "./SingleBook"

const BookList = ({ books, handleChangeOfState }) => {
  const [filter, setFilter] = useState("")

  const filterBookList = (value) => {
    setFilter(value)
  }

  return (
    <Container>
      <InputGroup
        className="my-3 ml-1 search-input rounded"
        onChange={(e) => filterBookList(e.target.value)}
      >
        <Form.Control
          aria-label="Search"
          type="search"
          placeholder="Search for Books"
        />
      </InputGroup>

      <Row mb={3}>
        {books
          .filter((book) => book.title.includes(filter))
          .map((book) => {
            return (
              <Col sm={6} md={4} lg={3} my={3} key={book.asin}>
                <SingleBook
                  book={book}
                  handleChangeOfState={handleChangeOfState}
                />
              </Col>
            )
          })}
      </Row>
    </Container>
  )
}
export default BookList
