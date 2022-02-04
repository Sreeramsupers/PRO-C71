import firebase from 'firebase';
require('@firebase/firestore');

//Paste your firebaseConfig here
const firebaseConfig = {
	apiKey: 'AIzaSyCsuaGvlwlJcortmzT5ogMESDjJQEFSSBE',
	authDomain: 'e-ride-app-fa80a.firebaseapp.com',
	projectId: 'e-ride-app-fa80a',
	storageBucket: 'e-ride-app-fa80a.appspot.com',
	messagingSenderId: '445725582488',
	appId: '1:445725582488:web:061b85f976988e9423dced',
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
