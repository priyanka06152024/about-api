
const addBtn = document.querySelector("#addbtn");
const logoutBtn = document.querySelector("#logout-btn");
const user = document.querySelector(".user");

user.innerHTML = `Hello ${localStorage.getItem("fullname")}`;


// ================= GET ALL BOOKS =================

window.addEventListener('load', () => {
  getdata();
});

async function getdata() {
  const url = `https://library-management-api-i6if.onrender.com/api/books?limit=40`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Response Status: ${response.status}`);
    }

    const result = await response.json();
    const info = result.books;
      currentbook(info);
      console.log(info);
    showdata(info);

  } catch (error) {
    console.error(error.message);
  }
}


// ================= SHOW DATA =================

function showdata(info) {
  let books = document.getElementById("about-books");

  books.innerHTML = "";

  info.forEach(element => {
    books.innerHTML += `
      <a href="new.html?${element._id}" target="_blank">
        <div class="card">
          
          <div class="content">
            <p>Title : ${element.title}</p>
            <p>Author : ${element.author}</p>
            <p>Category : ${element.category}</p>
            <p>PublishedYear : ${element.publishedYear}</p>
          </div>
        </div>
      </a>
    `;
  });
}


// ================= ADD BOOK =================

addBtn.addEventListener("click", () => {

  const title = document.querySelector("#title").value;
  const author = document.querySelector("#author").value;
  const category = document.querySelector("#category").value;
  const publishedYear = document.querySelector("#publishedYear").value;

  bookdata(title, author, category, publishedYear);

});


async function bookdata(title, author, category, publishedYear) {

  const url = "https://library-management-api-i6if.onrender.com/api/books";

  try {

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "Authorization": "Bearer " + localStorage.getItem("token"),
      },
      body: JSON.stringify({
        title,
        author,
        category,
        publishedYear
      })
    });

    const data = await response.json();

    showbookdata(data);

    console.log(data);

  } catch (error) {
    console.error(error.message);
  }
}



// ================= SHOW ADDED BOOK =================

function showbookdata(data,info) {

  let bookdata = document.querySelector(".data");
  let details = document.querySelectorAll(".details");
  let moreBook = document.querySelector(".morebook");

  if (data.message === "Book created successfully") {
  

    bookdata.innerHTML = `
      <p>
      Title : ${data.book.title}<br>
      Author : ${data.book.author}<br>
      Publishedyear : ${data.book.publishedYear}<br>
      Category : ${data.book.category}
      </p>
    `;

    details.forEach(element => {
      element.classList.add("hide");
    });

    addBtn.classList.add("hide");

    moreBook.classList.remove("hide");
    moreBook.classList.add("show");

    moreBook.addEventListener("click", () => {

      details.forEach(el => {
        el.classList.remove("hide");
        el.classList.add("show");
      });

      moreBook.classList.remove("show");
      moreBook.classList.add("hide");

      addBtn.classList.remove("hide");
      addBtn.classList.add("show");

    });

    
  }

}


// ================= LOGOUT =================

logoutBtn.addEventListener('click', () => {

  localStorage.removeItem("token");
  localStorage.removeItem("fullname");

});


function currentbook(info){
  console.log(info)
  let createAt = info[0].createdAt;
  console.log(createAt);
  let updatedAt= info[1].updatedAt
   console.log(updatedAt);
  const time = [createAt,updatedAt];
  let sorttime = time.sort((a, b) => b - a);
  console.log(sorttime);
}