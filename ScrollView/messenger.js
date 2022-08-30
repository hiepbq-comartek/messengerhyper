import * as React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TextInput,
  Image,
  Button,
  TouchableOpacity,
} from 'react-native';

const Message = () => {
  return (
    <SafeAreaView>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Đăng ký" component={Siginout} />
        </Stack.Navigator>
        <View>
          <View style={styles.logo}>
            <Image
              style={{width: 60, height: 60}}
              source={require('./accset/img/z3681068714710_a4ea01c851d38352e46f609315e51bc8.jpg')}
            />
            <View>
              <Text style={{fontSize: 12}}>hypetech.com</Text>
            </View>
          </View>
          <View>
            <Text style={styles.textname}>Xin chào Hiệp</Text>
          </View>

          <View style={styles.form}>
            <ScrollView>
              <TextInput placeholder="Tìm kiếm bạn bè" style={styles.input} />
            </ScrollView>
          </View>
          <View style={styles.blockmes}>
            <Image />
            <Text>Quang Hiep</Text>
            <Text>thong tin can gui</Text>
          </View>
        </View>
      </NavigationContainer>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  textname: {
    fontSize: 20,
    alignItems: 'center',
    width: '100%',
    marginTop: 8,
    textAlign: 'center',
  },
  logo: {
    marginTop: 4,
    width: '100%',
    alignContent: 'center',
    alignItems: 'center',
  },
  input: {
    backgroundColor: '#ccc',
    fontSize: 12,
    marginLeft: 28,
    marginRight: 28,
    marginTop: 0,
    marginBottom: 10,
    borderRadius: 30,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 12,
    paddingBottom: 12,
  },
  form: {
    marginTop: 40,
  },
  button: {
    width: 160,
    backgroundColor: 'red',
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  siginout: {
    marginTop: -3,
  },
  textsigin: {
    color: 'blue',
  },
  blockmes: {
    marginRight: 20,
    marginLeft: 20,
    backgroundColor: 'red',
    fontSize: 10,
    height: 48,
    marginTop: 12,
    borderRadius: 8,
  },
});

export default Message;
