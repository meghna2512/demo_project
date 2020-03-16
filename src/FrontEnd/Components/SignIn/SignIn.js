import React,{useState,useEffect} from 'react';
import { withRouter } from 'react-router-dom';
import { useForm } from "react-hook-form";
import './SignIn.css';
import {FormError, ShowFormErrors} from "../../../_Common/formError";
import toastr from "../../../_Common/toaster";

const SignIn = ({history, setIsSignInForm, setIslogedIn}) => {

	const [signInForm,setSignInForm] = useState({});
	const [signInErrors,setSignInErrors] = useState({});
	const { handleSubmit, register, errors } = useForm();

	const signInFormHandler = (e,field)=>{
		let signInFormData = signInForm;
		signInFormData[field] = e.target.value;
		setSignInForm(signInFormData);
	}

	const signInFormSubmit = async () =>{

		let signInForm1 = signInForm;

		if(signInForm1.username === "hruday@gmail.com" && signInForm1.password === "hruday123"){
			toastr.show({message: "Login successfully.",intent: "success"});
			setTimeout(function(){
				toastr.clear();
						return history.push('/user-list');
			},1000);
		}
		else{
				toastr.show({message: "username or password is incorrect!",intent: "danger"});
	  	}
  	}

return (

	<section className="Testimonials">
   <div className="container">
     <div className="row">

    <div className="form_modals singin_main">
      <h5 className="modal-title">Sign In</h5>
      <p className="text-center">Please use in personal detail start journey with us </p>
      <form onSubmit={handleSubmit(signInFormSubmit)}>


        <div className="form-group">
          <input onChange={e=>signInFormHandler(e,'username')} name="username"  type="Email" className="form-control" placeholder="Email"
            ref={register({
              required: 'Required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: "Invalid email address"
              }
            })}
          />
          <div className="text-danger">{ShowFormErrors(errors,signInErrors,'email')}</div>
        </div>

        <div className="form-group">
          <input onChange={e=>signInFormHandler(e,'password')} name="password" type="password" className="form-control" placeholder="Password"
            ref={register({
              required: 'Required'
            })}
          />
          <div className="text-danger">{ShowFormErrors(errors,signInErrors,'password')}</div>
        </div>

        <button className="btn btn-primary submit_btnss" type="submit">Submit</button>
      </form>
    </div>

		</div>
		</div>
		</section>
    );
}

export default withRouter(SignIn);
