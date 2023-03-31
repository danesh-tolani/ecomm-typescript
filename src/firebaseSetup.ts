import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBAzBk3uzgM4fUgSx18epfUfNozZcrpxiA",
  authDomain: "ecomm-typescript.firebaseapp.com",
  projectId: "ecomm-typescript",
  storageBucket: "ecomm-typescript.appspot.com",
  messagingSenderId: "477949663340",
  appId: "1:477949663340:web:21e96ed919ead6a6eb6049",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export default app;
