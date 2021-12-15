import 'firebase/storage';
import  firebase  from 'firebase/app';
  const firebaseConfig_uploadImg= {
    apiKey: 'AIzaSyCIhTdWK_MLBADGH5G8Rp3buQBPeDq0PW8',
    authDomain: 'upload-image-9b971.firebaseapp.com',
    projectId: 'upload-image-9b971',
    storageBucket: 'upload-image-9b971.appspot.com',
    messagingSenderId: '820137042225',
    appId: '1:820137042225:web:70ed2e330abe1317c7d010',
    measurementId: 'G-LYGWFXB5RT',
  };
  firebase.initializeApp(firebaseConfig_uploadImg);
  const storage = firebase.storage()
export {storage};