  const firebaseConfig = {
    apiKey: "AIzaSyDFhjtTzRg466bZPhOTlu47dD3Onhj_P0M",
    authDomain: "liqueapprentice.firebaseapp.com",
    databaseURL: "https://liqueapprentice.firebaseio.com",
    projectId: "liqueapprentice",
    storageBucket: "liqueapprentice.appspot.com",
    messagingSenderId: "599693877190",
    appId: "1:599693877190:web:ec2c9e4b8a8dbe39"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

//get elements

const txtEmail = document.getElementById('txtEmail');
const txtPassword = document.getElementById('txtPassword');
const btnLogin = document.getElementById('btnLogin');
const btnSignUp = document.getElementById('btnSignUp');
const btnLogout = document.getElementById('btnLogout');

//login event
btnLogin.addEventListener('click', e => {
    //get email and pass
    const email = txtEmail.value;
    const pass = txtPassword.value;
    const auth = firebase.auth();
    //sign in
    auth.signInWithEmailAndPassword(email,pass);
    promise.catch(e => console.log(e.message));
});
