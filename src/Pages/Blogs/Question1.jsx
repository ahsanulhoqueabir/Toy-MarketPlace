import React from "react";
import { FaRegCircleQuestion } from "react-icons/fa6";
import { FaClone } from "react-icons/fa6";

const Question1 = () => {
  return (
    <div className="text-lg">
      <h1 className="lg:text-4xl font-semibold">
        <FaRegCircleQuestion className="inline-block mr-2 text-green-500"></FaRegCircleQuestion>
        What is an access token and refresh token? How do they work and where
        should we store them on the client-side?
      </h1>
      <p className="mt-5 ">
        <FaClone className="inline-block mr-2 text-green-500 text-3xl"></FaClone>
        Access token is a token that is used to authenticate and authorize a
        user. It is usually a random string. It is used to access protected
        resources. It is usually short-lived. Refresh token is a token that is
        used to get a new access token. It is usually a random string. It is
        used to get a new access token when the access token expires. It is
        usually long-lived. Access token is usually stored in the local storage
        of the browser. Refresh token is usually stored in the cookies of the
        browser.
      </p>
      <div>
        <div>
          <h2 className="font-bold">Access Token:</h2>
          <ul className="list-disc pl-5">
            <li>
              An access token is a short-lived credential issued by an
              authorization server after a successful authentication and
              authorization process.
            </li>
            <li>
              Grants permissions to access specific resources on behalf of a
              user.
            </li>
            <li>
              Access tokens typically have a limited lifespan (e.g., 15 minutes
              to an hour) to mitigate security risks associated with long-lived
              tokens.
            </li>
            <li>
              Used by clients (e.g., web or mobile applications) to make
              authenticated requests to protected resources (e.g., APIs).
            </li>
          </ul>
        </div>
        <div>
          <h2 className="font-bold">Refresh Token:</h2>
          <ul className="list-disc pl-5"> 
            <li>
              A refresh token is a long-lived credential issued by the
              authorization server during the authentication process.
            </li>
            <li>
              Refresh tokens have a longer lifespan (e.g., days, weeks, or
              months).
            </li>
            <li>
              The primary purpose of a refresh token is to obtain a new, fresh
              access token without requiring the user to re-enter their
              credentials.
            </li>
            <li>
              Refresh tokens are more secure than access tokens since they are
              not used for every request to the resource server.
            </li>
          </ul>
        </div>
        <div>
          <h2 className="font-bold">How They Work Together:</h2>
          <ol className="list-disc pl-5">
            <li>
              The client initially obtains an access token and a refresh token
              during the authentication process.
            </li>
            <li>
              The access token is used to make requests to protected resources.
            </li>
            <li>
              When the access token expires, the client can use the refresh
              token to request a new access token without requiring the user to
              log in again.
            </li>
            <li>
              If the refresh token expires or is revoked, the user must
              re-authenticate to obtain new tokens.
            </li>
          </ol>
        </div>
        <div>
          <h2 className="font-bold">Storage on the Client-side:</h2>
          <ul className="list-disc pl-5">
            <li>
              Access tokens should be stored securely on the client side (e.g.,
              in memory) since they are short-lived and can be easily replaced
              by using the refresh token.
            </li>
            <li>
              Refresh tokens, being long-lived and more sensitive, should be
              stored securely. Recommended to store them in a secure storage
              mechanism, such as the operating system's secure key store or
              encrypted cookies.
            </li>
            <li>
              It's important to consider the security implications of storing
              tokens on the client side and to implement proper security
              measures, such as using HTTPS, secure storage mechanisms, and
              protecting against cross-site scripting (XSS) attacks.
            </li>
          </ul>
        </div>
        <p>
          Developers should follow best practices and guidelines provided by the
          authentication protocol they are implementing, as different protocols
          may have specific recommendations regarding token storage and usage.
        </p>
      </div>
      
    </div>
  );
};

export default Question1;
