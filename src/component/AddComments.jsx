import { Component } from "react"
import { Form, Button } from "react-bootstrap"

class AddComments extends Component {
  state = {
    comment: "",
    rate: 1,
    elementId: ""
  }

  onChangeHandler = (value, fieldToSet) => {
    this.setState({
      ...this.state.feedback, // this creates a copy of feedback!
      [fieldToSet]: value
    })
  }

  onSubmitHandler = async (e) => {
    e.preventDefault()
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments",
        {
          method: "POST",
          body: JSON.stringify(this.state),
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzdmNmI5ZGQ4MzkzNTAwMTVlOGM0YWQiLCJpYXQiOjE2NjkyOTUwMDUsImV4cCI6MTY3MDUwNDYwNX0.ldU_NzLILQGw9ON-Dqwr_ijMy_HY92g_qu_TICsCaco"
          }
        }
      )
      console.log(response)
      if (response.ok) {
        alert("Feedback saved!")
        this.setState({
          comment: "",
          rate: 1,
          elementId: ""
        })
      } else {
        console.log("something went wrong :(")
      }
    } catch (error) {
      console.log(error)
    }
  }

  componentDidMount() {
    this.setState({ elementId: this.props.elementId })
  }

  render() {
    return (
      <div>
        <Form onSubmit={this.onSubmitHandler}>
          <Form.Group>
            <Form.Label>Comment?</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Comment"
              required
              value={this.state.comment}
              onChange={(e) => this.onChangeHandler(e.target.value, "comment")}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Rating?</Form.Label>
            <Form.Control
              as="select"
              required
              value={this.state.rate}
              onChange={(e) => this.onChangeHandler(e.target.value, "rate")}
            >
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </Form.Control>
          </Form.Group>

          <Button variant="primary" type="submit">
            Send Feedback
          </Button>
        </Form>
      </div>
    )
  }
}

export default AddComments
