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
import { LeaveMessageDataCreateForm } from "./ui-components";
function App({ signOut }) {
  function sendMessage(message) {
    console.log(message);
  }

  return (
    <View
      className="App"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "100vw",
      }}
    >
      <Card style={{ width: "fit-content", margin: "auto" }}>
        <Image
          src={
            "https://i.pinimg.com/736x/ea/6e/e5/ea6ee5ff9c3c4393f1c2e105e439d8a9.jpg"
          }
          style={{ width: "400px" }}
          className="App-logo"
          alt="logo"
        />
        <Heading level={1} style={{ textAlign: "center" }}>
          We now have Auth!
        </Heading>

        <LeaveMessageDataCreateForm
          onSubmit={(message) => sendMessage(message)}
        />
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
