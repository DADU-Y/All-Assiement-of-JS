var firebaseConfig = {
  apiKey: "AIzaSyBDFCBmXQiKmqMeytTdFT8dLCcdW0o24oU",
  authDomain: "tahir-client-website.firebaseapp.com",
  databaseURL: "https://tahir-client-website-default-rtdb.firebaseio.com",
  projectId: "tahir-client-website",
  storageBucket: "tahir-client-website.firebasestorage.app",
  messagingSenderId: "826492513351",
  appId: "1:826492513351:web:77fe45b740cde29d309562"
};

// Initialize Firebase
var app = firebase.initializeApp(firebaseConfig);

function sendWhatsApp() {
  var name = document.getElementById("name").value;
  var number = document.getElementById("number").value;
  var city = document.getElementById("city").value;
  var product = document.getElementById("product").value;

  if (name === "" || number === "" || city === "" || product === "") {
    Swal.fire({
      icon: 'warning',
      title: 'Oops...',
      text: 'Please fill all the fields!'
    });
    return;
  }

  var message = "Hi I am interested to buy product in your Tahir Kids Web" +
    "Name: " + name + " Number: " + number + " City/Address: " + city + " Product:" + product;

  var link = "https://wa.me/923701335490?text=" + message;
  window.open(link);

  function sendDatabase(){
    var userInformation = {
      userName:name,
      userNumber:number,
      userCity:city,
      userProduct:product
    }
    firebase.database().ref("Buyer").push(userInformation);
  }

  sendDatabase();
}    
