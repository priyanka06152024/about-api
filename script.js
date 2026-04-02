// const btn =document.getElementsByClassName("btn");
// async function getData() {
//     let getApiData = await fetch('https://fake-json-api.mock.beeceptor.com/users');
//     console.log(getApiData);
// }
// getData();



// let data = document.getElementById("data");
// function printData(result){
// result.forEach(element => {

//   data.innerHTML+=`
//   <div class="card">
//   <div class="photo">
//   <img src="${element.photo}"/>
//   </div>
//   <div class="content">
//   <p>${element.name}</p>
//   <p>${element.company}</p>
//    <p>${element.username}</p>
//    <p>${element.email}</p>
//     <p>${element.address}</p>
//     <p>${element.zip}</p>
//     <p>${element.state}</p>
//     <p>${element.country}</p>
//      <p>${element.phone}</p>
//      </div>
//   </div>`



//   });

// }

// async function getData() {
//   const url = `https://fake-json-api.mock.beeceptor.com/users/1`;
//   try {
//     const response = await fetch(url);
//     console.log(response);
//     if (!response.ok) {
//       throw new Error(`Response status: ${response.status}`);
//     }

//     const result = await response.json();
//     console.log(result);
//      printData(result);

//   } catch (error) {
//     console.error(error.message);
//   }


// }
// getData();

const enterBtn = document.getElementById("btn-1")
// console.log(enterBtn);
const text = document.getElementById("text");
// console.log(text);
enterBtn.addEventListener('click', function () {
  // text.innerHTML = "hello cherry"



  async function registeruser() {
    const url = "https://library-management-api-i6if.onrender.com/api/users/register";
    try {
      const response = await fetch(url, {
        method: "Post",
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify({
          fullname: 'cherry',
          email: 'cherry123@gmail.com',
          password: '@cherry987'
        })

      });
      console.log(response);
      const data = await response.json();
      console.log(data);

    }

    catch (error) {
      console.error(error.message);
    }

  }



  async function loginuser() {
    const loginUrl = "https://library-management-api-i6if.onrender.com/api/users/login";
    try {
      const loginResponse = await fetch(loginUrl, {
        method: "Post",
        headers: {
          "content-type": "application/json"
        },
        body: JSON.stringify({
          email: 'cherry123@gmail.com',
          password: '@cherry987'
        })
      });
      const loginData = await loginResponse.json();
      console.log(loginData);
      savetoken(loginData);
     
    }

    catch (error) {
      console.error(error.message);
    }

  }

  loginuser();

  function savetoken(loginData) {

    localStorage.setItem("token", loginData.token);
  }

 


});

const logout = document.querySelector("#btn-2");
logout.addEventListener('click' , (loginData)=>{
   function userLogout(loginData) {
  localStorage.removeItem("token", loginData.token);
}
userLogout(loginData);
 

});




