// auth/auth0-provider.js
import { Auth0Provider } from '@auth0/auth0-react';
import { useRouter } from 'next/router';

function Auth0ProviderWithHistory({ children }) {
    const router = useRouter();

    const onRedirectCallback = (appState) => {
        router.push(appState?.returnTo || window.location.pathname);
    };

    return (
        <Auth0Provider
            domain={process.env.NEXT_PUBLIC_AUTH0_DOMAIN}
            clientId={process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID}
            redirectUri={
                typeof window !== 'undefined'
                    ? window.location.origin
                    : 'http://localhost:3000'
            }
            onRedirectCallback={onRedirectCallback}
        >
            {children}
        </Auth0Provider>
    );
}

export default Auth0ProviderWithHistory;
