import React, { useState } from "react";
import {
  Image,
  Pressable,
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  FlatList,
} from "react-native";
// let data1 = [
//   { name: "rahul", age: 38, key: 2 },
//   { name: "rahvful", age: 38666, key: 22 },
//   { name: "rahvdful", age: 338, key: 23 },
//   { name: "rahuvfdl", age: 385, key: 245 },
//   { name: "rahufvl", age: 3844, key: 21 },
//   { name: "sye", age: 1, key: 299 },
// ];
export default function App() {
  const [data1, setList] = useState([
    { name: "rahul", age: 38, key: 2 },
    { name: "rahvful", age: 38666, key: 22 },
    { name: "rahvdful", age: 338, key: 23 },
    { name: "rahuvfdl", age: 385, key: 245 },
    { name: "rahufvl", age: 3844, key: 21 },
    { name: "sye", age: 1, key: 299 },
  ]);
  return (
    <View>
      {/* {data1.map((a) => {
        return <Text> {a.name}</Text>;
      })} */}
      <FlatList
        data={data1}
        renderItem={(e) => (
          <View key={e.item.key}>
            <TouchableOpacity
              onPress={() => {
                try {
                  console.log(e.item.name);
                  setList(data1.filter((p) => p.key != e.item.key));
                  console.log(data1);
                } catch (err) {
                  console.log(err);
                }
              }}
            >
              <Text>buttom</Text>
            </TouchableOpacity>
            <Text
              onClick={() => {
                console.log(e);
              }}
            >
              {e.item.name}
            </Text>
          </View>
        )}
      />
    </View>
  );
}
