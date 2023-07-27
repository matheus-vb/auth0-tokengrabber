import React from 'react';
import { createRoot } from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App';
import { env } from './env-handler';

const root = createRoot(document.getElementById('root'));

root.render(
  <Auth0Provider
    domain={env.REACT_APP_DOMAIN}
    clientId={env.REACT_APP_CLIENT_ID}
    authorizationParams={{
      redirect_uri: window.location.origin,
      audience: env.REACT_APP_AUD,
    }}
  >
    <App />
  </Auth0Provider>
);
