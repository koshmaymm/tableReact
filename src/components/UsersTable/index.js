import userImg from "../../images/images.png";
import UserCategory from "../UserCategory";
import Thead from "../Thead";
import Tfoot from "../Tfoot";

const UsersTable = ({ users = [] }) => {
  return (
    <div>
      <div className="table-up-header">{users.length} people found</div>
      <table className="table">
        <Thead />
        <tbody>
          {users.map((user, index) => (
            <tr key={index} className="trow">
              <td className="cell__empty">
                <img src={userImg} alt="user img" className="img img-user" />
              </td>
              <td className="cell__islink">{user.userName}</td>
              <td>{user.location}</td>
              <td className="cell__islink">{user.project}</td>
              <td>{user.practice}</td>
              <td>{UserCategory(user.category)}</td>
              <td className="cell__last">{user.sumOfCriteries}</td>
            </tr>
          ))}
        </tbody>
        <Tfoot />
      </table>
    </div>
  );
};

export default UsersTable;
