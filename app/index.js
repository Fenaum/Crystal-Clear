import { View, Text, ScrollView, SafeAreaView, Image } from 'react-native';
import { useState } from 'react';
import { Stack, useRouter } from 'expo-router'
import { icons, COLORS, SIZES } from '../constants'
import { ScreenHeaderBtn, Welcome, ScreenFooter } from "../components";


const Home = () => {
    const router = useRouter();

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
        <ScrollView showsVerticalScrollIndicator={false}>
          <View
            style={{
              flex: 1,
              padding: SIZES.medium,
            }}
          >
            <Welcome />
          </View>
        </ScrollView>
        <ScreenFooter 
        middleIconURL={icons.grid} 
        leftIconURL={icons.menu} 
        rightIconURL={icons.search} sideBtnDimensions="50%" middleBtnDimension="50%" />
      </SafeAreaView>
    );
}

export default Home;