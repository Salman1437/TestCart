
import React, { useEffect } from "react";
import { FlatList, Text, TouchableOpacity, StyleSheet, View, SafeAreaView, Platform, StatusBar } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { fetchItems } from "../redux/itemsSlice";
import { RootState, AppDispatch } from "../redux/store";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/AppNavigator";
import Colors from "../constants/color";
import { Item } from "../types/Item"; // ✅ <-- FIXED
import { useSafeAreaInsets } from 'react-native-safe-area-context';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

const HomeScreen: React.FC<Props> = ({ navigation }) => {
  const dispatch = useDispatch<AppDispatch>();
  const { items, loading } = useSelector((state: RootState) => state.items);
  const insets = useSafeAreaInsets(); //to avoid bottom Ui overlay to navigations buttons at bottom of Mobile phones

  useEffect(() => {
    dispatch(fetchItems()); // Calling FetchItem api through redux with thunk`
  }, []);

  const renderList = ({ item }: { item: Item }) => ( //Here showing flat list items
    <TouchableOpacity onPress={() => navigation.navigate('Detail', { item })}>
      <Text style={styles.itemText}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={[styles.safeArea,{ paddingBottom: insets.bottom }]}> 
    <View style={styles.container}>
      {loading ? <Text style={styles.itemText}>Loading ...</Text> : (
        <FlatList
          data={items}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderList}
        />
      )}
    </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: Colors.black,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: Colors.black,
    paddingLeft: 10,
    paddingRight: 10
  },
  itemText: {
    color: Colors.white,
    fontSize: 16,
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: Colors.gray
  }
});

export default React.memo(HomeScreen);
