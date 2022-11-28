import { Component } from "react"
import { ListGroup, Spinner } from "react-bootstrap"

class CommentsList extends Component {
  state = {
    comments: []
  }

  fetchComments = async () => {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/" +
          this.props.elementId,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzdmNmI5ZGQ4MzkzNTAwMTVlOGM0YWQiLCJpYXQiOjE2NjkyOTUwMDUsImV4cCI6MTY3MDUwNDYwNX0.ldU_NzLILQGw9ON-Dqwr_ijMy_HY92g_qu_TICsCaco"
          }
        }
      )
      if (response.ok) {
        let data = await response.json()
        let myFeedbackArray = data.filter((comment) =>
          comment.author.includes("ayo")
        )
        this.setState({ comments: myFeedbackArray })
      } else {
        console.log("error fetching the comments :(")

        setTimeout(() => {
          this.setState({
            isLoading: false
          })
        }, 1000)
      }
    } catch (error) {
      console.log(error)
      this.setState({
        isLoading: false
      })
    }
  }

  componentDidMount() {
    this.fetchComments()
  }

  commentDelete = async (commentId) => {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/" + commentId,
        {
          method: "DELETE",
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzdmNmI5ZGQ4MzkzNTAwMTVlOGM0YWQiLCJpYXQiOjE2NjkyOTUwMDUsImV4cCI6MTY3MDUwNDYwNX0.ldU_NzLILQGw9ON-Dqwr_ijMy_HY92g_qu_TICsCaco"
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

  render() {
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
        <ListGroup className="mt-4">
          {this.state.comments.map((r) => (
            <ListGroup.Item
              key={r._id}
              onClick={() => this.deleteComment(r._id)}
            >
              {r.rate} rating out of 5 - {r.comment}
            </ListGroup.Item>
          ))}
        </ListGroup>
      </div>
    )
  }
}

export default CommentsList
