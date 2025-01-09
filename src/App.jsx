import {
  Button,
  Card,
  Heading,
  Image,
  View,
  withAuthenticator,
} from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import PropTypes from "prop-types";
function App({ signOut }) {
  return (
    <View
      className="App"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100vw",
      }}
    >
      <Card>
        <Image
          src={
            "https://i.pinimg.com/736x/ea/6e/e5/ea6ee5ff9c3c4393f1c2e105e439d8a9.jpg"
          }
          className="App-logo"
          alt="logo"
        />
        <Heading level={1} style={{ textAlign: "center" }}>
          We now have Auth!
        </Heading>
      </Card>
      <Button
        onClick={signOut}
        style={{ background: "red", marginTop: "20px" }}
      >
        Sign Out
      </Button>
    </View>
  );
}
App.propTypes = {
  signOut: PropTypes.func.isRequired, // Define que signOut é uma função obrigatória
};
export default withAuthenticator(App);
