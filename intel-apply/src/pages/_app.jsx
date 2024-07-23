import '../app/globals.css';
import Auth0ProviderWithHistory from '../auth/auth0-provider';

function MyApp({ Component, pageProps }) {
    return (
        <Auth0ProviderWithHistory>
            <Component {...pageProps} />
        </Auth0ProviderWithHistory>
    );
}

export default MyApp;
