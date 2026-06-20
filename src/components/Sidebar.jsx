import { useSelector } from "react-redux";
import Search from "./Search";
import UserList from "./userList";
import { useState } from "react";
const Sidebar = () => {
  const { allUsers } = useSelector((state) => state.user);
  const [searchTerm, setSearchTerm] = useState("");
  const filteredUsers =
    allUsers?.filter((user) => {
      const fullName = `${user.firstName} ${user.lastName}`.toLowerCase();
      const email = user.email.toLowerCase();
      const search = searchTerm.toLowerCase();

      return fullName.includes(search) || email.includes(search);
    }) || [];
  return (
    <div className="app-sidebar">
      {/* <!--SEARCH USER--> */}
      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm}></Search>
      {/* <!--USER LIST--> */}

      <UserList users={filteredUsers}></UserList>
    </div>
  );
};

export default Sidebar;
