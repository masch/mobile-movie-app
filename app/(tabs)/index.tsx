import { useRouter } from "expo-router";
import { Image, ScrollView, View } from "react-native";

import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import SearchBar from "../components/SearchBar";

export default function Index() {
  const router = useRouter();


  return (
    <View
      className="flex-1 bg-primary"
    >
      <Image
        source={images.bg}
        className="absolute w-full z-0"
      />
      <ScrollView
        className="flex-1 px-5"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          minHeight: '100%',
          paddingBottom: 10
        }}>
        <Image
          source={icons.logo}
          className="w-12 h-10 mt-20 mb-5 mx-auto"
        />
        <View className="flex-1 mt-5">
          <SearchBar
            onPress={() => router.push('/search')}
            placeholder="Search"
          />
        </View>
      </ScrollView>
    </View>
  );
}





/*
1:04

// Screen with Styled Components
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



// Screen 


import { Text, View } from "react-native";

import React from "react";

const Onboarding = () => {
    return (
        <View>
            <Text>Onboarding</Text>
        </View>
    );
};

export default Onboarding;


*/