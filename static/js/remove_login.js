document.getElementById("logout").onclick = function () {
    logout();
  };

document.getElementById("google").onclick = function () {
    signinwithgoogle();
};

function logout() {
    firebase
      .auth()
      .signOut()
      .then(function () {
        alert("logout successful");
      })
      .catch(function (error) {
        alert("an error happened");
      });
      document.getElementById("google").style.display = "block";
      document.getElementById("logout").style.display = "none";
  }

function signinwithgoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(function (result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        document.getElementById("google").style.display = "none";
        document.getElementById("logout").style.display = "block";
        $("#profile").css('display', 'block');
        alert('Login successful');

      })
      .catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        alert(errorCode);
        // ...
      });
  }
  
firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        document.getElementById("google").style.display = "none";
        document.getElementById("logout").style.display = "block";
        $("#profile").css('display', 'block');
        $.ajax({
            data: {
              name: user.displayName,
              id: user.uid,
              photoURL: user.photoURL,
            },
            type: "POST",
            url: "/setupfirebase",
          }).done(function (data) {
          });
        
    }
});
