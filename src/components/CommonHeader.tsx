import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import Colors from '../constants/color'
import { useNavigation } from '@react-navigation/native'
import Images from '../constants/images'

interface CommonHeaderProps {
  title: string
  showBack?: boolean
}

const CommonHeader: React.FC<CommonHeaderProps> = ({ title, showBack = true }) => {
  const navigation = useNavigation()

  return (
    <View style={styles.headerView}>
      {showBack ? (
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
          <Image style={styles.backIcon} source={Images.backImage} />
        </TouchableOpacity>
      ) : (
        <View style={styles.backBtn} />
      )}
      <Text style={styles.txtTitle}>{title}</Text>
      <View style={styles.placeholder} />
    </View>
  )
}

export default CommonHeader

const styles = StyleSheet.create({
  headerView: {
    width: '100%',
    height: 60,
    backgroundColor: Colors.white,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  backIcon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
    tintColor: Colors.black, // ← FIXED to be visible
  },
  backBtn: {
    width: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  placeholder: {
    width: 40,
  },
  txtTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    letterSpacing: 1,
    color: Colors.black,
    textAlign: 'center',
    flex: 1,
  },
})