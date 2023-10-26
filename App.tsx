import { NavigationContainer } from "@react-navigation/native";
import { ToastProvider } from "react-native-toast-notifications";
import StackNavigator from "./src/navigation/StackNavigator";
import { Platform, StatusBar } from "react-native";
import { Components } from "./src/components";
import React from "react";

function App(): JSX.Element {
  StatusBar.setBarStyle("dark-content", true);
  if(Platform.OS === 'android')StatusBar.setBackgroundColor("white");
  return (
    <ToastProvider
      duration={4000}
      offsetBottom={80}
      renderToast={(toast) => <Components.Toast toast={toast} />}
    >
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    </ToastProvider>
  );
}

export default App;
