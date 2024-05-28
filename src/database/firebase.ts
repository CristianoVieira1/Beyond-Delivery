import {initializeApp} from 'firebase/app';
import {getDatabase} from 'firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyCMq-O1HHCL9yt5A0G0M4QQst2xUu5rZ1E',
  authDomain: 'deliveryspacex.firebaseapp.com',
  projectId: 'deliveryspacex',
  storageBucket: 'deliveryspacex.appspot.com',
  messagingSenderId: '346785538671',
  appId: '1:346785538671:web:ef7985ab0185958a85239a',
  measurementId: 'G-EKRSHQBZJ7',
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export {db};
