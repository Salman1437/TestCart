import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigator';
import CommonUi from '../components/CommonUi';
import Colors from '../constants/color';

type Props = NativeStackScreenProps<RootStackParamList, 'Splash'>;

const SplashScreen: React.FC<Props> = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => navigation.replace('Login'), 5000); // Wait fot 2 seconds then will moved to Login Screen
  }, []);

  return (
    <CommonUi>
    
      <Text style={styles.text}>Welcome to MyApp</Text>
    
    </CommonUi>
  );
};

const styles = StyleSheet.create({
  text: { fontSize: 24, fontWeight: 'bold',letterSpacing:0.5,color:Colors.white,alignSelf:'center' },
});

export default React.memo(SplashScreen);
