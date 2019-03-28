import React, { Component } from "react";
import { Icon, Button, Text } from "native-base";
import { withNavigation } from "react-navigation";

import { connect } from "react-redux";
import { logout } from "../../store/actions/authActions";

class LogoutButton extends Component {
  render() {
    const logout = () => {
      return (
        <Button danger onPress={this.props.logout}>
          <Text style={{ color: "white", fontSize: 25 }}>logout</Text>
        </Button>
      );
    };

    const login = () => {
      return (
        <Button light onPress={() => this.props.navigation.navigate("Login")}>
          <Text style={{ color: "white", fontSize: 25 }}>login</Text>
        </Button>
      );
    };
    return <>{this.props.user ? logout() : login()}</>;
  }
}

const mapStateToProps = state => ({
  user: state.authReducer.user
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});
export default withNavigation(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(LogoutButton)
);
