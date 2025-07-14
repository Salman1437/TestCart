import React,{useState} from "react";
import {View,StyleSheet,TextInput,Button, Text, TouchableOpacity, Alert} from 'react-native';
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/AppNavigator";
import AppTextInput from "../components/AppTextInput";
import Colors from "../constants/color";
import ErrorModal from "../components/ErrorModal";
import CommonUi from "../components/CommonUi";
import { useNetwork } from '../network/useNetwork';

type Props = NativeStackScreenProps<RootStackParamList,'Login'>; // used to type the props to the Login screen component using navigstion with navigation with typescript 
const LoginScreen : React.FC<Props> = ({navigation}) => { // React.FC is TypeScript to define  a fucntional React Component with typed props

    const [userName,setUserName] = useState('');
    const [password,setPassword] = useState('');
    const [error, setError] = useState('');
    const [showError, setShowError] = useState(false);
      const { isConnected } = useNetwork(); //to check internet is connected or not


    const handleLoginPress = async() => {
        //Here we will check userName and password with validations and if error will show common modal by passing error and its visibility
        
        if(userName.trim().length < 3)
        {
            setError('Username must be at least 3 characters');
            setShowError(true);
            return;
        }
        else  if(password.trim().length < 5)
        {
            setError('Minimum 5 characters password is required');
            setShowError(true);
            return;
        }
        else if(!isConnected)
        {
            Alert.alert('No Internet')
        }
        else{
            //After validation is success then will move to Home Screen
            navigation?.replace('Restaurants')
        }
    }

    return(

        <CommonUi>

        <Text style={styles.txtLogin}>LOGIN</Text>


<AppTextInput /* here we created one text input common which can be resuable hence textinpiut will be same in login n signn up ui */
  label="Username"
  placeholder="Enter Username"
  value={userName}
  onChangeText={setUserName}
/>

<AppTextInput
  label="Password"
  placeholder="Enter Password"
  value={password}
  onChangeText={setPassword}
  isPassword
/>

<TouchableOpacity style={styles.btnLogin} onPress={
    handleLoginPress}>
  <Text style={styles.txtLogin}>Login</Text>
</TouchableOpacity>

<ErrorModal visible={!!error && showError} message={error || ''} onClose={() => setShowError(false)} />


        </CommonUi>
    )
}

const styles = StyleSheet.create({
  
    txtLogin : {
        color:Colors.white,
        fontSize:24,
        letterSpacing:3,
        alignSelf:'center',
        fontWeight:'bold'
    },
    btnLogin: { 
        borderWidth: 1, 
        padding: 10, 
        marginBottom: 20,
        borderRadius:8,
        backgroundColor:Colors.primary
    }
})

export default React.memo(LoginScreen);