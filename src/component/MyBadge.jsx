import { Badge } from "react-bootstrap"

const MyBadge = ({ badgeMessage, badgeColor }) => (
  <div className="text-center">
    <Badge variant={badgeColor}>{badgeMessage}</Badge>
  </div>
)

export default MyBadge
