const UserList = ({ users = [] }) => {
  console.log("side users data:", users);

  return (
    <div className="user-search-filter">
      <div className="filtered-user">
        {users &&
          users.map((user) => {
            return (
              <div key={user._id} className="filter-user-display">
                {user?.profilePic ? (
                  <img
                    src={user.profilePic}
                    alt="Profile Pic"
                    className="user-profile-image"
                  />
                ) : (
                  <div className="user-default-profile-pic">
                    {(user?.firstName?.[0] || "").toUpperCase() +
                      (user?.lastName?.[0] || "").toUpperCase()}
                  </div>
                )}

                <div className="filter-user-details">
                  <div className="user-display-name">
                    {user?.firstName} {user?.lastName || ""}
                  </div>
                  <div className="user-display-email">{user?.email}</div>
                </div>

                <div className="user-start-chat">
                  <button className="user-start-chat-btn">Start Chat</button>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default UserList;
