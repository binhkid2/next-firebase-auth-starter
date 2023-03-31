import { auth } from "@/config/firebase";
import Image from "next/image";
import ImageComponent from "./ImageComponent";
function Profile() {
  const user = auth.currentUser;
  if (user !== null) {
    // The user object has basic properties such as display name, email, etc.
    const displayName = user.displayName;
    const email = user.email;
    const photoURL = user.photoURL;
    const emailVerified = user.emailVerified;
    const uid = user.uid;
    // The user's ID, unique to the Firebase project. Do NOT use
    // this value to authenticate with your backend server, if
    // you have one. Use User.getToken() instead.
    return (
      
        <><div>
           <ImageComponent  src={photoURL ?? ''} height={100} width={100} />
        </div><div>
                <p> Username: {displayName}</p>
            </div><div>
                <p> Email: {email}</p>
            </div><div>
                <p> Emmail Verified: {emailVerified ? 'Yes' : 'Not yet' }</p>
            </div>
            <div>
                <p> ID: {uid}</p>
            </div></>
      
    );
  }
  return (
    <>
      <div>
        <p>No user found.</p>
      </div>
    </>
  );
}

export default Profile;
