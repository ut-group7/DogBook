// import React, { useState } from "react";
// import Form from "../../Components/Form/Form";
// import imageUrl from "../Content/lost-dog.jpg";
// import firebase from 'firebase';
// import axios from 'axios';
// import "./SeenPost.css";

// //------------------------------------

// var firebaseConfig = {
//   apiKey: "AIzaSyDsyq5gTXanxJT-JGXtSeT-Z3IyeOYaumU",
//   authDomain: "snoopdog-1564250854676.firebaseapp.com",
//   databaseURL: "https://snoopdog-1564250854676.firebaseio.com",
//   projectId: "snoopdog-1564250854676",
//   storageBucket: "gs://snoopdog-1564250854676.appspot.com/",
//   messagingSenderId: "93914309088",
//   appId: "1:93914309088:web:f6d96c76c7223413"
// };
//   // Initialize Firebase
// firebase.initializeApp(firebaseConfig);

// // Points to the root reference
// var storageRef = firebase.storage().ref();




// function uploadFile(file) {
//   // Create the file metadata
//   var metadata = {
//     contentType: 'image/jpeg',
//   };

//   // Points to 'images'
// var imagesRef = storageRef.child('images');

// // Points to 'images/space.jpg'
// // Note that you can use variables to create child values
// var fileName = file.name;
// var spaceRef = imagesRef.child(fileName);

// // File path is 'images/space.jpg'
// var path = spaceRef.fullPath;

// // File name is 'space.jpg'
// var name = spaceRef.name;

// // Points to 'images'
// var imagesRef = spaceRef.parent;

//   // Upload file and metadata to the object 'images/mountains.jpg'
//   var uploadTask = storageRef.child('images/' + file.name).put(file, metadata);

//   // Listen for state changes, errors, and completion of the upload.
//   uploadTask.on(
//     firebase.storage.TaskEvent.STATE_CHANGED, // or 'state_changed'
//     function(snapshot) {
//       // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
//       var progress = snapshot.bytesTransferred / snapshot.totalBytes * 100;
//       console.log('Upload is ' + progress + '% done');
//       switch (snapshot.state) {
//         case firebase.storage.TaskState.PAUSED: // or 'paused'
//           console.log('Upload is paused');
//           break;
//         case firebase.storage.TaskState.RUNNING: // or 'running'
//           console.log('Upload is running');
//           break;
//       }
//     },
//     function(error) {
//       // Errors list: https://firebase.google.com/docs/storage/web/handle-errors
//       switch (error.code) {
//         case 'storage/unauthorized':
//           // User doesn't have permission to access the object
//           break;

//         case 'storage/canceled':
//           // User canceled the upload
//           break;

//         case 'storage/unknown':
//           // Unknown error occurred, inspect error.serverResponse
//           break;
//       }
//     },
//     function() {
//       // Upload completed successfully, now we can get the download URL
//       var downloadURL = uploadTask.snapshot.downloadURL;
//       console.log(storageRef.child(fileName));
//     }
//   );
// }


// //------------------------------------
// const Post = function Post(props) {


//   const [dogBreed, setDogBreed] = useState("");
//   const [contactName, setContactName] = useState("");
//   const [contactNumber, setContactNumber] = useState("");
//   const [dogSize, setDogSize] = useState("");
//   const [reward, setReward] = useState("");
//   const [notes, setNotes] = useState("");
//   const [dogColor, setDogColor] = useState("");
//   const [img] = useState("");

//   const [data, setData] = useState([]);

//   const handleSubmit = event => {
//     event.preventDefault();
//     const input = {
//       dogBreed: dogBreed,
//       contactName: contactName,
//       contactNumber: contactNumber,
//       dogSize: dogSize,
//       reward: reward,
//       notes: notes,
//       dogColor: dogColor,
//       user: props.userId,
//       img: img
//     };
//     const options = {
//       headers: { "Content-Type": "application/json" },
//       method: "POST",
//       body: JSON.stringify(input)
//     };
//     fetch("http://localhost:3030/api/lostDogs", options)
//       .then(res => res.json())
//       .then(res => setData([...data, res]))
//       .catch(err => console.log("request failed" + err));
//   };

//   const handleInputChange = event => {
//     const { name, value } = event.target;
//     switch (name) {
//       case "dogBreed":
//         setDogBreed(value);
//         break;
//       case "contactName":
//         setContactName(value);
//         break;
//       case "contactNumber":
//         setContactNumber(value);
//         break;
//       case "dogSize":
//         setDogSize(value);
//         break;
//       case "dogColor":
//         setDogColor(value);
//         break;
//       case "reward":
//         setReward(value);
//         break;
//       case "notes":
//         setNotes(value);
//         break;
//       case "img":
//         uploadFile(event.target.files[0]);
//         break;
//       default:
//         break;
//     }
//   };

//   return (
//     <div className="Lost-page">
//       <div className="App-content">
//         <h2>Post Lost Dog</h2>
//         <Form change={handleInputChange} submit={handleSubmit} />
//         <a href="/Lost">Back to lost dogs</a>
//       </div>
//     </div>
//   );
// };

// export default Post;
