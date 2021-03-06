import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'


const config = {
    apiKey: "AIzaSyApl9RTufDQhc15ua-zgGLuJGOKk7q_Kck",
    authDomain: "crwn-db-d12e4.firebaseapp.com",
    projectId: "crwn-db-d12e4",
    storageBucket: "crwn-db-d12e4.appspot.com",
    messagingSenderId: "175423585479",
    appId: "1:175423585479:web:3f286905363d835d2f52e2"
  };

export const createUserProfileDocument = async (userAuth, additionalData) =>  {
  if(!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName, 
        email,
        createdAt,
        ...additionalData 
      })
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }
  
  return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;