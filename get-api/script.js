// async function getData() {
//     const url = 'https://potterapi-fedeperin.vercel.app/en/books';
//     try{
//         const response = await fetch(url);
//         if(!response.ok){
//             throw new Error(`Response status: ${response.status}`);
//         }
//         const result = await response.json();
//         console.log(result);

//     }
//     catch(error){
//         console.error(error.message);
//     }

// }

// // function getApiData(result)

// getData();



// btn.addEventListener('click', function () {
//     let textValue = text.value;
//     console.log(textValue);
//     async function getbook() {
//         const url = 'https://book-discovery-by-readsomnia.p.rapidapi.com/search/HarryPotter';
//         const options = {
//             method: 'GET',
//             headers: {
//                 'x-rapidapi-key': '69670161f0msh81eb012ee10890dp1eaef6jsndc59e26abede',
//                 'x-rapidapi-host': 'book-discovery-by-readsomnia.p.rapidapi.com',
//                 'Content-Type': 'application/json'
//             }
//         };

//         try {
//             const response = await fetch(url, options);
//             const result = await response.text();
//             console.log(result);
//         } catch (error) {
//             console.error(error);
//         }
//     }

//     getbook();

//     function search(items) {
//         // console.log(result)
//         items.forEach(element => {

//             books.innerHTML += `<div class="card">
//         <div class="photo">
//         <img src="${element.volumeInfo.imageLinks.thumbnail}"/>
//         </div>
//         <div class="content">
//         <p>${element.volumeInfo.title}
//         <p>${element.volumeInfo.description}</p>
//         <p>${element.volumeInfo.authors ? element.volumeInfo.authors : "unnown authors"}</p>
//         <p>${element.volumeInfo.publishedDate}</p>
//         </div>
//         </div>`



//         });

//     }

// });


let text = document.querySelector(".search-book");
let btn = document.querySelector(".btn");

let books = document.getElementById("about-books");

window.addEventListener('load', () => {
    async function getdata() {
        const url = `https://library-management-api-i6if.onrender.com/api/books`;
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`Response Status: ${response.status}`);
            }

            const result = await response.json();
            // console.log(result);
            const info = result.books;
            showdata(info);

        }
        catch (error) {
            console.error(error.message);
        }
    }



    
    getdata();
   ;
    function showdata(info) {
        info.forEach(element => {
            books.innerHTML += `<a href="new.html?${element._id}" target="_blank alt=""> <div class="card">
         <div class="photo">
          <img src="${element.coverImage}"/>
          </div>
          <div class="content">
          <p>${element.title}</p>
          <p>${element.author}</p>
         <p>${element.category}</p>
         <p>${element.publishedYear}</p>
         </div>
        </div></a>`
        });
    }
    
    


});
