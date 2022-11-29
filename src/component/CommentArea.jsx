import AddComments from "./AddComments"
import CommentsList from "./CommentsList"

const CommentArea = ({ elementId }) => {
  return (
    <div>
      <AddComments elementId={elementId} />
      {/* <CommentsList elementId={elementId} /> */}
    </div>
  )
}

export default CommentArea
