import React, { Component } from "react";
import { View, Text } from "react-native";

import { Container } from "../components/Container";
import { Logo } from "../components/Logo";
import { InputWithButton } from "../components/TextInput";

const TEMP_BASE_CURRENCY = "USD";
const TEMP_QUOTE_CURRENCY = "GBR";
const TEMP_BASE_PRICE = "100";
const TEMP_QUOTE_PRICE = "79.74";

export default class Home extends Component {
  handlePressBaseCurrency = () => {
    console.log("press base");
  };

  handlePressQuoteCurrency = () => {
    console.log("press quote");
  };

  handleTextChange = text => {
    console.log("change text", text);
  };

  render() {
    return (
      <Container>
        <Logo />
        <InputWithButton
          buttonText={TEMP_BASE_CURRENCY}
          onPress={this.handlePressBaseCurrency}
          defaultValue={TEMP_BASE_PRICE}
          keyboardType="numeric"
          onChangeText={this.handleTextChange}
        />
        <InputWithButton
          buttonText={TEMP_QUOTE_CURRENCY}
          onPress={this.handlePressQuoteCurrency}
          editable={false}
          value={TEMP_QUOTE_PRICE}
        />
      </Container>
    );
  }
}
