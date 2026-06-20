import { useSelector } from "react-redux";

const Header = () => {
  // ১. রেডাক্স থেকে userState এবং তার ভেতর থেকে user অবজেক্ট নেওয়া হলো
  const userState = useSelector((state) => state.user);
  const user = userState?.user;

  console.log("hhh", user);

  // ২. ফুল নেম বানানোর সঠিক এবং সেফ ফাংশন
  const fullName = () => {
    if (!user?.firstName) return "Guest";

    // প্রথম অক্ষর বড় হাত, বাকিটা ছোট হাত করার স্ট্যান্ডার্ড নিয়ম
    const f =
      user.firstName.charAt(0).toUpperCase() +
      user.firstName.slice(1).toLowerCase();
    const l = user.lastName
      ? user.lastName.charAt(0).toUpperCase() +
        user.lastName.slice(1).toLowerCase()
      : "";

    return f + " " + l;
  };

  const firstLetterOfName = () => {
    if (!user?.firstName) return "?";

    const f = user.firstName.toUpperCase()[0] || "";
    const l = user.lastName ? user.lastName.toUpperCase()[0] : "";

    return f + l;
  };

  return (
    <div className="app-header">
      <div className="app-logo">
        <i className="fa fa-comments" aria-hidden="true"></i>
        Quick Chat
      </div>

      {user && (
        <div className="app-user-profile">
          <div className="logged-user-name">{fullName()}</div>
          <div className="logged-user-profile-pic">{firstLetterOfName()}</div>
        </div>
      )}
    </div>
  );
};

export default Header;
