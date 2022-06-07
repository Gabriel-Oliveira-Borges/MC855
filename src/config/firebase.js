import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyAyeekdMc3Q_fLA5vRS42GbQdXfkEwshlg",
	authDomain: "mc855-69935.firebaseapp.com",
	projectId: "mc855-69935",
	storageBucket: "mc855-69935.appspot.com",
	messagingSenderId: "888560475223",
	appId: "1:888560475223:web:5065ece566413fe4975712",
	measurementId: "G-9C93CXNJGB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
const firestore = getFirestore(app);

export default firestore;