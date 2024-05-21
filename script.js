let header = document.getElementById('header');
let section1 = document.getElementById('section1');
let loginForm = document.getElementById('loginForm');
let section3 = document.getElementById('section3');
let section4 = document.getElementById('section4');
let section6 = document.getElementById('section6');
let login = document.getElementById('login');
let username = document.getElementById('username');
let greet = document.getElementById('greet');

let day = new Date();
let currenHour = day.getHours();

login.addEventListener('click', function () {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    // Check if username meets certain criteria, e.g., not empty
    if (username.trim() === "") {
      alert("Please enter a username.");
      return;
    }
  
    // Perform authentication with username and password
    // Replace this with your authentication logic
    if (username === "Harry2020moreno" && password === "Harry0129$$") {
      alert("Login successful!");
      setTimeout(() => {
        header.style.display = 'none'
        section1.style.display = 'none'
        loginForm.style.display = 'none'
        section3.style.display = 'none'
        section4.style.display = 'block'
        greet.style.display = 'block'
        if(currenHour > 0 && currenHour <=11) {
          greet.innerHTML = `Good Morning, Harry`;
        }else if(currenHour > 11 && currenHour <= 16){
          greet.innerHTML = `Good Afternoon, Harry`;
        }else{
          greet.innerHTML = `Good Evening, Harry`;
        }
    }, 2000);
      
      // Redirect or perform further actions upon successful login
    } else {
      alert("Invalid username or password.");
    }
    
});

function signout() {
  header.style.display = 'none'
  section1.style.display = 'none'
  loginForm.style.display = 'none'
  section3.style.display = 'none'
  section4.style.display = 'none'
  greet.style.display = 'none'
  section6.style.display = 'block'

}


