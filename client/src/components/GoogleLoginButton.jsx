import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';

const GoogleLoginButton = ({ onSuccess, onError }) => {
    return (
        <GoogleOAuthProvider clientId="1051271485620-e2c48nali2elk0cq9cj22u3hb01k5098.apps.googleusercontent.com">
            <GoogleLogin
                onSuccess={onSuccess}
                onError={onError}
            />
        </GoogleOAuthProvider>
    );
};

export default GoogleLoginButton;