import React, { useState } from "react";
import { View, Text, TextInput } from "react-native";

export default function App() {
  const [name, setName] = useState("");
  const [err, setError] = useState(false);

  const nameChnage = (txt) => {
    let length = true;
    let email = true;
    setError(true);
    if (txt.length > 8) {
      length = false;
    }
    const k = /\S+@\S+\.\S+/;
    if (k.test(txt)) {
      email = false;
    }
    if (!length && !email) {
      setError(false);
    }
    console.log(length, email);
    setName(txt);
  };
  return (
    <View>
      <Text>{name}Hello</Text>
      <TextInput
        value={name}
        placeHolderText={"fddddddf"}
        onChangeText={nameChnage}
        style={{ color: "green" }}
      />
      <View>{err ? <Text>need to change</Text> : <Text></Text>}</View>
    </View>
  );
}
