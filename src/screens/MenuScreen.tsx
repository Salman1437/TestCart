import React from 'react'
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParamList } from '../navigation/AppNavigator'
import { useAppDispatch, useAppSelector } from '../redux/hooks'
import { addToCart, removeFromCart, decreaseQuantity } from '../redux/cartSlice'
import CommonUi from '../components/CommonUi'
import CommonHeader from '../components/CommonHeader'
import Images from '../constants/images'

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Menu'>
}

const MENU = [
  { id: '1', name: 'Margherita Pizza', price: 10 },
  { id: '2', name: 'Pepperoni Pizza', price: 12 },
  { id: '3', name: 'Veggie Pizza', price: 11 },
  { id: '4', name: 'Chicken Burger', price: 60 },
  { id: '5', name: 'French Fries', price: 50 },
  { id: '6', name: 'Pizza 65', price: 120 },
]

const MenuScreen: React.FC<Props> = ({ navigation }) => {
  const dispatch = useAppDispatch()
  const cartItems = useAppSelector(state => state.cart.items)

  const getQuantity = (id: string) => {
    const item = cartItems.find(ci => ci.id === id)
    return item?.quantity ?? 0
  }

  const renderItem = ({ item }: { item: typeof MENU[0] }) => {
    const quantity = getQuantity(item.id)

    return (
      <View style={style.itemMain}>
        <Text style={style.txtTitle}>{item.name} - ₹{item.price}</Text>

        <View style={style.row}>
          <TouchableOpacity
            style={style.btn}
            onPress={() => {
              if (quantity > 1) {
                dispatch(decreaseQuantity(item.id))
              } else if (quantity === 1) {
                dispatch(removeFromCart(item.id))
              }
            }}
          >
            <Image source={Images.minusImage} style={style.icon} />
          </TouchableOpacity>

          <Text style={style.qty}>{quantity}</Text>

          <TouchableOpacity
            style={style.btn}
            onPress={() => dispatch(addToCart({ ...item, quantity: 1 }))}
          >
            <Image source={Images.plusImage} style={style.icon} />
          </TouchableOpacity>
        </View>
      </View>
    )
  }

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <CommonUi>
      <CommonHeader title="Menu" showBack={true} />

      <FlatList
        data={MENU}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        contentContainerStyle={{ paddingBottom: 100 }}
      />

      <TouchableOpacity
        style={[
          style.cartBtn,
          totalItems === 0 && style.disabledBtn
        ]}
        onPress={() => navigation.navigate('Cart')}
        disabled={totalItems === 0}
      >
        <Text style={style.cartBtnText}>Go to Cart</Text>
      </TouchableOpacity>
    </CommonUi>
  )
}

const style = StyleSheet.create({
  itemMain: {
    marginBottom: 16,
    padding: 12,
    backgroundColor: '#f8f8f8',
    borderRadius: 8,
  },
  txtTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  btn: {
    padding: 8,
    backgroundColor: '#ddd',
    borderRadius: 6,
  },
  icon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
  qty: {
    fontSize: 16,
    fontWeight: 'bold',
    marginHorizontal: 12,
    minWidth: 20,
    textAlign: 'center',
  },
  cartBtn: {
    backgroundColor: '#2196f3',
    padding: 12,
    margin: 20,
    borderRadius: 6,
    alignItems: 'center',
  },
  cartBtnText: {
    color: '#fff',
    fontSize: 16,
  },
  disabledBtn: {
    backgroundColor: '#999',
  },
})

export default React.memo(MenuScreen)