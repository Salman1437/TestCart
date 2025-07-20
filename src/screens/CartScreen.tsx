import React, { useEffect } from 'react'
import {
  View,
  Text,
  FlatList,
  ListRenderItem,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParamList } from '../navigation/AppNavigator'
import { useAppDispatch, useAppSelector } from '../redux/hooks'
import { removeFromCart, addToCart, decreaseQuantity } from '../redux/cartSlice'
import CommonUi from '../components/CommonUi'
import CommonHeader from '../components/CommonHeader'
import Images from '../constants/images'
import Colors from '../constants/color'

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Cart'>
}

const CartScreen: React.FC<Props> = ({ navigation }) => {
  const dispatch = useAppDispatch()
  const cartItems = useAppSelector(state => state.cart.items)

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  )

  useEffect(() => {
    if (cartItems.length === 0) {
      navigation.goBack()
    }
  }, [cartItems.length, navigation])



  const renderItem: ListRenderItem<typeof cartItems[0]> = ({ item }) => (
    <View style={styles.itemMain}>
      <Text style={styles.txtTitle}>{item.name} - ₹{item.price}</Text>

      <View style={styles.qtyRow}>
        <TouchableOpacity
          style={styles.qtyBtn}
          onPress={() => dispatch(decreaseQuantity(item.id))}
        >
          <Text style={styles.qtySymbol}>−</Text>
        </TouchableOpacity>

        <Text style={styles.qtyValue}>{item.quantity}</Text>

        <TouchableOpacity
          style={styles.qtyBtn}
          onPress={() => dispatch(addToCart({ ...item, quantity: 1 }))}
        >
          <Text style={styles.qtySymbol}>+</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => dispatch(removeFromCart(item.id))}
          style={styles.deleteBtn}
        >
          <Image
            source={Images.deleteImage} // Ensure this icon exists
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>
    </View>
  )

  return (
    <CommonUi>
      <CommonHeader title="Cart" showBack={true} />

      <FlatList
        data={cartItems}
        keyExtractor={item => item.id}
        renderItem={renderItem}
      />

      <Text style={styles.txtTotal}>Total: ₹{total}</Text>

      <TouchableOpacity
        style={styles.checkoutBtn}
        onPress={() => navigation.navigate('Checkout')}
      >
        <Text style={styles.checkoutText}>Proceed to Checkout</Text>
      </TouchableOpacity>
    </CommonUi>
  )
}

const styles = StyleSheet.create({
  itemMain: {
    marginBottom: 14,
    padding: 12,
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
  },
  txtTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  qtyRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  qtyBtn: {
    backgroundColor: '#ddd',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 6,
  },
  qtySymbol: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  qtyValue: {
    fontSize: 18,
    marginHorizontal: 12,
  },
  deleteBtn: {
    marginLeft: 'auto',
    paddingHorizontal: 8,
  },
  icon: {
    width: 22,
    height: 22,
    tintColor: 'red',
  },
  txtTotal: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 16,
    color: Colors.white
  },
  checkoutBtn: {
    backgroundColor: '#2196f3',
    padding: 14,
    borderRadius: 8,
    alignItems: 'center',
  },
  checkoutText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
})

export default React.memo(CartScreen)