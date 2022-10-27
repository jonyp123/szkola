import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "@firebase/firestore";

const firebaseConfig = {

  apiKey: "AIzaSyDdcCRnaqvCNvdMpL1PfPd2xlC-Ez38zpg",

  authDomain: "schoolproject-532fc.firebaseapp.com",

  projectId: "schoolproject-532fc",

  storageBucket: "schoolproject-532fc.appspot.com",

  messagingSenderId: "885362269170",

  appId: "1:885362269170:web:65ecb23f988eccbe55296b",

  measurementId: "G-2FZ1CDBZVB"

};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);