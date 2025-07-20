import React from 'react'
import {
  View,
  Text,
  Button,
  StyleSheet,
  Alert,
  ScrollView
} from 'react-native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParamList } from '../navigation/AppNavigator'
import { useAppDispatch, useAppSelector } from '../redux/hooks'
import { clearCart } from '../redux/cartSlice'
import CommonUi from '../components/CommonUi'
import CommonHeader from '../components/CommonHeader'
import Colors from '../constants/color'

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Checkout'>
}

const CheckoutScreen: React.FC<Props> = ({ navigation }) => {
  const dispatch = useAppDispatch()
  const cartItems = useAppSelector(state => state.cart.items)

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  )

  const handlePayment = () => {
    dispatch(clearCart())
    Alert.alert(
      'Success',
      'Payment successful! Your order has been placed.',
      [{ text: 'OK', onPress: () => navigation.replace('Restaurants') }]
    )
  }

  return (
    <View style={styles.container}>
      <CommonHeader title="Checkout" showBack={true} />

      <CommonUi style={{ flex: 1 }}>
        <ScrollView contentContainerStyle={styles.scrollContent}>
          <Text style={styles.txtSummary}>Order Summary:</Text>

          {cartItems.map(item => (
            <View key={item.id} style={styles.cartMain}>
              <Text style={styles.txtItemName}>
                {item.name} - ₹{item.price} x {item.quantity}
              </Text>
            </View>
          ))}
        </ScrollView>

        <View style={styles.bottomContainer}>
          <Text style={styles.txtTotal}>Total to Pay: ₹{total}</Text>
          <Button title="Confirm Payment" onPress={handlePayment} />
        </View>
      </CommonUi>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  scrollContent: {
    padding: 16,
    paddingBottom: 20
  },
  txtSummary: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
    color: Colors.white
  },
  cartMain: {
    marginBottom: 8
  },
  txtItemName: {
    fontSize: 16,
    color: Colors.white
  },
  bottomContainer: {
    borderTopWidth: 1,
    borderColor: '#ccc',
    padding: 16,
    backgroundColor: '#fff'
  },
  txtTotal: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#000'
  }
})

export default React.memo(CheckoutScreen)