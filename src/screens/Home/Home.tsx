import React from "react";
import { Image, Text, View } from "react-native";

import { tailwind } from "tailwind";
import { Button } from "~/components/Button";
import { Card } from "~/components/Card";

interface HomeProps {}

export const Home: React.FunctionComponent<HomeProps> = ({}) => {
  const buttonPressed = () => {
    console.log("Button pressed");
  };

  return (
    <Card>
      <Image
        source={{
          uri: "https://images.unsplash.com/photo-1551783037-abc1c6093c85?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
        }}
        resizeMode="cover"
        style={[
          {
            width: 200,
            height: 200,
          },
          tailwind("rounded"),
        ]}
      />
      <Text style={tailwind("font-bold text-xl mt-2")}>Kimmy Love 💖</Text>
      <Text style={tailwind("text-xs text-gray-500")}>
        24 ans / Chant / Vivre
      </Text>
      <Button onPress={buttonPressed}>Envoyer un kiss 😘</Button>
      <Button onPress={buttonPressed} type="secondary">
        Ne pas donner suite
      </Button>
    </Card>
  );
};
