import React,{ useState } from 'react';
import { Link } from "react-router-dom";
import { auth } from './firebase';
import { useHistory } from "react-router-dom";


const SignIn = (props) => {

  const history = useHistory();
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const onEmailChange = (event) => setEmail(event.target.value)
  const onPasswordChange = (event) => setPassword(event.target.value)

  const onSignIn = (e) => {
    e.preventDefault()
    console.log('sign in', email, password)

    auth.signInWithEmailAndPassword(email, password)
      .then(() => {
        console.log('User SIGNED IN!')
        history.push(`/blogs/${props.user.uid}/posts`)
      })
      .catch(function(error){
       console.log('Problem sigining IN!')
     });
     setEmail('')
     setPassword('')

  }
  return (
    <div class="ui segment container">
    <h2 class="ui header">
<div class="content">Sign In</div>
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

  <button type="submit" class="ui teal button" onClick={onSignIn}>Sign In</button>
</form><br/>
  <div style={{marginRight:'10px'}}> <Link style={{color:'teal'}} to={"/signup"}>Don't have account. Sign Up!</Link></div>
  </div>
  )}


export default SignIn;