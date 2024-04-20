import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Back from '../assets/img/Back.svg';

export default function FriendScreen({navigation}) {
  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: '100%',
        // height:'100%',
        flex: 1,
        padding: 10,
      }}>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <View style={{position: 'absolute', top: 10, left: 10}}>
          <Back />
        </View>
      </TouchableOpacity>
      <View
        style={{
          // marginTop: -32,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <Image
          style={{
            width: 98,
            height: 89,
          }}
          source={require('../assets/img/friend.png')}
        />
      </View>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          padding: 30,
        }}>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <View>
            <Text
              style={{
                fontSize: 14,
                fontFamily: 'Pacifico-Regular',
                color: '#000000',
                marginBottom: 24,
                textAlign: 'center',
              }}>
              با ارسال کد معرف خود به دوستانتان ضریب دریافت سکه خود را افزایش
              دهید . دوست شما هم با وارد کرد کد شما میتواند 20 % به ضریب خود
              اضافه کند
            </Text>
          </View>
          <View style={{marginBottom: 24}}>
            <Text
              style={{
                fontSize: 14,
                fontFamily: 'Pacifico-Regular',
                color: '#000000',
              }}>
              ضریب فعلی شما:{' '}
              <Text
                style={{
                  fontSize: 14,
                  fontFamily: 'Pacifico-Regular',
                  color: '#000000',
                }}>
                1.0
              </Text>
            </Text>
          </View>
        </View>
        <View
          style={{
            marginBottom: 10,
            flexDirection: 'row-reverse',
            justifyContent: 'space-between',
          }}>
          <Text
            style={{
              fontSize: 14,
              fontFamily: 'Pacifico-Regular',
              color: '#000000',
            }}>
            کد معرف شما:
          </Text>
          <View style={{justifyContent: 'space-between'}}>
            <Text
              style={{
                fontSize: 14,
                fontFamily: 'Pacifico-Regular',
                color: '#000000',
              }}>
              123456789
            </Text>
            <Text>برای کپی شدن ضربه بزنید</Text>
          </View>
        </View>
        <View style={{justifyContent: 'space-between'}}>
          <Text
            style={{
              marginBottom: 24,
              fontSize: 14,
              fontFamily: 'Pacifico-Regular',
              color: '#000000',
              textAlign: 'center',
            }}>
            با وارد کردن کد دوست خود 20% ضریب بگیرید
          </Text>
          <View style={{display: 'flex', justifyContent: 'space-between'}}>
            <View
              style={{
                justifyContent: 'space-between',
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <TextInput
                style={{
                  backgroundColor: '#D9D9D9',
                  fontFamily: 'Pacifico-Regular',
                  width: '55%',
                  textAlign: 'center',
                }}
                placeholder="کد دوست"
                placeholderTextColor={'#000'}
              />
              <TouchableOpacity
                style={{
                  backgroundColor: '#D47F02',
                  paddingVertical: 5,
                  paddingHorizontal: 30,
                  borderStyle: 'solid',
                  borderWidth: 1,
                  borderColor: '#000',
                }}>
                <Text
                  style={{
                    fontSize: 14,
                    fontFamily: 'Pacifico-Regular',
                    color: '#000000',
                    textAlign: 'center',
                  }}>
                  تایید کد
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
