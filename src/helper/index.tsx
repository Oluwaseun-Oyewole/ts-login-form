// import CryptoJS from "crypto-js"
import { keyConstants } from "./KeyConstraints"

/**In summary, this function provides 
 * a way to check whether a user is currently authenticated by verifying the presence of a valid session token and its expiration time stored in the localStorage. The token is considered valid if it exists and has not expired.

 */
export const isAuthenticated = () => {
  const now = Date.now()
  const expireTime = +(
    localStorage.getItem(keyConstants.EXPIRY_TOKEN_TIME) || 0
  )
  const token = localStorage.getItem(keyConstants.EXPIRY_TOKEN_TIME)

  /**
   * const sessionIsValid = expireTime > now && !!token: This line checks whether the session is valid. It does this by evaluating two conditions:

expireTime > now: Checks if the stored expiration time is greater than the current timestamp, meaning the token has not expired yet.
!!token: Checks if the token variable has a truthy value, meaning the token exists and is not null or undefined.
   */
  const sessionIsValid = expireTime > now && !!token

  return sessionIsValid
}
export const isUnAuthenticated = () => {
  const now = Date.now()
  const expireTime = +(
    localStorage.getItem(keyConstants.EXPIRY_TOKEN_TIME) || 0
  )
  const token = localStorage.getItem(keyConstants.EXPIRY_TOKEN_TIME)
  const sessionIsInvalid = expireTime <= now || !token
  return sessionIsInvalid
}
