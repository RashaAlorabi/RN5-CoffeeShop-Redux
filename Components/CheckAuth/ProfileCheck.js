import React, { Component } from "react";
import { connect } from "react-redux";
import { withNavigation } from "react-navigation";
import { Text } from "native-base";
class ProfileCheck extends Component {
  // componentDidMount() {
  //   this.props.navigation.navigate(this.props.user ? "Profile" : "Login ");
  // }
  checkAuth = () => {
    this.props.navigation.navigate(this.props.user ? "Profile" : "Login ");
  };
  render() {
    this.props.navigation.navigate(this.props.user ? "Profile" : "Login ");
    return (
      <>
        <Text>Hi</Text>
      </>
    );
  }
}
const mapStateToProps = state => ({
  user: state.authReducer.user
});
export default withNavigation(connect(mapStateToProps)(ProfileCheck));
