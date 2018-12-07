import React, { Component } from "react";
import LoginComponent from "./Login_component";
import sendApiRequest from "../../utils/api";
class LoginContainer extends Component {
    constructor(props){
        super(props);
    
        this.state = {
            login: "",
            password: ""
        };

        this.signin = this.signin.bind(this);
        this.onFieldChange = this.onFieldChange.bind(this);
    }
    onFieldChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    signin(e) {
        if(e) {
            e.preventDefault();
        }
        const url = "http://localhost:8000/app1/login";
        const params = this.state;
        sendApiRequest({url, method: "POST", params: params})
            .then(reponse => {
                console.log(reponse);
            })
            .catch(error => {
                console.error(error);
                this.setState({});
            });
    }

    componentDidMount() {}
    render() {
        return (
            <LoginComponent
                login={this.state.login}
                password={this.state.password}
                signin={this.signin}
                onFieldChange={this.onFieldChange}
            />

        );
    }
    
}
export default LoginContainer;