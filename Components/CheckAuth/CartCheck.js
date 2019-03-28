import React, { Component } from "react";
import { connect } from "react-redux";

class CartCheck extends Component {
  componentDidMount() {}
  checkAuth = () => {
    this.props.navigation.navigate(this.props.user ? "CoffeeCart" : "Login ");
  };
  render() {
    console.log(this.props.navigation);
    return <>{this.checkAuth()}</>;
  }
}
const mapStateToProps = state => ({
  user: state.authReducer.user
});
export default connect(mapStateToProps)(CartCheck);
