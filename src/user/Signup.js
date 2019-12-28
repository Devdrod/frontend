import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import Layout from '../core/Layout'
import {signup} from '../auth/Index'

const Signup =()=>{

const [values, setValues]= useState({
    name:'',
    email:'',
    password:'',
    error:'',
    sucess:false
})

const {name, email, password, sucess, error}= values

const handleChange= name => event =>{
setValues({...values, error:false, [name]:event.target.value })
}

const clickSubmit =(event)=>{
    event.preventDefault()
    setValues({...values, error:false})
    signup({name,email,password})
    .then(data=>{
        if (data.error){
            setValues({...values,error:data.error,sucess:false})
        } else{
            setValues({
                ...values,
                name:'',
                email:'',
                password:'',
                error:'',
                sucess:true
            })
        }
    })
}    



    const signUpForm =()=>(

        <form>
            <div className="form-group">
         <label className="text-muted">Name</label>
         <input onChange={(handleChange('name'))} type="text" className="form-control" value={name}></input>
            </div>

            <div className="form-group">
         <label className="text-muted">Email</label>
         <input  onChange={(handleChange('email'))}  type="email" className="form-control" value={email}></input>
            </div>

            <div className="form-group">
         <label className="text-muted">Password</label>
         <input onChange={(handleChange('password'))}  type="password" className="form-control" value={password}></input>
            </div>
<button onClick={clickSubmit}className="btn btn-primary">
    Submit
</button>
        </form>

    )

const showError = () =>(
 
   <div className="alert alert-danger" style={{display:error ? '': 'none'}}>
        {error}
    </div>
   )

const showSucess = () =>(
    <div className="alert alert-info" style={{display: sucess? '': 'none'}}>
        New account is created. Please<Link to="/signin">Signin</Link>
    </div>
)

    return(
        <Layout title="Signup" description="Signup to page" className="container col-md-8 offset-md-2">
        {showSucess()}
        {showError()}
        {signUpForm()}
        {/* {JSON.stringify(values)} */}
        </Layout>
    )
}

export default Signup