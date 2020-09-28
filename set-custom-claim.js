
var admin = require("firebase-admin");
var uid = process.argv[2];
var serviceAccount = require("./rafiki-app-bda3a-firebase-adminsdk-7q2w0-f0accaf796.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://rafiki-app-bda3a.firebaseio.com"
});

admin.auth().setCustomUserClaims(uid , {admin: true})
     .then( ()=> {
         console.log('custom claims set for user' , uid);
         process.exit();
     })
     .catch(error => {
         console.log('error' , error);
         process.exit(1);
     });

