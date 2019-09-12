import * as firebase from "firebase";
import 'firebase/firestore'

var firebaseConfig = {
  apiKey: "AIzaSyBaOPuAtESwSKKkpoySW-VMoMpqj1IXrfY",
  authDomain: "bloodbank-be239.firebaseapp.com",
  databaseURL: "https://bloodbank-be239.firebaseio.com",
  projectId: "bloodbank-be239",
  storageBucket: "bloodbank-be239.appspot.com",
  messagingSenderId: "475039589278",
  appId: "1:475039589278:web:e5c4d2112852bd44"
};
firebase.initializeApp(firebaseConfig);

var db = firebase.firestore();

export function signup(name, email, psw, navigation) {
  return (dispatch) => {
    dispatch({ type: 'START_LOADER' })
    firebase.auth().createUserWithEmailAndPassword(email, psw).then(function (user) {
      dispatch({ type: 'SAVE_USER', payload: { name, email: user.user.email, uid: user.user.uid } })
      db.collection("users").add({
        name,
        email: user.user.email,
        uid: user.user.uid,
      })
        .then(() => {
          dispatch({ type: 'STOP_LOADER' })
          navigation.navigate('App')
        })
        .catch((error) => {
          dispatch({ type: 'STOP_LOADER' })
          alert(error.message)
        })
    })
  }
}


export function signin(email, psw, navigation) {
  return (dispatch) => {
    dispatch({ type: 'START_LOADER' })
    firebase.auth().signInWithEmailAndPassword(email, psw)
      .then(function (user) {
        db.collection("users").where("uid", "==", user.user.uid).get()
          .then(function (querySnapshot) {
            querySnapshot.forEach(function (doc) {
              dispatch({ type: 'SAVE_USER', payload: { name: doc.data().name, email: user.user.email, uid: user.user.uid } })
            })
          })
      }).then(() => {
        dispatch({ type: 'STOP_LOADER' })
        navigation.navigate('App')
      })
      .catch((error) => {
        dispatch({ type: 'STOP_LOADER' })
        alert(error.message)
      })
  }
}


export function savedonor(name, number, blood, Location, navigation) {
  return (dispatch) => {
    dispatch({ type: 'START_LOADER' })
    db.collection("donors").add({
      name,
      number,
      blood,
      Location,
    })
      .then(() => {
        dispatch({ type: 'STOP_LOADER' })
        navigation.navigate('Home')
      })
      .catch((error) => {
        dispatch({ type: 'STOP_LOADER' })
        alert(error.message)
      })
  }
}




export function getdonor() {
  return (dispatch) => {
    dispatch({ type: 'START_LOADER' })
    db.collection("donors").get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        let drDetail = {
          name: doc.data().name,
          number: doc.data().number,
          blood: doc.data().blood,
          Location: doc.data().Location,
        }
        dispatch({ type: "GET_DONORS", payload: drDetail })
        dispatch({ type: 'STOP_LOADER' })
      });
    });
  }
}

