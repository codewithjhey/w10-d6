import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import WarningSign from "./component/WarningSign"
import MyBadge from "./component/MyBadge"
import BookList from "./component/BookList"
import history from "./data/history.json"
import { Component } from "react"
import { Row, Col } from "react-bootstrap"
import CommentArea from "./component/CommentArea"

class App extends Component {
  state = {
    bookSelectedAsin: ""
  }

  handleChangeOfState = (grabAsin) =>
    this.setState({ bookSelectedAsin: grabAsin })

  render() {
    return (
      <div>
        <WarningSign alertMessage={"Hey There! Welcome Again"} />
        <MyBadge badgeMessage={"Here is the badge"} badgeColor={"success"} />
        <Row>
          <Col xs={7}>
            <BookList
              books={history}
              handleChangeOfState={this.handleChangeOfState}
            />
          </Col>
          <Col xs={5} className=" justify-content-center">
            <CommentArea elementId={this.state.bookSelectedAsin} />
          </Col>
        </Row>
      </div>
    )
  }
}

export default App
