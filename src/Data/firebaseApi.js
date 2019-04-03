import firebase from "firebase";
import { RFC_2822 } from "moment";

var config = {
  apiKey: "AIzaSyCLEtHY-5nBLvuRnjYqPuYfdA-R55KHNuQ",
  authDomain: "fir-practice-2935f.firebaseapp.com",
  databaseURL: "https://fir-practice-2935f.firebaseio.com",
  projectId: "fir-practice-2935f",
  storageBucket: "fir-practice-2935f.appspot.com",
  messagingSenderId: "976888751003"
};
firebase.initializeApp(config);

var database = firebase.database();
/*
export const getShortDescriptionFromFireBase = async (path) => {
    // return database.ref(path).once("value").then(snapshot => snapshot.val());
 let response = await  
    database
    .ref(path)
    .once("value")
    .then(function(snapshot) {
      if (snapshot.val()) {
        console.log("Fetched data is: ", snapshot.val());
        return snapshot.val();
      } else {
        console.log("No data exists at specified position yet.");
        return "Found No Data";
      }
    })
    .catch(function(error) {
      console.log("Error while getting short description for ", path);
    });
    console.log("Response is: ", response);
    return response;
};
*/
export async function getShortDescriptionFromFireBase(url) {
 // console.log("here part 0",url);
  let ref1 = database.ref(url);
 // console.log("here part 1", ref1);
  const resp = await ref1
    .once("value")
    .then(function(snapshot) {
      if (snapshot.val()) {
       // console.log("here part 1   asdasd",snapshot.val());
        return snapshot.val();
      }
    })
    .catch(err => console.log(err));
  const data = await resp;

  return data;
}
