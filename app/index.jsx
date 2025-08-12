import { StyleSheet, Text } from 'react-native'
import React from 'react'
import {Link} from 'expo-router'

//Themed Component
import ThemedView from '../components/ThemedView'
import ThemedLogo from '../components/ThemedLogo'
import ThemedText from '../components/ThemedText'
import Spacer from '../components/Spacer'

const Home = () => {
  return (
    <ThemedView style={styles.container}>
      {/* <Image source={{uri : ''}}/>  for external pics*/}
      <ThemedLogo />
      <Spacer height={20}/>

      <ThemedText style={styles.title} title={true}>The number 1</ThemedText>
      {/* <Text style={[styles.title, {color : 'red'}]}>The number 1</Text> */}
      <Spacer height={10} />
      <ThemedText>Reading list files</ThemedText>

      <Link href='/login' style={styles.link}>
        <ThemedText>Login</ThemedText>
      </Link>
      <Link href='/register' style={styles.link}>
        <ThemedText>Register</ThemedText>
      </Link>
      <Link href='/profile' style={styles.link}>
        <ThemedText>Profile</ThemedText>
      </Link>
    </ThemedView>
  )
}

export default Home

const styles = StyleSheet.create({
  container : {
    flex : 1,
    alignItems : 'center',
    justifyContent : 'center'
  },
  title : {
    fontWeight: 'bold', 
    fontSize : 18
  }, 
  link : {
    marginVertical : 10,
    borderBottomWidth : 1
  }
})