export function searchblood(search) {
  return (dispatch) => {
    dispatch({ type: 'START_LOADER' })
    dispatch({ type: "CLEAR" })

    if (search == "A") {
      db.collection("donors").where("blood", "==", 'A').get()
        .then(function (querySnapshot) {
          querySnapshot.forEach(function (doc) {
            let searched = {
              name: doc.data().name, number: doc.data().number,
              blood: doc.data().blood, Location: doc.data().Location,
            }
            dispatch({ type: "GET_SEARCHED", payload: searched })
            dispatch({ type: 'STOP_LOADER' })
          });
        })
        .catch((error) => {
          dispatch({ type: 'STOP_LOADER' })
          alert(error.message)
        })
      db.collection("donors").where("blood", "==", 'O').get()
        .then(function (querySnapshot) {
          querySnapshot.forEach(function (doc) {
            let searched = {
              name: doc.data().name, number: doc.data().number,
              blood: doc.data().blood, Location: doc.data().Location,
            }
            dispatch({ type: "GET_SEARCHED", payload: searched })
            dispatch({ type: 'STOP_LOADER' })
          });
        })
        .catch((error) => {
          dispatch({ type: 'STOP_LOADER' })
          alert(error.message)
        })
    }

    else if (search == "A+") {
      db.collection("donors").where("blood", "==", 'A+').get()
        .then(function (querySnapshot) {
          querySnapshot.forEach(function (doc) {
            let searched = {
              name: doc.data().name, number: doc.data().number,
              blood: doc.data().blood, Location: doc.data().Location,
            }
            dispatch({ type: "GET_SEARCHED", payload: searched })
            dispatch({ type: 'STOP_LOADER' })
          });
        })
        .catch((error) => {
          dispatch({ type: 'STOP_LOADER' })
          alert(error.message)
        })
        db.collection("donors").where("blood", "==", 'A').get()
        .then(function (querySnapshot) {
          querySnapshot.forEach(function (doc) {
            let searched = {
              name: doc.data().name, number: doc.data().number,
              blood: doc.data().blood, Location: doc.data().Location,
            }
            dispatch({ type: "GET_SEARCHED", payload: searched })
            dispatch({ type: 'STOP_LOADER' })
          });
        })
        .catch((error) => {
          dispatch({ type: 'STOP_LOADER' })
          alert(error.message)
        })
      db.collection("donors").where("blood", "==", 'O').get()
        .then(function (querySnapshot) {
          querySnapshot.forEach(function (doc) {
            let searched = {
              name: doc.data().name, number: doc.data().number,
              blood: doc.data().blood, Location: doc.data().Location,
            }
            dispatch({ type: "GET_SEARCHED", payload: searched })
            dispatch({ type: 'STOP_LOADER' })
          });
        })
        .catch((error) => {
          dispatch({ type: 'STOP_LOADER' })
          alert(error.message)
        })
    }

    else if (search == "A-") {
      db.collection("donors").where("blood", "==", 'A+').get()
        .then(function (querySnapshot) {
          querySnapshot.forEach(function (doc) {
            let searched = {
              name: doc.data().name, number: doc.data().number,
              blood: doc.data().blood, Location: doc.data().Location,
            }
            dispatch({ type: "GET_SEARCHED", payload: searched })
            dispatch({ type: 'STOP_LOADER' })
          });
        })
        .catch((error) => {
          dispatch({ type: 'STOP_LOADER' })
          alert(error.message)
        })
        db.collection("donors").where("blood", "==", 'A-').get()
        .then(function (querySnapshot) {
          querySnapshot.forEach(function (doc) {
            let searched = {
              name: doc.data().name, number: doc.data().number,
              blood: doc.data().blood, Location: doc.data().Location,
            }
            dispatch({ type: "GET_SEARCHED", payload: searched })
            dispatch({ type: 'STOP_LOADER' })
          });
        })
        .catch((error) => {
          dispatch({ type: 'STOP_LOADER' })
          alert(error.message)
        })
        db.collection("donors").where("blood", "==", 'A').get()
        .then(function (querySnapshot) {
          querySnapshot.forEach(function (doc) {
            let searched = {
              name: doc.data().name, number: doc.data().number,
              blood: doc.data().blood, Location: doc.data().Location,
            }
            dispatch({ type: "GET_SEARCHED", payload: searched })
            dispatch({ type: 'STOP_LOADER' })
          });
        })
        .catch((error) => {
          dispatch({ type: 'STOP_LOADER' })
          alert(error.message)
        })
      db.collection("donors").where("blood", "==", 'O').get()
        .then(function (querySnapshot) {
          querySnapshot.forEach(function (doc) {
            let searched = {
              name: doc.data().name, number: doc.data().number,
              blood: doc.data().blood, Location: doc.data().Location,
            }
            dispatch({ type: "GET_SEARCHED", payload: searched })
            dispatch({ type: 'STOP_LOADER' })
          });
        })
        .catch((error) => {
          dispatch({ type: 'STOP_LOADER' })
          alert(error.message)
        })
    }

    else if (search == "O") {
      db.collection("donors").where("blood", "==", 'O').get()
        .then(function (querySnapshot) {
          querySnapshot.forEach(function (doc) {
            let searched = {
              name: doc.data().name, number: doc.data().number,
              blood: doc.data().blood, Location: doc.data().Location,
            }
            dispatch({ type: "GET_SEARCHED", payload: searched })
            dispatch({ type: 'STOP_LOADER' })
          });
        })
        .catch((error) => {
          dispatch({ type: 'STOP_LOADER' })
          alert(error.message)
        })
    }


    else if (search == "B") {
      db.collection("donors").where("blood", "==", 'B').get()
        .then(function (querySnapshot) {
          querySnapshot.forEach(function (doc) {
            let searched = {
              name: doc.data().name, number: doc.data().number,
              blood: doc.data().blood, Location: doc.data().Location,
            }
            dispatch({ type: "GET_SEARCHED", payload: searched })
            dispatch({ type: 'STOP_LOADER' })
          });
        })
        .catch((error) => {
          dispatch({ type: 'STOP_LOADER' })
          alert(error.message)
        })
        db.collection("donors").where("blood", "==", 'B+').get()
        .then(function (querySnapshot) {
          querySnapshot.forEach(function (doc) {
            let searched = {
              name: doc.data().name, number: doc.data().number,
              blood: doc.data().blood, Location: doc.data().Location,
            }
            dispatch({ type: "GET_SEARCHED", payload: searched })
            dispatch({ type: 'STOP_LOADER' })
          });
        })
        .catch((error) => {
          dispatch({ type: 'STOP_LOADER' })
          alert(error.message)
        })
      db.collection("donors").where("blood", "==", 'O').get()
        .then(function (querySnapshot) {
          querySnapshot.forEach(function (doc) {
            let searched = {
              name: doc.data().name, number: doc.data().number,
              blood: doc.data().blood, Location: doc.data().Location,
            }
            dispatch({ type: "GET_SEARCHED", payload: searched })
            dispatch({ type: 'STOP_LOADER' })
          });
        })
        .catch((error) => {
          dispatch({ type: 'STOP_LOADER' })
          alert(error.message)
        })
    }


    else if (search == "AB") {
      db.collection("donors").where("blood", "==", 'AB').get()
        .then(function (querySnapshot) {
          querySnapshot.forEach(function (doc) {
            let searched = {
              name: doc.data().name, number: doc.data().number,
              blood: doc.data().blood, Location: doc.data().Location,
            }
            dispatch({ type: "GET_SEARCHED", payload: searched })
            dispatch({ type: 'STOP_LOADER' })
          });
        })
        .catch((error) => {
          dispatch({ type: 'STOP_LOADER' })
          alert(error.message)
        })
      db.collection("donors").where("blood", "==", 'O').get()
        .then(function (querySnapshot) {
          querySnapshot.forEach(function (doc) {
            let searched = {
              name: doc.data().name, number: doc.data().number,
              blood: doc.data().blood, Location: doc.data().Location,
            }
            dispatch({ type: "GET_SEARCHED", payload: searched })
            dispatch({ type: 'STOP_LOADER' })
          });
        })
        .catch((error) => {
          dispatch({ type: 'STOP_LOADER' })
          alert(error.message)
        })
      db.collection("donors").where("blood", "==", 'B').get()
        .then(function (querySnapshot) {
          querySnapshot.forEach(function (doc) {
            let searched = {
              name: doc.data().name, number: doc.data().number,
              blood: doc.data().blood, Location: doc.data().Location,
            }
            dispatch({ type: "GET_SEARCHED", payload: searched })
            dispatch({ type: 'STOP_LOADER' })
          });
        })
        .catch((error) => {
          dispatch({ type: 'STOP_LOADER' })
          alert(error.message)
        })
      db.collection("donors").where("blood", "==", 'A').get()
        .then(function (querySnapshot) {
          querySnapshot.forEach(function (doc) {
            let searched = {
              name: doc.data().name, number: doc.data().number,
              blood: doc.data().blood, Location: doc.data().Location,
            }
            dispatch({ type: "GET_SEARCHED", payload: searched })
            dispatch({ type: 'STOP_LOADER' })
          });
        })
        .catch((error) => {
          dispatch({ type: 'STOP_LOADER' })
          alert(error.message)
        })
    }

    else {
      alert('Please Enter Valid Blood Group')
    }

  }
}



export function posting(name, number, blood, Location, navigation) {
  return (dispatch) => {
    dispatch({ type: 'START_LOADER' })
    db.collection("reqs").add({
      name,
      number,
      blood,
      Location,
    })
      .then(() => {
        dispatch({ type: 'STOP_LOADER' })
        navigation.navigate('requests')
      })
      .catch((error) => {
        dispatch({ type: 'STOP_LOADER' })
        alert(error.message)
      })
  }
}


export function geting() {
  return (dispatch) => {
    dispatch({ type: 'START_LOADER' })
    db.collection("users").get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        let reqDetail = {
          name: doc.data().name, number: doc.data().number,
          blood: doc.data().blood, Location: doc.data().Location,
        }
        dispatch({ type: "GET_REQS", payload: reqDetail })
        dispatch({ type: 'STOP_LOADER' })
      });
    });
  }
}