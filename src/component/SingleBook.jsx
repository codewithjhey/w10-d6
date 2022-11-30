import { Card } from "react-bootstrap"
import { useState } from "react"

const SingleBook = ({ book, handleChangeOfState }) => {
  const [selected, setSelected] = useState(false)

  const handleSelected = () => {
    if (selected === false) {
      setSelected(true)
    } else {
      setSelected(false)
    }
    // if (this.state.selected === false) {
    //   this.setState({ selected: true, bookSelectedAsin: this.props.book.asin })
    // } else {
    //   this.setState({ ...this.state, selected: false })
    // }
  }

  return (
    <>
      <Card
        className={selected ? "book-card-img selected" : ""}
        // className="book-card my-2"
        // style={{
        //   border: this.state.selected ? "2px solid magenta" : ""
        // }}
        onClick={() => {
          handleChangeOfState(book.asin)
          handleSelected()
        }}
      >
        <Card.Img className={"book-card-img"} src={book.img} />
        {/* <Card.Body>
          <Card.Title>{book.title}</Card.Title>
        </Card.Body> */}
      </Card>
    </>
  )
}

export default SingleBook
