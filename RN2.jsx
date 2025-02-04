import {
    Image,
    Pressable,
    StyleSheet,
    Text,
    View,
    FlatList,
  } from "react-native";
  const data = [
    { name: "rahul", age: 38 },
    { name: "sye", age: 1 },
  ];
  export default function App() {
    return (
      <View>
        {data.map((a) => {
          return <Text> {a.name}</Text>;
        })}
        <FlatList
          data={data}
          renderItem={(e) => (
            <Text
              key={e.index}
              onClick={() => {
                console.log(e);
              }}
            >
              {e.item.name}
            </Text>
          )}
        />
      </View>
    );
  }
  