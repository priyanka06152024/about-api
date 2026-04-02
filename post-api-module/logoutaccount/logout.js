const title = document.querySelector("#title").value;
const author = document.querySelector("#author").value;

async function bookdata() {
  const url = "https://library-management-api-i6if.onrender.com	/api/books";
  try {
    const response = await fetch(url, {
      method: "Post",
      headers: {
        "content-type": "applicatin/json"
      },
      body: JSON.stringify({
        title:title,
        author:author
      })
    });

    const data = await response.json();
    console.log(data);

  }
  catch(error){
    console.error(error.message);
  }
  
  }

const logoutBtn = document.querySelector("#logout-btn");

user = document.querySelector(".user");
user.innerHTML = `Hello ${localStorage.getItem("fullname")}`
logoutBtn.addEventListener('click', () => {
  localStorage.removeItem("token");
  localStorage.removeItem("fullname");




});