import { initializeApp } from "firebase/app";

import { getDatabase } from "firebase/database";


const firebaseConfig = {

  apiKey: "AIzaSyDXLeFpbcTFeVx4hz8voERA-G6YN6aGiWY",

  authDomain: "college-bus-tracker-6b510.firebaseapp.com",

  databaseURL: "https://college-bus-tracker-6b510-default-rtdb.asia-southeast1.firebasedatabase.app/",

  projectId: "college-bus-tracker-6b510",

  storageBucket: "college-bus-tracker-6b510.firebasestorage.app",

  messagingSenderId: "346794724295",

  appId: "1:346794724295:web:f71569814b4593a065e7e2"

};


const app = initializeApp(firebaseConfig);

export const database = getDatabase(app);