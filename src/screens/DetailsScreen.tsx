import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import {View,StyleSheet,Text, Image,ScrollView} from 'react-native';
import { RootStackParamList } from "../navigation/AppNavigator";
import { SafeAreaView } from "react-native-safe-area-context";
import Colors from "../constants/color";
import CommonHeader from "../components/CommonHeader";


type Props = NativeStackScreenProps<RootStackParamList,'Detail'>

const DetailsScreen : React.FC<Props> = ({ route }) => {

    const {item } = route?.params;
    return(
        <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          <CommonHeader title={item.id.toString()} showBack />
  
          <ScrollView contentContainerStyle={styles.scrollContent}>
            <Image source={{ uri: item.image }} style={styles.image} />
  
            <Text style={styles.txtHeading}>Title</Text>
            <Text style={styles.title}>{item.title}</Text>
  
            <Text style={styles.txtHeading}>Description</Text>
            <Text style={styles.title}>{item.description}</Text>
  
            <Text style={styles.price}>Price : ${item.price}</Text>
          </ScrollView>
        </View>
      </SafeAreaView>
    );
  };

  const styles = StyleSheet.create({
    safeArea: {
      flex: 1,
      backgroundColor: Colors.black,
    },
    container: {
      flex: 1,
    },
    scrollContent: {
      paddingHorizontal: 10,
      paddingBottom: 20,
    },
    image: {
      width: 200,
      height: 200,
      alignSelf: 'center',
      marginTop: 20,
    },
    main: {
      paddingLeft: 10,
      paddingRight: 10,
      flexDirection: 'column',
    },
    title: {
      fontSize: 18,
      fontWeight: 'bold',
      color: Colors.white,
      marginVertical: 20,
    },
    txtHeading: {
      fontSize: 20,
      fontWeight: 'bold',
      color: Colors.secondary,
      marginTop: 10,
      alignSelf: 'center',
    },
    price: {
      fontSize: 18,
      color: Colors.primary,
      fontWeight:'bold'
    },
  });
  
export default DetailsScreen;