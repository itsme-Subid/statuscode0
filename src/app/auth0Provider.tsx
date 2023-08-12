"use client";

import { Auth0Provider } from "@auth0/auth0-react";

const Provider = ({ children }: { children: React.ReactNode }) => {
  return (
    <Auth0Provider
      domain="dev-3vjmx0uqjuzh5578.us.auth0.com"
      clientId="NYRtaUmeADSFvbwN5Rso1Ang9TVIICob"
      authorizationParams={{
        redirect_uri: "http://localhost:3000",
      }}
    >
      {children}
    </Auth0Provider>
  );
};

export default Provider;
