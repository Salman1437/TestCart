import React from 'react'
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Button,
  ListRenderItem
} from 'react-native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParamList } from '../navigation/AppNavigator'
import CommonUi from '../components/CommonUi'
import CommonHeader from '../components/CommonHeader'
import Colors from '../constants/color'

const RESTAURANTS = [
  { id: '1', name: 'Leez Burger House', latitude: 22.7196, longitude: 75.8577 },
  { id: '2', name: '56 Dukan', latitude: 22.7233, longitude: 75.8689 },
  { id: '3', name: 'Nafees Restaurant', latitude: 22.7205, longitude: 75.8640 },
  { id: '4', name: 'Sufa Restaurant', latitude: 22.7218, longitude: 75.8602 },
  { id: '5', name: 'Shree Maya Celebration', latitude: 22.7251, longitude: 75.8667 },
  { id: '6', name: 'Gurukripa', latitude: 22.7268, longitude: 75.8621 },
]

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Restaurants'>
}

const RestaurantListScreen: React.FC<Props> = ({ navigation }) => {
  const renderItem: ListRenderItem<typeof RESTAURANTS[0]> = ({ item }) => (
    <View style={styles.restaurantItem}>
      <TouchableOpacity
        style={styles.nameContainer}
        onPress={() => navigation.navigate('Menu', { restaurantId: item.id })}
      >
        <Text style={styles.restaurantName}>{item.name}</Text>
      </TouchableOpacity>

      <Button
        title="Show on Map"
        onPress={() =>
          navigation.navigate('Map', {
            latitude: item.latitude,
            longitude: item.longitude,
            name: item.name,
          })
        }
      />
    </View>
  )

  return (
    <View style={styles.container}>
      <CommonHeader title="Home" showBack={false} />
      <CommonUi style={{ flex: 1 }}>
        <FlatList
          data={RESTAURANTS}
          keyExtractor={item => item.id}
          renderItem={renderItem}
          contentContainerStyle={styles.listContent}
        />
      </CommonUi>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  listContent: {
    paddingBottom: 20,
  },
  restaurantItem: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    flexDirection: 'row',
    alignItems: 'center',
  },
  nameContainer: {
    flex: 1,
    marginRight: 10,
  },
  restaurantName: {
    fontSize: 18,
    color: Colors.white,
  },
})

export default React.memo(RestaurantListScreen)