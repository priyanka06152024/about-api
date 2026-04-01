
const queryString = window.location.search;
const getid = queryString.split("?")[1];
let databook = document.querySelector(".bookdata");

console.log(getid);
window.addEventListener('load', () => {
    



    async function bookdata() {
        const url2 = `https://library-management-api-i6if.onrender.com/api/books/${getid}`;
        try {
            const bookresponse = await fetch(url2);
            if (!bookresponse.ok) {
                throw new Error(`Response Status: ${bookresponse.status}`);
            }
            const bookresult = await bookresponse.json();
            console.log(bookresult);
            const bookinfo = bookresult.book;
              
            showbook(bookinfo);
        }
        catch (error) {
            console.error(error.message);
        }
    }
   
    bookdata();
   
    function showbook(bookinfo){
        console.log(bookinfo);
        databook.innerHTML += `<div class="data">
        <p>${bookinfo.title}</p>
        <div class="">
          <img src="${bookinfo?.coverImage}"/>
          </div>
          <div class="">
          <p>${bookinfo?.author}</p>
         <p>${bookinfo?.category}</p>
         <p>${bookinfo?.publishedYear}</p>
         </div>
        </div>`   
}


});
