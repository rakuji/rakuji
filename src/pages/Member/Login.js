import React,{ useEffect} from "react";
import  { Redirect,useHistory } from 'react-router-dom'
import "./css/my-login.css"
// import "./css/reset.css"



function Login(props) {
    const { auth, setAuth } = props
    const history = useHistory()
    const sesStorage  = sessionStorage;
    
    useEffect(()=>{
        const submitBtn = document.querySelector("#submitBtn");
        // const userEmail = document.querySelector("#email");
        const userPassword = document.querySelector("#password");
        const authMessage = document.querySelector("#authMessage");

        submitBtn.addEventListener("click",(e)=>{
            e.preventDefault();
            const formData =  new FormData(document.loginForm);

            fetch(`${process.env.REACT_APP_API_URL}/members`,{
                method:"post",
                body:formData
            }).then(response=>{
                console.log(response);
                // 將'response'(Json陣列)轉為'物件'並回傳給'data'
                return response.json();
            }).then(data=>{
                console.log(data);
                if (data.ok){
                    sesStorage['memail'] =  data.memail ;        
                    sesStorage['mid'] =  data.mid ;        
                    setAuth(!auth);
                      // 呈現歡迎訊息
                    alert(`你好，歡迎:${sesStorage['memail']}`)
                    //導向會員中心頁面
                    history.push('/member/clientCenter')
                } else {
                    alert("帳號密碼有誤!");
                    authMessage.innerText = "請確認您輸入的帳號密碼是否正確..."
                    userPassword.value = "";
                }
            })
        })
    },[auth])

    if(sesStorage['memail'] && auth){
        // 呈現謝謝訊息
        alert(`謝謝您的光臨: ${sesStorage['memail']}`)
        // 清除sessionStorage([memail] & [mid]); set auth = false
        sesStorage.removeItem("memail");
        sesStorage.removeItem("mid");
        setAuth(!auth);
    }
    return (
        <body class="my-login-page">
            <section class="h-100">
                <div class="container h-100">
                    <div class="row justify-content-md-center h-100">
                        <div class="card-wrapper">
                            <div class="brand">
                                <img src={require("./images/logo/logo_color_login.png")} alt="logo_color_login.png"/>
                            </div>
                            <div id="authMessage" style={{color:"red"}}></div>
                            <div class="card fat">
                                <div class="card-body">
                                    
                                    <form class="my-login-validation" encType="multipart/form-data" name="loginForm">
                                        <div class="form-group">
                                            <label for="email">會員帳號</label>
                                            <input id="email" type="email" class="form-control" name="email"  required autofocus />
                                            <div class="invalid-feedback" id="emailStatus">
                                                無效的電子信箱
                                            </div>
                                        </div>

                                        <div class="form-group">
                                            <label for="password">會員密碼
                                                <a href="forgot.html" class="float-right">
                                                    忘記密碼?
                                                </a>
                                            </label>
                                            <input id="password" type="password" class="form-control" name="password" required data-eye />
                                            <div class="invalid-feedback">
                                                密碼已存在
                                            </div>
                                        </div>

                                        <div class="form-group">
                                            <div class="custom-checkbox custom-control">
                                                <input type="checkbox" name="remember" id="remember" class="custom-control-input" />
                                                <label for="remember" class="custom-control-label">記住我</label>
                                            </div>
                                        </div>

                                        <div class="form-group m-0">
                                            <button type="submit" class="btn btn-block btn-custom" id="submitBtn">
                                                登入
                                            </button><br />
                                            <p class="align">其他方式登入</p>

                                            <button type="submit" class="btn btn-danger btn-block">
                                                使用GOOGLE登入
                                            </button>
                                            <button type="submit" class="btn btn-primary btn-block">
                                                使用Facebook登入
                                            </button>
                                        </div>
                                        <div class="mt-4 text-center">
                                            還沒有會員? <a href="register.html">註冊</a>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div class="footer">
                                Copyright &copy; 2022  &mdash; RAKUJI樂時町洋食館

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </body>

    )
};

export default Login
