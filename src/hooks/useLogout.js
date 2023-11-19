import { useAuthContext } from "./useAuthContext";
export const useLogout = () => {
  const { dispatch } = useAuthContext();
  const logout = () => {
    // remove token from local storage
    localStorage.removeItem("user");
    localStorage.removeItem("score");

    // dispatch logout action
    dispatch({ type: "LOGOUT" });
    // reload the page
    window.location.reload();
  };
  return { logout };
};
