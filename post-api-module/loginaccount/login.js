const loginBtn = document.querySelector(".login-btn");

loginBtn.addEventListener('click', () => {
    let email = document.querySelector("#email").value;
    let password = document.querySelector("#password").value;
    console.log("hello")
    async function loginuser() {
        const loginUrl = "https://library-management-api-i6if.onrender.com/api/users/login";
        try {
            const loginResponse = await fetch(loginUrl, {
                method: "Post",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify({
                    email: email,
                    password: password
                })

            })
            const loginData = await loginResponse.json();
            // if(loginData.message === "Login successful"){
            //     location.replace("http://127.0.0.1:5500/post-api-module/logoutaccount/logout.html");
            // }
            console.log(loginData);
            savetoken(loginData);


        }

        catch (error) {
            console.error(error.message);
        }

    }

    loginuser();

    function savetoken(loginData) {
        localStorage.setItem("token", loginData.token)
         localStorage.setItem("fullname", loginData.user.fullname)

    }

});
