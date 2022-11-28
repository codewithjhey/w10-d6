import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import WarningSign from "./component/WarningSign"
import MyBadge from "./component/MyBadge"
import BookList from "./component/BookList"
import history from "./data/history.json"
import SingleBook from "./component/SingleBook"

function App() {
  return (
    <div>
      <WarningSign alertMessage={"Hey There! Welcome Again"} />
      <MyBadge badgeMessage={"Here is the badge"} badgeColor={"success"} />
      <BookList books={history} />
      <SingleBook book={history[0]} />
    </div>
  )
}

export default App
