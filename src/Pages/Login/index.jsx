import React, { Component } from "react";
import Play from "../../Images/play hand.png";
import WhiteLogo from "../../Images/whiteLogo.png";
import Dots from "../../Images/Dots.png";
import Qoute from "../../Images/quote.png";
import Vector from "../../Images/vector.png";
import Arrow from "../../Images/arrow_back.png";
import Signup from "../../Pages/Signup";
import ButtonComponent from "../../components/ButtonComponent";
import "./style.css";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      email: "",
      phone: "",
      password: "",
      repeatPassword: "",
      agreeTerms: false,
      error: "",
      passwordStrength: "",
    };
    this.getPasswordStrength = this.getPasswordStrength.bind(this);
  }

  handleUserNameChange = (event) => {
    this.setState({ userName: event.target.value });
  };

  handleEmailChange = (event) => {
    this.setState({ email: event.target.value });
  };

  handlePhoneChange = (event) => {
    this.setState({ phone: event.target.value });
  };

  handlePasswordChange = (event) => {
    const password = event.target.value;
    const passwordStrength = this.getPasswordStrength(password);
    this.setState({ password, passwordStrength });
  };
  handleRepeatPasswordChange = (event) => {
    this.setState({ repeatPassword: event.target.value });
  };
  handleLoginButtonClick = () => {
    return { Signup };
  };

  handleAgreeTermsChange = (event) => {
    this.setState({ agreeTerms: event.target.value });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    const { password, repeatPassword, agreeTerms } = this.state;

    // Check if password and repeated password match
    if (password !== repeatPassword) {
      this.setState({ error: "Passwords do not match" });
      return;
    }

    // Check if all fields are completed
    if (!password || !repeatPassword || !agreeTerms) {
      this.setState({ error: "Please complete all fields" });
      return;
    }
    // Clear error state if validation passes
    this.setState({ error: "Successfuly Registering" });
  };
  handleLoginButtonClick = () => {
    this.setState({ showSignUp: true }); // Set the state to show the SignUp page
  };
  getPasswordStrength(password) {
    if (
      password.match(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]$/
      ) ||
      (password.length >= 8 && /\d/.test(password))
    ) {
      return "high";
    } else if (
      password.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/) ||
      (password.length <= 8 && /\d/.test(password))
    ) {
      return "medium";
    }
    return "low";
  }

  render() {
    const {
      userName,
      email,
      phone,
      password,
      repeatPassword,
      agreeTerms,
      error,
      showSignUp,
      PasswordStrength,
    } = this.state;
    // Render the SignUpPage component if showSignUp is true
    if (showSignUp) {
      return <Signup />;
    }

    return (
      <div className="Parent2">
        <div className="BlueDiv">
          <div className="WLogo">
            <img src={WhiteLogo} alt="" />
          </div>
          <div className="Dots">
            {" "}
            <img src={Dots} alt="" />
          </div>
          <div className="Qoute2">
            <img src={Qoute} alt="" />
          </div>
          <div className="Para">
            <p>
              I always observe the people who pass by when I <br />
              ride an escalator. I'll never see most of them <br />
              again, so I imagine a lot of things about their
              <br />
              lives... about the day ahead of them.
            </p>
          </div>
          <div className="text2">
            <p>Hideo Kojima</p>
          </div>
          <div className="Vector2">
            <img src={Vector} alt="" />
          </div>
          <div className="Back">
            <ButtonComponent
              text="Back"
              type="submit"
              onClick={this.handleLoginButtonClick}
            />
          </div>
          <div className="Arrow">
            <img src={Arrow} alt="" />
          </div>
        </div>
        <div className="LeftContent">
          <img src={Play} alt="" />
        </div>
        <div className="RightContent2">
          <h1>Register Individual Account!</h1>
          <div className="RightTitle">
            <p>
              For the purpose of gamers regulation, your <br />
              details are required.{" "}
            </p>
          </div>
          <div className="Form2">
            <form onSubmit={this.handleFormSubmit}>
              <div className="NameDev">
                <label htmlFor="userName">userName*</label>
                <input
                  required
                  type="text"
                  id="userName"
                  name="userName"
                  value={this.state.userName}
                  placeholder="Write your name"
                  onChange={this.handleUserNameChange}
                />
              </div>
              <div className="EmailDev">
                <label htmlFor="email">Email address*</label>
                <input
                  required
                  type="email"
                  id="email"
                  name="email"
                  value={this.state.email}
                  placeholder="Write your email"
                  onChange={this.handleEmailChange}
                />
              </div>
              <div className="PhoneDev">
                <label htmlFor="phone">Phone*</label>
                <input
                  required
                  type="number"
                  id="phone"
                  name="phone"
                  value={this.state.phone}
                  placeholder="Write your phone number"
                  onChange={this.handlePhoneChange}
                />
              </div>
              <div className="PassWordDev">
                <label htmlFor="password">Create Password</label>
                <input
                  required
                  type="password"
                  id="password"
                  name="password"
                  value={this.state.password}
                  placeholder="Write your password"
                  onChange={this.handlePasswordChange}
                />
                <div className={`strenght ${this.state.passwordStrength}`}>
                  <div className={`PasswordStrength ${this.passwordStrength}`}>
                    {this.state.passwordStrength === "high" && "StrongPassword"}
                    {this.state.passwordStrength === "medium" &&
                      "MediumPassword"}
                    {this.state.passwordStrength === "low" && "WeakPassword"}
                  </div>
                </div>
              </div>
              <div className="PassWordRep">
                <label htmlFor="repeatPassword">Repeat Password</label>
                <input
                  required
                  type="password"
                  id="repeatPassword"
                  name="repeatPassword"
                  value={this.state.repeatPassword}
                  placeholder="Repeat Password"
                  onChange={this.handleRepeatPasswordChange}
                />
              </div>
              <div className="Check">
                <input
                  type="checkbox"
                  id="agreeTerms"
                  name="agreeTerms"
                  checked={this.state.agreeTerms}
                  onChange={this.handleAgreeTermsChange}
                />
                <label htmlFor="agreeTerms">
                  I agree to terms & conditions
                </label>
              </div>
              {/* Error message */}
              {error && (
                <p
                  className="Error"
                  style={{ color: "red", marginLeft: "-2px" }}
                >
                  {error}
                </p>
              )}
              <div className="SubButt2">
                <ButtonComponent text=" Register Account" type="submit" />
              </div>
              <div className="OR">
                <p>Or</p>
              </div>
              <div className="LogButt2">
                <ButtonComponent
                  text="Log In"
                  type="submit"
                  onClick={this.handleLoginButtonClick}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
