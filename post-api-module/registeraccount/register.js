const registerBtn = document.querySelector(".register-btn");



  



registerBtn.addEventListener('click', () => {
   
    let fullName = document.querySelector("#name").value;
    let email = document.querySelector("#email").value;
    let password = document.querySelector("#password").value;
    console.log(fullName);
    async function registerUser() {
        const url = "https://library-management-api-i6if.onrender.com/api/users/register";
        try {
            console.log(fullName, email, password);
            const response = await fetch(url, {
                method: "Post",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify({
                    fullname: fullName,
                    email: email,
                    password: password
                })

            });



            const data = await response.json();
            console.log(data);
            if (data.message === "User created successfully") {
                location.replace("http://127.0.0.1:5500/post-api-module/loginaccount/login.html");
            }
           
        }
        catch (error) {
            console.log("hello");
            console.error(error.message);
           
        }

    }


    registerUser();


});

