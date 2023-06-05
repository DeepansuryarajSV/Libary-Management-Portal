import React,{ useEffect, useState} from 'react';
import '../scss/login.scss';
import axios from 'axios';
import { useLocation, Link, useNavigate} from 'react-router-dom';

function Login(props) {
    const location = useLocation();
    const [itemValue, setItemValue] = useState("");
    const [responseText,setResponseText] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const urlParams = new URLSearchParams(location.search);
        const value = urlParams.get('value');
        setItemValue(value);
        console.log("Hello " + value);
      }, [location.search]);

    function submitLogin(){
        var email = document.getElementById("InputEmail").value;
        var password = document.getElementById("InputPassword").value;

        const postLoginDetails = async () => {
            try {
                const response = await axios.post('http://localhost:5000/api/loginDetails', {
                    Email : email,
                    Password : password,
                    Type: itemValue
                });

                console.log(response.data);
                if(response.data === "invalidUser"){
                    setResponseText(false);
                }
                else{
                    alert("Sucess");
                    navigate('/'+itemValue+'Dashboard?name='+response.data);
                }
            } catch (error) {
                
            }
        }
        postLoginDetails();


        console.log("Function kulla - " + email + " " + password);
    }

    return (
        <div className='LoginPageContainer container-fluid d-flex justify-content-center align-items-center'>
            <div className='container-md form-container container rounded'>
                <h1 className='fw-bold text-primary text-center'>Hello <span className='text-secondary'>{itemValue} !</span></h1><br />
                <form>
                    <div className="mb-3">
                        <label for="InputEmail" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="InputEmail" aria-describedby="emailHelp"/>
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label for="InputPassword" class="form-label">Password</label>
                        <input type="password" className="form-control" id="InputPassword"/>
                    </div><br />
                    <button type="button" className="btn btn-secondary custom-button-reg rounded-pill mx-auto" onClick={submitLogin}>Login</button>
                    <br /><br />
                    <Link to={`/register?value=${itemValue}`} className='reg-link'>Are you new? Create {itemValue} account</Link><br />
                </form>
            </div>
        </div>
    );
}

export default Login;