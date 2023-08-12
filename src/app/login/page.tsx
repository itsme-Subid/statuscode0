"use client";

import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

function page() {
  const { loginWithRedirect,logout, isAuthenticated } = useAuth0();
  const { user } = useAuth0();
  return (
    <div>
      {!isAuthenticated && <button onClick={() => loginWithRedirect()}>Login</button>}
      {isAuthenticated && user && <button
        onClick={() =>
          logout({ logoutParams: { returnTo: window.location.origin } })
        }
      > {user.name}
        Log Out
      </button>}
    </div>
  );
}

export default page;