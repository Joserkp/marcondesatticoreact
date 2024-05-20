import React from 'react';
import { Signup } from './pages/SignUp';
import { Routes } from "./src/routes";
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <NavigationContainer>
    <Signup/>
    </NavigationContainer>
  );
}