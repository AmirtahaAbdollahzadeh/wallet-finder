import {
  View,
  Text,
  StyleSheet,
  Button,
  Image,
  TouchableOpacity,
} from 'react-native';
import Logo from '../assets/img/Logo.svg';
import CoinCountBoxBig from '../assets/img/CoinCountBoxBig.svg';
import ZapCounter from '../assets/img/ZapCounter.svg';
import ProgressBar from '../assets/img/ProgressBar.svg';
import Cart from '../assets/img/Cart.svg';
import {StrokeText} from '@charmy.tech/react-native-stroke-text';

export default function HomeScreen({navigation}) {
  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}>
      <View
        style={{
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          width: '100%',
          justifyContent: 'space-between',
          paddingTop: 29,
          paddingBottom: 20,
        }}>
        <View
          style={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
          }}>
          <View
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Logo style={{marginBottom: 24}} />
          </View>
          <View
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
            }}>
            <TouchableOpacity onPress={() => navigation.navigate('Harvest')}>
              <View style={{position: 'relative', alignItems: 'center'}}>
                <CoinCountBoxBig />
                <Text
                  style={{
                    fontSize: 32,
                    fontFamily: 'Pacifico-Regular',
                    color: '#A40101',
                    top: -15,
                    position: 'absolute',
                  }}
                  onPress={() => navigation.navigate('Harvest')}>
                  52366
                </Text>
              </View>
            </TouchableOpacity>
            <View style={{position: 'absolute', right: 30}}>
              <View style={{position: 'relative', alignItems: 'center'}}>
                <ZapCounter />
                <View
                  style={{
                    position: 'absolute',
                    alignItems: 'center',
                    bottom: 5,
                  }}>
                  <Text
                    style={{
                      fontSize: 24,
                      top: 12,
                      fontFamily: 'Pacifico-Regular',
                      color: '#A40101',
                    }}>
                    4
                  </Text>
                  <Text
                    style={{
                      fontSize: 10,
                      top: 0,
                      fontFamily: 'Pacifico-Regular',
                      color: '#A40101',
                    }}>
                    295
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View>
          <View
            style={{
              display: 'flex',
              alignItems: 'center',
              marginTop: 32,
              marginBottom: 40,
            }}>
            <ProgressBar />
          </View>
          <TouchableOpacity
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onPress={() => navigation.navigate('Play')}>
            <Image
              style={{
                width: 132,
                height: 144,
              }}
              source={require('../assets/img/play.png')}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            minHeight: 240,
          }}>
          <View
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'row',
            }}>
            <TouchableOpacity onPress={() => navigation.navigate('Friend')}>
              <View style={{position: 'relative', width: 60}}>
                <Image
                  style={{
                    width: 42,
                    height: 52,
                  }}
                  source={require('../assets/img/bag.png')}
                />
                <View style={{position: 'absolute', right: 0}}>
                  <Text
                    style={{
                      fontSize: 16,
                      fontFamily: 'Pacifico-Regular',
                      color: '#830F01',
                      top: -6,
                      right: 2,
                    }}>
                    5
                  </Text>
                  <StrokeText
                    text="3"
                    fontSize={32}
                    color="#D05900"
                    strokeColor="#000000"
                    strokeWidth={2}
                    fontFamily="Pacifico-Regular"
                    style={{
                      top: -5,
                      right: 8,
                      textShadowColor: 'rgba(0, 0, 0, 0.75)',
                      textShadowOffset: {width: 0, height: 4},
                      textShadowRadius: 10,
                    }}
                  />
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Buy')}>
              <View
                style={{
                  position: 'relative',
                  width: 60,
                  marginRight: 16,
                  marginLeft: 16,
                }}>
                <Image
                  style={{
                    width: 42,
                    height: 52,
                  }}
                  source={require('../assets/img/bag.png')}
                />
                <View style={{position: 'absolute', right: 0}}>
                  <Text
                    style={{
                      fontSize: 16,
                      fontFamily: 'Pacifico-Regular',
                      color: '#830F01',
                      top: -6,
                      right: 2,
                    }}>
                    10
                  </Text>
                  <StrokeText
                    text="0"
                    fontSize={32}
                    color="#D05900"
                    strokeColor="#000000"
                    strokeWidth={2}
                    fontFamily="Pacifico-Regular"
                    style={{
                      top: -5,
                      right: 8,
                      textShadowColor: 'rgba(0, 0, 0, 0.75)',
                      textShadowOffset: {width: 0, height: 4},
                      textShadowRadius: 10,
                    }}
                  />
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Buy')}>
              <View style={{position: 'relative', width: 59.2}}>
                <Image
                  style={{
                    width: 42,
                    height: 52,
                  }}
                  source={require('../assets/img/bag.png')}
                />
                <View style={{position: 'absolute', right: 0}}>
                  <Text
                    style={{
                      fontSize: 16,
                      fontFamily: 'Pacifico-Regular',
                      color: '#830F01',
                      top: -6,
                      right: 2,
                    }}>
                    15
                  </Text>
                  <StrokeText
                    text="2"
                    fontSize={32}
                    color="#D05900"
                    strokeColor="#000000"
                    strokeWidth={2}
                    fontFamily="Pacifico-Regular"
                    style={{
                      top: -5,
                      right: 8,
                      textShadowColor: 'rgba(0, 0, 0, 0.75)',
                      textShadowOffset: {width: 0, height: 4},
                      textShadowRadius: 10,
                    }}
                  />
                </View>
              </View>
            </TouchableOpacity>
          </View>
          <View
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexDirection: 'row',
            }}>
            <TouchableOpacity>
              <Image
                style={{
                  width: 63,
                  height: 61,
                  marginLeft: 32,
                }}
                source={require('../assets/img/setting.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Friend')}>
              <Image
                style={{
                  width: 98,
                  height: 89,
                }}
                source={require('../assets/img/friend.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Buy')}>
              <Cart
                style={{
                  marginRight: 32,
                }}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
