import { Alert } from "react-bootstrap"

const WarningSign = ({ alertMessage }) => (
  <Alert className="d-flex justify-content-center" variant={"danger"}>
    {alertMessage}
  </Alert>
)

export default WarningSign
