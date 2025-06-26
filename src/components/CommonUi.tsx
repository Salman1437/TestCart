import React from 'react';
import {View,SafeAreaView,StyleSheet} from 'react-native';
import Colors from '../constants/color';


const CommonUi : React.FC<React.PropsWithChildren> = ({children}) =>{

    return(
        <SafeAreaView style={styles.safeArea}>

            <View style={styles.container}>
            {children}
            </View>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    safeArea: {
      flex: 1,
      backgroundColor: Colors.black, // or Colors.black if using color file
    },
    container: {
      flex: 1,
      paddingLeft: 10,
      paddingRight:10,
      justifyContent : 'center',
    },
  });
export default React.memo(CommonUi);