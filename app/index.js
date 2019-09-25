import React from "react";
import EStyleSheet from "react-native-extended-stylesheet";

import Options from "./screens/Options";

EStyleSheet.build({
  $primaryBlue: "#4F6D7A",
  $white: "#ffffff",
  $border: "#E2E2E2",
  $inputText: "#797979",
  $darkText: "#343434"
});

export default () => <Options />;
