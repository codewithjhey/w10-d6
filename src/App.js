import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import WarningSign from "./component/WarningSign"
import MyBadge from "./component/MyBadge"
import BookList from "./component/BookList"
import history from "./data/history.json"
import { useState } from "react"
import { Row, Col } from "react-bootstrap"
import CommentArea from "./component/CommentArea"

const App = () => {
  const [bookSelectedAsin, setBookSelectedAsin] = useState("")

  const handleChangeOfState = (grabAsin) => {
    setBookSelectedAsin(grabAsin)
  }

  return (
    <div>
      <WarningSign alertMessage={"Hey There! Welcome Again"} />
      <MyBadge badgeMessage={"Here is the badge"} badgeColor={"success"} />
      <Row>
        <Col xs={7}>
          <BookList books={history} handleChangeOfState={handleChangeOfState} />
        </Col>
        <Col xs={5}>
          <CommentArea elementId={bookSelectedAsin} />
        </Col>
      </Row>
    </div>
  )
}

export default App
