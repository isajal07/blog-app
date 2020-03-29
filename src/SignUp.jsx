import React,{ useState } from 'react';
import { Link } from "react-router-dom";
import { auth } from './firebase';
import { useHistory } from "react-router-dom";

const SignUp = (props) => {
  
  const history = useHistory();
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const onEmailChange = (event) => setEmail(event.target.value)
  const onPasswordChange = (event) => setPassword(event.target.value)

  const onSignUp = (e) => {
    e.preventDefault()
    console.log('sign up', email, password)

    auth.createUserWithEmailAndPassword(email, password)
    .then(
      history.push('/signin')
    )
      .catch(function(error){
       console.log('Error in Signing!')
     });
     setEmail('')
     setPassword('')

  }
  return (
  <div class="ui segment container">
    <h2 class="ui header">
<div class="content">Sign Up</div>
</h2>
    <form class="ui form">
  <div class="field">
    <label>Email</label>
    <input onChange={onEmailChange}/>
  </div>
  <div class="field">
    <label>Password</label>
    <input  type='password' onChange={onPasswordChange}/>
  </div>

  <button type="submit" class="ui teal button" onClick={onSignUp}>Sign Up</button>
</form><br/>
  <div style={{marginRight:'10px'}}> <Link style={{color:'teal'}} to={"/signin"}>Already have an account, Sign In!</Link></div>
  </div>
  )}


export default SignUp;