import { StatusBar } from 'expo-status-bar';
import React ,{useState}from 'react';
import { StyleSheet,View, ImageBackground, Text, TouchableOpacity, ColorPropType, TextInput, Alert } from 'react-native';
import { AntDesign, Entypo} from '@expo/vector-icons';

export default function App() {


  const [eye, setEye] = useState(true);


  return (
    <View style={styles.container}>
      <StatusBar hidden/>
      <ImageBackground 
      style={styles.imgBg}
      source={require('./src/assests/animebkg.jpg')}
      blurRadius={3}
      >
        <View style={styles.containerLogin}>
              <Text style={styles.loginTitle}>Faça login</Text>
              <View style={styles.loginProfile}>
                <TextInput
                  style={styles.InputText} 
                  placeholder='Digite seu email'
                  placeholderTextColor='#fff'
                  />
                <AntDesign name="user" style={{width:30}} size={24} color="#fff" />
              </View>
              <View style={styles.loginProfile}>
                 <TextInput
                    secureTextEntry={eye ? true: false}
                    style={styles.InputText}
                    placeholder= 'Digite sua senha'
                    placeholderTextColor='#fff'
                />
                <Entypo name={eye ? 'eye' : 'eye-with-line'} onPress={()=> setEye(!eye)} size={24} color="#fff" />              
                </View>

                <TouchableOpacity onPress={()=> alert('usuário logado')} style={styles.btn}>
                    <Text
                      style={{textTransform:'uppercase', fontWeight:'bold', color:'#fff'}}                    
                    >logar</Text>
                </TouchableOpacity>

                <View style={styles.containerRegister}>
                    <Text style={{color:'#fff'}}>Já possui uma conta?</Text>
                    <TouchableOpacity style={{marginLeft: 5}}>
                      <Text style={{color:'#4bb7de'}}>Então registre-se</Text>
                    </TouchableOpacity>
                </View>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  imgBg:{
    flex: 1,
    justifyContent: 'center',

    width: '100%',
    resizeMode:"cover",

      
  },
  containerLogin:{
    height: 300,
    width: '90%',
    alignSelf: 'center',
    justifyContent:'center',
    alignItems:'center',
  
    
  },
  loginTitle:{
    width: '100%',
    justifyContent:'center',
    textAlign: 'center',
    fontFamily:'sans-serif',
    fontWeight:'bold',
    fontSize:40,
    textShadowColor:'rgba(0, 0, 0, .5)',
    textShadowRadius:30,
    color: '#fff',
  
  },
  InputText:{
    width: '80%',
    backgroundColor:'#fff',
    height: 30,
    backgroundColor:'transparent',
    color: '#fff'
  },
  loginProfile:{
    justifyContent:'center',
    alignItems:'center',
    width: '90%',
    flexDirection:'row',
    marginTop:20,
    backgroundColor:'transparent',
    borderBottomColor:'rgba(200, 200, 200, .4)',
    borderBottomWidth:1,
    borderStyle:'solid',
    padding: 10
    
  },
  btn:{
    backgroundColor:'#4bb7de',
    marginTop:20,
    width: '90%',
    height: 40,
    justifyContent:'center',
    alignItems:'center'


  },
  containerRegister:{
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'row',
    marginTop:20

  }
});
