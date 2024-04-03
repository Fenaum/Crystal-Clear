import { View, Text, ScrollView, SafeAreaView, Image } from 'react-native';
import { useState } from 'react';
import { Stack, useRouter } from 'expo-router'
import Navbar from '../components/home/navbar/Navbar'
import { icons, COLORS, SIZES } from '../constants'
import { ScreenHeaderBtn } from "../components";


const Home = () => {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
        <Stack.Screen
          options={{
            headerStyle: { backgroundColor: COLORS.lightWhite },
            headerShadowVisible: false,
            headerLeft: () => (
              <ScreenHeaderBtn iconURL={icons.home} dimension="80%" />
            ),
            headerRight: () => (
              <ScreenHeaderBtn iconURL={icons.menu} dimension="80%" />
            ),
            headerTitle: "",
          }}
        ></Stack.Screen>
        <ScrollView showsHorizontalScrollIndicator={false}></ScrollView>
      </SafeAreaView>
    );
}

export default Home;