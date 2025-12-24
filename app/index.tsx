import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View className="flex-1 items-center justify-center">
      <Text className="text-5xl text-dark-200 font-bold">Welcome!</Text>
      <Link href="/onboarding">Onboarding</Link>
      <Link href="/movie/avengers">Avengers movie</Link>
    </View>
  );
}





/*

import { StyleSheet, Text, View } from "react-native";

import React from "react";

const Onboarding = () => {
    return (
        <View>
            <Text>Onboarding</Text>
        </View>
    );
};


export default Onboarding;
const styles = StyleSheet.create({});


*/