import React, {useState} from "react";
import firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyDsyq5gTXanxJT-JGXtSeT-Z3IyeOYaumU",
  authDomain: "snoopdog-1564250854676.firebaseapp.com",
  databaseURL: "https://snoopdog-1564250854676.firebaseio.com",
  projectId: "snoopdog-1564250854676",
  storageBucket: "gs://snoopdog-1564250854676.appspot.com/",
  messagingSenderId: "93914309088",
  appId: "1:93914309088:web:f6d96c76c7223413"
};
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Points to the root reference
var storageRef = firebase.storage().ref();





const useForm = (callback) => {

    const [inputs, setInputs] = useState({});

    //----------------------------------------

const uploadFile = (file) => {
  file = file.target.files[0];
  console.log("test");

  // Create the file metadata
  var metadata = {
    contentType: 'image/jpeg',
  };

  // Points to 'images'
var imagesRef = storageRef.child('images');

// Points to 'images/space.jpg'
// Note that you can use variables to create child values
var fileName = file.name;
var spaceRef = imagesRef.child(fileName);

// File path is 'images/space.jpg'
var path = spaceRef.fullPath;

// File name is 'space.jpg'
var name = spaceRef.name;
console.log(path, name)
// Points to 'images'
// var imagesRef = spaceRef.parent;

  // Upload file and metadata to the object 'images/mountains.jpg'
  var uploadTask = storageRef.child('images/' + file.name).put(file, metadata);

  // Listen for state changes, errors, and completion of the upload.
  uploadTask.on(
    firebase.storage.TaskEvent.STATE_CHANGED, // or 'state_changed'
    function(snapshot) {
      // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
      var progress = snapshot.bytesTransferred / snapshot.totalBytes * 100;
      console.log('Upload is ' + progress + '% done');
      
      switch (snapshot.state) {
        case firebase.storage.TaskState.PAUSED: // or 'paused'
          console.log('Upload is paused');
          break;
        case firebase.storage.TaskState.RUNNING: // or 'running'
          console.log('Upload is running');
          break;
      }
    },
    function(error) {
      // Errors list: https://firebase.google.com/docs/storage/web/handle-errors
      switch (error.code) {
        case 'storage/unauthorized':
          // User doesn't have permission to access the object
          break;

        case 'storage/canceled':
          // User canceled the upload
          break;

        case 'storage/unknown':
          // Unknown error occurred, inspect error.serverResponse
          break;
      }
    },
    function() {
      // Upload completed successfully, now we can get the download URL
      var downloadURL = uploadTask.snapshot.downloadURL;
      var starsRef = storageRef.child('images/' + name);

      // Get the download URL
      starsRef.getDownloadURL().then(function(url) {
        localStorage.setItem("img", url);
        // return {...inputs, img: url}
      })
      
    }
  );
}


//---------------------------------------------

    const handleSubmit = (event) => {
      console.log(event);
      if (event) {
        event.preventDefault();
      }
    }
    const handleInputChange = (event) => {
      event.persist();
      setInputs(inputs => ({...inputs, [event.target.name]: event.target.value}));
    }
    return {
      handleSubmit,
      handleInputChange,
      uploadFile,
      inputs
    };
  }

export default useForm;