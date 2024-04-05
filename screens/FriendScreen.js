import { StyleSheet, Text, View, Image, Button, TextInput, TouchableOpacity } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Back from "../assets/img/Group 21";
import Group56 from "../assets/img/Group 56";

export default function FriendScreen( {navigation} ) {
    return (
      <View style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '70%', width: '100%', padding: 40}}>
        <TouchableOpacity>
          <View style={{position: 'absolute', top: 10, left: 10}}>
            <Back onPress={() => navigation.navigate("Home")}/>
          </View>
        </TouchableOpacity>
        <View style={{alignItems: 'center', justifyContent: 'space-between', height: '30%'}}>
          <View>
            <Group56/>
          </View>
          <View>
            <Text style={{fontSize: 14, color: '#000000', textAlign: 'center'}}>با ارسال کد معرف خود به دوستانتان ضریب دریافت سکه خود را افزایش دهید . دوست شما هم با وارد کرد کد شما میتواند 20 % به ضریب خود اضافه کند</Text>
          </View>
          <View>
            <Text style={{fontSize: 14, color: '#000000'}}>ضریب فعلی شما: <Text style={{fontSize: 14, color: '#000000'}}>1.0</Text></Text>
          </View>
        </View>
        <View style={{flexDirection: 'row-reverse', justifyContent: 'space-between', height: '10%'}}>
          <Text style={{fontSize: 14, color: '#000000'}}>کد معرف شما:</Text>
          <View style={{justifyContent: 'space-between'}}>
            <Text style={{fontSize: 14, color: '#000000'}}>123456789</Text>
            <Text>برای کپی شدن ضربه بزنید</Text>
          </View>
        </View>
        <View style={{height: '20%', justifyContent: 'space-between'}}>
          <View>
            <Text style={{fontSize: 14, color: '#000000', textAlign: 'center'}}>با وارد کردن کد دوست خود 20% ضریب بگیرید</Text>
          </View>
          <View style={{display: 'flex', justifyContent: 'space-between'}}>
            <View style={{justifyContent: 'space-between', flexDirection: 'row', alignItems:  'center'}}>
              <TextInput style={{backgroundColor: '#D9D9D9', width: '55%', textAlign: 'center'}} placeholder='کد دوست' placeholderTextColor={'#000'}/>
              <Button title='تایید کد' color='#D47F02'/>
            </View>
          </View>
        </View>
      </View>
    );
  }