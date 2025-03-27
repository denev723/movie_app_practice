import { initializeApp } from "firebase/app";
import { getAuth, GithubAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA-6RvKwdatLxQQzX-xC1bT2zVbFz7bn2k",
  authDomain: "my-movie-app-fe5a3.firebaseapp.com",
  projectId: "my-movie-app-fe5a3",
  appId: "1:439759451394:web:77099cd1a96c70fdfebe1b",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const githubProvider = new GithubAuthProvider();

export { auth, githubProvider };
