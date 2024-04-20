import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TouchableOpacity,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Back from '../assets/img/Group 21';
import Cart from '../assets/img/Cart.svg';
import Group55 from '../assets/img/Group 55';
import Group81 from '../assets/img/Group 81';
import Buy1 from '../assets/img/buy1.svg';
import Buy5 from '../assets/img/buy5.svg';
import X2 from '../assets/img/X2.svg';
import Zap from '../assets/img/Zap.svg';

import {StrokeText} from '@charmy.tech/react-native-stroke-text';
import {cloneElement} from 'react';

export default function BuyScreen({navigation}) {
  const buy = [
    {
      id: 1,
      count: 5,
      icon: <X2 />,
    },
    {
      id: 2,
      count: 9,
      icon: (
        <Image
          style={{
            width: 39,
            height: 52,
          }}
          source={require('../assets/img/zoom.png')}
        />
      ),
    },
    {
      id: 3,
      count: 3,
      icon: (
        <Image
          style={{
            width: 28,
            height: 34,
          }}
          source={require('../assets/img/bag.png')}
        />
      ),
    },
    {
      id: 4,
      count: 3,
      icon: (
        <Image
          style={{
            width: 32,
            height: 40,
          }}
          source={require('../assets/img/zap.png')}
        />
      ),
    },
  ];
  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        width: '100%',
        padding: 10,
      }}>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <View style={{position: 'absolute', top: 10, left: 10}}>
          <Back />
        </View>
      </TouchableOpacity>
      <View
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '20%',
        }}>
        <View>
          <Cart />
        </View>
        <View style={{position: 'relative', alignItems: 'center'}}>
          <Group55 />
          <Text
            style={{
              fontSize: 32,
              fontFamily: 'Pacifico-Regular',
              color: '#A40101',
              top: -15,
              position: 'absolute',
            }}>
            52366
          </Text>
        </View>
      </View>
      <View
        style={{
          display: 'flex',
          flexDirection: 'column',
          padding: 30,
        }}>
        {buy.map(item => (
          <View
            key={item.id}
            style={{
              backgroundColor: '#FEE4BD',
              shadowColor: '#000',
              marginBottom: 15,
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,
              elevation: 5,
              paddingHorizontal: 20,
              paddingVertical: 10,
              display: 'flex',
              alignItems: 'center',
              flexDirection: 'row',
              justifyContent: 'space-between',
              borderRadius: 20,
            }}>
            <View style={{position: 'relative', width: 60}}>
              {cloneElement(item.icon)}
              <View style={{position: 'absolute', right: 0}}>
                <StrokeText
                  text={item.count.toString()}
                  fontSize={24}
                  color="#D05900"
                  strokeColor="#000000"
                  strokeWidth={2}
                  fontFamily="Pacifico-Regular"
                  style={{
                    bottom: -16,
                    right: 12,
                    textShadowColor: 'rgba(0, 0, 0, 0.75)',
                    textShadowOffset: {width: 0, height: 4},
                    textShadowRadius: 10,
                  }}
                />
              </View>
            </View>
            <View
              style={{
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'row',
                justifyContent: 'space-around',
                width: '70%',
              }}>
              <TouchableOpacity>
                <Buy1 />
              </TouchableOpacity>
              <TouchableOpacity>
                <Buy5 />
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
}
