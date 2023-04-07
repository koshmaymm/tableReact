import { useEffect, useState } from "react";
import "./index.css";
import UsersTable from "../UsersTable";
import SearchUsers from "../SearchUsers";

const Users = () => {
  const [fullUsersList, setFullUsersList] = useState([]);
  const [users, setUsers] = useState([]);
  const [checkedCategory, setCheckedCategory] = useState("");
  const [filterValue, setFilterValue] = useState("");

  const handleFilterCategory = (category) => {
    setCheckedCategory(category);
  };

  useEffect(() => {
    fetch("http://localhost:8000/users")
      .then((res) => res.json())
      .then((data) => {
        setFullUsersList(data);
        setUsers(data);
      });
  }, []);

  useEffect(() => {
    if (checkedCategory === "") return;
    setUsers(fullUsersList.filter((item) => item.category === checkedCategory));
    setFilterValue("");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [checkedCategory]);

  useEffect(() => {
    const nextList = fullUsersList.filter((user) => {
      return (
        user.category.toLowerCase().includes(filterValue.toLowerCase()) ||
        user.location.toLowerCase().includes(filterValue.toLowerCase()) ||
        user.practice.toLowerCase().includes(filterValue.toLowerCase()) ||
        user.project.toLowerCase().includes(filterValue.toLowerCase()) ||
        user.userName.toLowerCase().includes(filterValue.toLowerCase()) ||
        user.sumOfCriteries.toString().includes(filterValue.toLowerCase())
      );
    });
    setUsers(nextList);
    if (filterValue !== "" && checkedCategory !== "") {
      setCheckedCategory("");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filterValue]);

  return (
    <div className="users">
      <h1>RADAR</h1>
      <SearchUsers
        filterByCategory={handleFilterCategory}
        checkedCategory={checkedCategory}
        filterValue={filterValue}
        setFilterValue={setFilterValue}
      />
      <UsersTable users={users} />
    </div>
  );
};

export default Users;
