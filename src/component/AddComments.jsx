import { useState, useEffect } from "react"
import { Form, Button } from "react-bootstrap"

const AddComments = ({ elementId }) => {
  const [comment, setComment] = useState({
    comment: "",
    rate: "1",
    elementId: ""
  })

  const onChangeHandler = (value, fieldToSet) => {
    setComment({ ...comment, [fieldToSet]: value })
  }

  const onSubmitHandler = async (e) => {
    e.preventDefault()
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments",
        {
          method: "POST",
          body: JSON.stringify(comment),

          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Mzg0YzcwM2Q4MDNjMjAwMTVlY2VlMzEiLCJpYXQiOjE2Njk2NDk2MzMsImV4cCI6MTY3MDg1OTIzM30.YcT8mz69Vnd8RUxkROJEBIe1hh-HsuM2usty8yW8fpg"
          }
        }
      )
      console.log(response)
      if (response.ok) {
        alert("Feedback saved!")
        setComment({
          comment: "",
          rate: "1",
          elementId: ""
        })
      } else {
        console.log("something went wrong :(")
      }
    } catch (error) {
      console.log(error)
    }
  }

  // componentDidUpdate(prevProps, prevState) {
  //   if (prevProps.elementId !== this.props.elementId)
  //     this.setState({ elementId: this.props.elementId })
  // }

  useEffect(() => {
    setComment({ ...comment, elementId: elementId })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [elementId])

  return (
    <div>
      <Form onSubmit={onSubmitHandler}>
        <Form.Group>
          <Form.Label>Comment?</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Comment"
            required
            value={comment.comment}
            onChange={(e) => onChangeHandler(e.target.value, "comment")}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Rating?</Form.Label>
          <Form.Control
            as="select"
            required
            value={comment.rate}
            onChange={(e) => onChangeHandler(e.target.value, "rate")}
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

export default AddComments
