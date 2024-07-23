// components/AuthButtons.js
import { useAuth0 } from '@auth0/auth0-react';

function AuthButtons() {
    const { loginWithRedirect, logout, isAuthenticated } = useAuth0();

    return (
        <div>
            {isAuthenticated ? (
                <button
                    type="button"
                    onClick={() => logout({ returnTo: window.location.origin })}
                >
                    Logout
                </button>
            ) : (
                <button type="button" onClick={() => loginWithRedirect()}>
                    Login
                </button>
            )}
        </div>
    );
}

export default AuthButtons;
