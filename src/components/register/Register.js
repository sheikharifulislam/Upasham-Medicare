
import { useHistory, useLocation } from 'react-router';

import useAuth from '../../customHook/useAuth';

import './Register.css';

const Login = () => {

    const {signInUsingGoogle, setIsLoading,setUserPassword,setUserName,setUserEmail,setAlredyAcount,alredyAcount,passwordError} = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirectUri = location.state?.from || '/home';

    const handelGoogleLogin = () => {
        signInUsingGoogle()
        .then((result) => {
            history.push(redirectUri);
        })
        .catch((error) => {
            console.log(error.message);
        })
        .finally(() => setIsLoading(false))
    }
    


    

    const handelNameInput = (e) => {
        setUserName(e.target.value)
      }
    
      const handelEmailInput = (e) => {
        setUserEmail(e.target.value);    
      }
        
      const handelPasswordIinput =(e) => {
        setUserPassword(e.target.value);
      }
      


    const toggleForm = (e) => {
        setAlredyAcount(e.target.checked);
      }
    

      


    return (
        <div className="form-container">
            <div>
                <h3 align="center">{alredyAcount ? 'Login' : 'Signup'} Form</h3>
                <form className="row g-3" >
                    {
                        !alredyAcount &&<div className="col-md-12">
                        <label htmlFor="inputName4" className="form-label">Your Name</label>
                        <input type="text" className="form-control" id="inputName4" onBlur= {handelNameInput} required />
                    </div> 
                    }
                    <div className="col-md-12">
                        <label htmlFor="inputEmail4" className="form-label">Email</label>
                        <input type="email" className="form-control" id="inputEmail4" onBlur= {handelEmailInput} required />
                    </div>
                         
                    <div className="col-md-12">
                        <label htmlFor="inputPassword4" className="form-label">Password</label>
                        <input type="password" className="form-control" id="inputPassword4"onBlur={handelPasswordIinput} required />
                        <small className="text-danger">{passwordError}</small>
                    </div>
                    <div className="col-12">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="gridCheck" onChange={toggleForm}/>
                            <label className="form-check-label" htmlFor="gridCheck">
                            Already Register
                            </label>
                        </div>
                    </div>                  
                    <div className="col-12">
                        <button type="submit" className="btn btn-primary">{alredyAcount ? 'Login' : 'Signup'}</button>
                    </div>                   
                </form>

                   {
                       alredyAcount &&
                        <div className="other-sign-option">
                            <button onClick={handelGoogleLogin}> <i class="fab fa-google"></i> Google signin</button>
                        </div>
                   }
                
            </div>
        </div>
    );
   
};

export default Login;