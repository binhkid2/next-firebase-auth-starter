
import { getApp, getApps, initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth, GoogleAuthProvider ,GithubAuthProvider} from 'firebase/auth'


// TODO: Replace the following with your app's Firebase project configuration

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_APIKEY,
	authDomain: process.env.NEXT_PUBLIC_AUTHDOMAIN,
	projectId: process.env.NEXT_PUBLIC_PROJECTID,
	storageBucket: process.env.NEXT_PUBLIC_STORAGEBUCKET,
	messagingSenderId: process.env.NEXT_PUBLIC_MESSAGINGSENDERID,
	appId: process.env.NEXT_PUBLIC_APPID,
  measurementId:process.env.NEXT_PUBLIC_MEASUREMENT_ID,
};


const app = getApps().length ? getApp() : initializeApp(firebaseConfig)

const db = getFirestore(app)

const auth = getAuth(app)

const providerGoogle = new GoogleAuthProvider()
const providerGithub = new GithubAuthProvider();
export { db, auth, providerGoogle ,providerGithub}