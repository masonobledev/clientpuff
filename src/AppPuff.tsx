import React, { Component } from "react";
import "./App.css";
import "antd/dist/antd.css";
import { BrowserRouter as Router } from "react-router-dom";
import Auth from "./auth/Auth";
import { HeaderPuff } from "./components/HeaderPuff";
import HomePage from "./home/HomePage";
import { Footer } from "./components/Footer";
import AllCigars from "./cigars/AllCigars";



interface stateType {
  sessionToken: any;
  userRole: any;
}

export default class AppPuff extends Component<{}, stateType> {
  constructor(props: "") {
    super(props);
    this.state = {
      sessionToken: "",
      userRole: "",
    };
  }

  componentDidMount() {
    if (localStorage.getItem("token")) {
      this.setState({ sessionToken: localStorage.getItem("token") });
    }

    if (localStorage.getItem("userRole")) {
      this.setState({ userRole: localStorage.getItem("userRole") });
    }
  }

  updateUserRole = (newUserRole: string) => {
    localStorage.setItem("userRole", newUserRole);
    this.setState({ userRole: newUserRole });
    console.log(this.state.userRole);
  };

  updateToken = (newToken: string) => {
    localStorage.setItem("token", newToken);
    this.setState({ sessionToken: newToken });
    console.log(this.state.sessionToken);
  };

  clearToken = () => {
    localStorage.clear();
    this.setState({ sessionToken: "" });
  };

  protectedViews = () => {
    return this.state.sessionToken ? (
      <div>
        {/* <Navbar clearToken={this.clearToken} /> */}
        {/* <Header brand="The Pufferator" /> */}
        {/* <Auth token={this.state.sessionToken} /> */}
        {/* <NewCigar token={this.state.sessionToken} /> */}
        <HomePage token={this.state.sessionToken}/>
      </div>
    ) : (
      <Auth
        updateToken={this.updateToken}
        updateUserRole={this.updateUserRole}
      />
    );
  };

  render() {
    return (
      <div>
      <HeaderPuff brand='' />
      <Router>
        <div className="App">{this.protectedViews()}</div>
      </Router>
      <Footer />
      </div>
    );
  }
}

