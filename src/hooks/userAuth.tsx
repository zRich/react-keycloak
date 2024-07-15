import Keycloak from 'keycloak-js';
import { useEffect, useRef, useState } from 'react';


/*
  Init Options
*/
const initOptions = {
    url: import.meta.env.VITE_KEYCLOAK_URL as string,
    realm: import.meta.env.VITE_KEYCLOAK_REALM as string,
    clientId: import.meta.env.VITE_KEYCLOAK_CLIENT_ID as string,
    // flow: 'implicit',
}

const keycloak = new Keycloak(initOptions);

/**
 * Initialize Keycloak instance and calls the provieded callback function if successfully authenticated.
 * @param onAuthenticated Callback function to be called after successful authentication.
 */

const useKeyCloakAuth = () => {
    const isRun = useRef(false);
    const [token, setToken] = useState<string | undefined>(undefined);

    const [isLogin, setIsLogin] = useState(false);

    useEffect(() => {
        if (isRun.current) return;

        isRun.current = true;

        keycloak.init({ onLoad: 'login-required' })
            .then((authenticated) => {
                setToken(keycloak.token);
                setIsLogin(authenticated);
            });

    }, []);
    return [isLogin, token];
};

export default useKeyCloakAuth;


