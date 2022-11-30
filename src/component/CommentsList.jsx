import { useEffect, useState } from "react"
import { ListGroup } from "react-bootstrap"

const CommentsList = ({ elementId }) => {
  const [comments, setComments] = useState([])

  const fetchBookComments = async () => {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/" + elementId,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Mzg0YzcwM2Q4MDNjMjAwMTVlY2VlMzEiLCJpYXQiOjE2Njk2NDk2MzMsImV4cCI6MTY3MDg1OTIzM30.YcT8mz69Vnd8RUxkROJEBIe1hh-HsuM2usty8yW8fpg"
          }
        }
      )
      if (response.ok) {
        let data = await response.json()
        let myFeedbackArray = data.filter((comment) =>
          comment.author.includes("victor")
        )
        setComments(myFeedbackArray)
      } else {
        console.log("error fetching the comments :(")

        // setTimeout(() => {
        //   this.setState({
        //     isLoading: false
        //   })
        // }, 1000)
      }
    } catch (error) {
      console.log(error)
    }
  }

  // componentDidUpdate(prevProps, prevState) {
  //   if (prevProps.elementId !== this.props.elementId) {
  //     console.log("ID has been Updated")
  //     this.fetchBookComments()
  //   }
  // }

  useEffect(() => {
    console.log("ID has been Updated")
    fetchBookComments()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [elementId])

  // componentDidMount() {
  //   this.fetchBookComments()
  // }

  useEffect(() => {
    fetchBookComments()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const commentDelete = async (commentId) => {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/" + commentId,
        {
          method: "DELETE",
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Mzg0YzcwM2Q4MDNjMjAwMTVlY2VlMzEiLCJpYXQiOjE2Njk2NDk2MzMsImV4cCI6MTY3MDg1OTIzM30.YcT8mz69Vnd8RUxkROJEBIe1hh-HsuM2usty8yW8fpg"
          }
        }
      )
      if (response.ok) {
        alert("Comment is deleted!")
      }
    } catch (error) {
      alert(error)
    }
  }

  return (
    <div>
      {/* {this.state.isLoading && (
          <Spinner
            animation="border"
            role="status"
            className="custom-spinner-color"
          >
            <span className="sr-only">Loading...</span>
          </Spinner>
        )} */}
      <h5 className="my-3">Posted Feedbacks</h5>
      <ListGroup className="mt-4">
        {comments.map((c) => (
          <ListGroup.Item key={c._id} onClick={() => commentDelete(c._id)}>
            {c.comment} - Rated {c.rate} out of 5
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  )
}

export default CommentsList
