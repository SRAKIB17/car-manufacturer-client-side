// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBAmhoxgDUPK_lbiYQslWji9azbnNkQfd4",
  authDomain: "grocery-warehouse-e95eb.firebaseapp.com",
  projectId: "grocery-warehouse-e95eb",
  storageBucket: "grocery-warehouse-e95eb.appspot.com",
  messagingSenderId: "622234855952",
  appId: "1:622234855952:web:4dee904ccfd210b4f0f895"
};

// const ff = {
//   apiKey:process.env.REACT_APP_apiKey,
//   authDomain: process.env.REACT_APP_authDomain,
//   projectId: process.env.REACT_APP_projectId,
//   storageBucket: process.env.REACT_APP_storageBucket,
//   messagingSenderId: process.env.REACT_APP_messagingSenderId,
//   appId: process.env.REACT_APP_appId
// };

// console.log(ff)

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;

