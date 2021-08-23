import React , { Component } from "react";
import {auth} from "./Fire";
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
import {Container,Row,Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class Login extends Component{
constructor(props)
{
    super(props);
    this.login = this.login.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.signup = this.signup.bind(this);
    this.state={
        email : "",
        password : ""
    }
}
login(e){
    e.preventDefault();
    auth.signInWithEmailAndPassword(this.state.email,this.state.password).then((u)=>{
        Swal.fire('Login Successfully',u)
    }).catch((err)=>{
        Swal.fire('! Please Check Your Email and Password',err);
    })
}
signup(e){
    e.preventDefault();
    auth.createUserWithEmailAndPassword(this.state.email,this.state.password).then((u)=>{
        console.log(u)
    }).catch((err)=>{
        console.log(err);
    })
}
handleChange(e){
    this.setState({
        [e.target.name] : e.target.value
    })
}
render()
{
    return(
        <div>
            <Container fluid>
            <div className="login_pg">
                <Row>

                    <Col md={6}>
                        <img src="src/js/img/logo-2.png" />
                        <h3>Copyright &#169; 2021 NEXT IAS v1.0.0</h3>
                    </Col>
                    <Col md={6}>
                        <div className="log_r_inn">
                            <h2>Account <span>Login</span></h2>
                            <img className="log_icn" src="src/js/img/envelope.png" />
                            <img className="log_icn lock" src="src/js/img/lock.png" />
                        <form className="text-center mt-5 w-50 m-auto">
                            <input className="form-control p-2" type="email" id="email" name="email" placeholder=" email id" onChange={this.handleChange} value={this.state.email} /><br/>
                            <input className="form-control p-2" name="password" type= "password" onChange={this.handleChange} id="password" placeholder="password" value={this.state.password} /><br/>
                            <button onClick={this.login} className="btn btn-primary log_btn">Login</button>
                        </form>
                        </div>
                    </Col>

                </Row>
                </div>
            </Container>
        </div>
    )
}
}
export default Login;