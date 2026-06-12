import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, ImageBackground, useColorScheme } from 'react-native';

const App = () => {
  const theme = useColorScheme();
  const isDarkMode = theme === 'dark';
  
  // State management
  const [isLoggingIn, setIsLoggingIn] = useState(true); // Tracks active screen
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState(''); // Separate state for registration
  const [displayUser, setDisplayUser] = useState('');

  const handleLogin = () => {
    if (!username || !password) {
      Alert.alert('Error', 'Please fill out both fields');
      return;
    }
    setDisplayUser(username);
    Alert.alert('Success', `Welcome ${username}!`);
  };

  const handleRegister = () => {
    if (!name || !username || !password) {
      Alert.alert('Error', 'Please fill out all fields');
      return;
    }
    Alert.alert('Success', 'Account created successfully!');
    setIsLoggingIn(true); // Redirect to login
  };

  return (
    <ImageBackground 
      source={{ uri: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80' }} 
      style={styles.backgroundImage}
    >
      <View style={[styles.overlay, { backgroundColor: isDarkMode ? 'rgba(0,0,0,0.7)' : 'rgba(0,0,0,0.4)' }]}>
        
        {isLoggingIn ? (
          /* ================= LOGIN VIEW ================= */
          <View style={styles.formContainer}>
            <Text style={styles.headerText}>WELCOME!</Text>
            <Text style={styles.subHeaderText}>YOU HAVE TO LOGIN</Text>
            <Text style={styles.instructionText}>Enter your credentials</Text>
            
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
            
            <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
              <Text style={styles.loginButtonText}>LOGIN</Text>
            </TouchableOpacity>

            <View style={styles.signupContainer}>
              <Text style={styles.signupText}>Don't have an account? </Text>
              <TouchableOpacity onPress={() => setIsLoggingIn(false)}>
                <Text style={styles.signupLink}>Sign Up</Text>
              </TouchableOpacity>
            </View>

            {displayUser !== '' && (
              <Text style={styles.resultText}> Logged in as: {displayUser} </Text>
            )}
          </View>
        ) : (
          /* ================= SIGN UP VIEW ================= */
          <View style={styles.formContainer}>
            <Text style={styles.headerText}>WELCOME!</Text>
            <Text style={styles.subHeaderText}>CREATE YOUR ACCOUNT</Text>
            <Text style={styles.instructionText}>Enter Details</Text>
            
            <TextInput 
              style={styles.input} 
              placeholder="Enter your Name" 
              placeholderTextColor="#666" 
              value={name} 
              onChangeText={setName} 
            />
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

            <TouchableOpacity style={styles.loginButton} onPress={handleRegister}>
              <Text style={styles.loginButtonText}>SUBMIT</Text>
            </TouchableOpacity>

            <View style={styles.signupContainer}>
              <Text style={styles.signupText}> If Already have an account? </Text>
              <TouchableOpacity onPress={() => setIsLoggingIn(true)}>
                <Text style={styles.signupLink}>Login</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}

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
    padding: 20,
  },
  headerText: {
    fontSize: 29,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
    textAlign: 'center',
  },
  subHeaderText: {
    fontSize: 24,
    color: '#fff',
    marginBottom: 30,
    textAlign: 'center',
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
    color: '#000',
  },
  loginButton: {
    width: '40%',
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
  signupContainer: {
    flexDirection: 'row',
    marginTop: 20,
    alignItems: 'center',
  },
  signupText: {
    color: '#fff',
  },
  signupLink: {
    color: '#1a53f0',
    fontWeight: 'bold',
  },
  resultText: {
    color: '#fd0e0e',
    fontSize: 18,
    marginTop: 20,
  },
});
