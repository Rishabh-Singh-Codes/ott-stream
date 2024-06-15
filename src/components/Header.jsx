import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, USER_ICON } from "../utils/constants";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { email, uid, displayName } = user;
        dispatch(addUser({ email, uid, displayName }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, [dispatch, navigate]);

  const handleSignout = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  return (
    <div className="w-full bg-gradient-to-b from-black flex justify-between items-center px-8 fixed h-16 z-10 pt-4">
      <img
        src={LOGO}
        alt="logo"
        className="w-44"
      />
      {user && (
        <div className="has-tooltip flex flex-col items-center">
          <button
            className="tooltip rounded-md shadow-lg p-1 bg-gray-100 text-red-500 mt-10 font-bold"
            onClick={handleSignout}
          >
            Logout
          </button>
          <img
            src={USER_ICON}
            alt="user-logo"
            className="mt-2 h-8 rounded-md"
          />
          {user?.displayName && <span>{user?.displayName}</span>}
        </div>
      )}
    </div>
  );
};

export default Header;
