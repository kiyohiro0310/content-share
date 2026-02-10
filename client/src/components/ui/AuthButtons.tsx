import { useAuth } from "@workos-inc/authkit-react";
import { useEffect } from "react";

const AuthButtons = () => {
  const { isLoading, user, signIn, signOut } = useAuth();

  useEffect(() => {
    if (window.location.pathname === "/signin") {
      // Redirects to the signIn page
      signIn();
    }
  }, [window.location, signIn]);

  // isLoading is true until WorkOS has determined the user's authentication status
  if (isLoading) {
    return <p>... insert cool spinner here ...</p>;
  }

  return (
    <>
      {!user ? (
        <button
          className="font-extrabold hover:text-yellow-300 transition-all duration-200 cursor-pointer"
          onClick={() => {
            signIn();
          }}
        >
          Sign In
        </button>
      ) : (
        <button
          className="font-extrabold hover:text-yellow-300 transition-all duration-200 cursor-pointer"
          onClick={() => {
            signOut();
          }}
        >
          Sign Out
        </button>
      )}
    </>
  );
};

export default AuthButtons;
