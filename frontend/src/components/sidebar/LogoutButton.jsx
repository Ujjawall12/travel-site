import { BiLogOut } from "react-icons/bi";
import useLogout from "../../hooks/useLogout";

const LogoutButton = () => {
  const { loading, logout } = useLogout();

  return (
    <div className="mt-auto flex justify-center">
      {!loading ? (
        <BiLogOut className="w-8 h-8 text-red-500 cursor-pointer hover:text-red-600 transition-colors duration-200" onClick={logout} />
      ) : (
        <span className="loading loading-spinner"></span>
      )}
    </div>
  );
};

export default LogoutButton;
