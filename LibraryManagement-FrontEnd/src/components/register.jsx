import React,{ useEffect, useState} from 'react';
import '../scss/login.scss';
import axios from 'axios';
import { useLocation, Link } from 'react-router-dom';

function Register(props) {
    const location = useLocation();
    const [itemValue, setItemValue] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [passwordMatch, setPasswordMatch] = useState(true);
    const [responseText,setResponseText] = useState(true);

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
        validatePassword(event.target.value, confirmPassword);
    };

    const handleConfirmPasswordChange = (event) => {
        setConfirmPassword(event.target.value);
        validatePassword(password, event.target.value);
    };

    const validatePassword = (passwordValue, confirmPasswordValue) => {
        setPasswordMatch(passwordValue === confirmPasswordValue);
    };

    useEffect(() => {
        const urlParams = new URLSearchParams(location.search);
        const value = urlParams.get('value');
        setItemValue(value);
        console.log("Hello " + value);
      }, [location.search]);

    function submitRegister(){
        var name = document.getElementById("InputName").value;
        var email = document.getElementById("InputEmail").value;
        var password = document.getElementById("InputPassword2").value;

        const postRegisterDetails = async () => {
            try {
                const response = await axios.post('http://localhost:5000/api/registerDetails', {
                    Name : name,
                    Email : email,
                    Password : password,
                    Type: itemValue
                });
                console.log(response.data);
                if(response.data === "success"){
                    setResponseText(true);
                    alert(response.data)
                }
                else{
                    setResponseText(false);
                }
            } catch (error) {
                
            }
        }
        postRegisterDetails();

        console.log("submit register button clicked");
    }


    return (
        <div>
            <div className='LoginPageContainer container-fluid d-flex justify-content-center align-items-center'>
                <div className='container-md form-container container rounded'>
                    <h1 className='fw-bold text-primary text-center'>Create <span className='text-secondary'>{itemValue} !</span></h1><br />
                    <form>
                        <div className="mb-3">
                            <label for="InputName" className="form-label">Full Name</label>
                            <input type="text" className="form-control" id="InputName" required/>
                        </div>
                        <div className="mb-3">
                            <label for="InputEmail" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="InputEmail" required/>
                            { !responseText && <p className='text-danger'>Invalid Email Format!</p>}
                        </div>
                        <div className="mb-3">
                            <label for="InputPassword1" class="form-label">Password</label>
                            <input type="password" className="form-control" id="InputPassword1" required value={password} onChange={handlePasswordChange}/>
                        </div>
                        <div className="mb-3">
                            <label for="InputPassword2" class="form-label">Confirm Password</label>
                            <input type="password" className="form-control" id="InputPassword2" required value={confirmPassword} onChange={handleConfirmPasswordChange}/>

                            {!passwordMatch && <p className='text-danger'>Passwords do not match!</p>}
                            {passwordMatch && <p className='text-success'>Looks good!</p>}
                        </div><br />
                        <button type="button" className="btn btn-secondary custom-button-reg rounded-pill mx-auto" onClick={submitRegister}>Register</button>
                        <br /><br />
                        <Link to={`/login?value=${itemValue}`} className='reg-link'>Already an {itemValue}? Login here</Link><br />
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Register;