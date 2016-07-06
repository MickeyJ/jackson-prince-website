import React, { Component } from 'react'

import JWT from '../helpers/jwt_helper.js'
import { connect } from 'react-redux'
import { userLogin } from '../redux/actions'

import Button from '../materials/Button'

export default class LoginForm extends Component{
  constructor(){
    super();
    this.state = { 
      output: '',
      loginType: 'admin'
    }
  }
  getEmailValue(ref){
    this.email = ref;
  }
  getPasswordValue(ref){
    this.password = ref;
  }
  changeLoginType(){
    if(this.state.loginType === 'admin'){
      this.setState({ loginType: 'client'})
    } else {
      this.setState({ loginType: 'admin'})
    }
  }
  handleSubmit(e){
    e.preventDefault();
    let email = this.email.value;
    let password = this.password.value;

    if(!password || !email){
      this.setState({ output: "Fill'em Both Out Yo."});
      return;
    }
    return(
      this.props.userLogin({email, password}, this.state.loginType)
        .then(res =>{
          if(res.payload.data.admin || res.payload.data.client){
            JWT.save(res.payload.data.token);

            if(this.state.loginType === 'client'){
              this.context.router.replace('/client');
            } else {
              this.context.router.replace('/admin/clients');
            }
          } else {
            this.setState({
              output: res.payload.data.error
            });
          }
        })
        .catch(err =>{
          this.setState({
            output: err
          });
        })
    );

  }
  render(){
    return(
      <div className="jumbotron">
        <Button 
          type="submit" 
          text={this.state.loginType}
          className="btn btn-primary" 
          onClick={this.changeLoginType.bind(this)}
        />
        
        <form className="login-form" onSubmit={this.handleSubmit.bind(this)}>
          <fieldset className="form-group">
            <input 
              type="text" 
              id="admin-email" 
              name="admin-email" 
              placeholder="Email"
              className="form-control" 
              ref={(ref) => this.getEmailValue(ref)}
            />
          </fieldset>
          <fieldset className="form-group">
            <input
              type="password"
              id="admin-password"
              name="admin-password"
              placeholder="Password"
              className="form-control"
              ref={(ref) => this.getPasswordValue(ref)}
            />
          </fieldset>
          <Button className="btn btn-primary" type="submit" text="Login" />
        </form>

        <span className="submit-message">{this.state.output}</span>

      </div>
    )
  }
}

LoginForm.contextTypes = {
  router: React.PropTypes.object
};

const mapStateToProps = (state) =>({
  admin: state.admin.cred
});

export default connect(mapStateToProps, {
  userLogin
})(LoginForm);