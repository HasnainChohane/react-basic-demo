import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
  ImageBackground,
  useColorScheme
} from 'react-native';

const App = () => {
  const theme = useColorScheme()

  const isDarkMode = theme == 'dark';
  const backgroundColor = isDarkMode ?'black':'light'
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [displayUser, setDisplayUser] = useState('');

  const handleLogin = () => {
    if (!username || !password) {
      Alert.alert('Error', 'Please fill out both fields');
      return;
    }

    setDisplayUser(username);

    Alert.alert(
      'Success',
      `Welcome ${username}!`
    );
  };

  return (
    <ImageBackground
    
      source={{ uri: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80' }}
      style={[styles.backgroundImage, { backgroundColor: backgroundColor }]}>
    
      <View style={[styles.overlay, { backgroundColor:backgroundColor }]}>
        <Text style={styles.headerText}>WELCOME!</Text>
        <Text style={styles.subHeaderText}>
          YOU HAVE TO LOGIN
        </Text>

        <View style={styles.formContainer}>
          <Text style={styles.instructionText}>
            Enter your credentials
          </Text>

          <TextInput
            style={styles.input}
            placeholder="Username or Email"
            placeholderTextColor="#666"
            value={username}
            onChangeText={setUsername}
          />

          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="#666"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />

          <TouchableOpacity
            style={styles.loginButton}
            onPress={handleLogin}
          >
            <Text style={styles.loginButtonText}>
              LOGIN
            </Text>
          </TouchableOpacity>

          {displayUser !== '' && (
            <Text style={styles.resultText}>
              Logged in as: {displayUser}
            </Text>
          )}
        </View>
      </View>
    </ImageBackground>
  );
};

export default App;

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
  },

  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: 20,
  },

  headerText: {
    fontSize: 29,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },

  subHeaderText: {
    fontSize: 24,
    color: '#fff',
    marginBottom: 30,
  },

  formContainer: {
    width: '90%',
    alignItems: 'center',
  },

  instructionText: {
    color: '#fff',
    marginBottom: 15,
    fontSize: 16,
    alignSelf: 'flex-start',  
  },

  input: {
    width: '100%',
    height: 45,
    backgroundColor: 'rgba(255, 255, 255, 0.93)',
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 15,
  },

  loginButton: {
    width: '30%',
    height: 40,
    backgroundColor: '#1a53f0',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 10,
  },

  loginButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },

  resultText: {
    color: '#fd0e0e',
    fontSize: 18,
    marginTop: 20,
  },
});