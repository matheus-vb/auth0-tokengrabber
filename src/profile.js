import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { env } from "./env-handler";

const Profile = () => {
    const { user, isAuthenticated, getAccessTokenSilently } = useAuth0();
    const [userMetadata, setUserMetadata] = useState(null);

    let accessToken = "und"

    return (
        isAuthenticated && (
            <div>
                <img src={user.picture} alt={user.name} />
                <h2>{user.name}</h2>
                <p>{user.email}</p>
                <button onClick={ async () => { 
                    accessToken = await getAccessTokenSilently({
                        authorizationParams: {
                            audience: env.REACT_APP_AUD,
                        },
                    });
                    console.log(accessToken)
                }}>Click me</button>
            </div>
        )
    );
};

export default Profile;