import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import Back from '../assets/img/Back.svg';
import CoinCountBoxSmall from '../assets/img/CoinCountBoxSmall.svg';
import X2 from '../assets/img/X2.svg';
import {StrokeText} from '@charmy.tech/react-native-stroke-text';

function chunk(inputArray, perChunk) {
  const result = inputArray.reduce((resultArray, item, index) => {
    const chunkIndex = Math.floor(index / perChunk);

    if (!resultArray[chunkIndex]) {
      resultArray[chunkIndex] = []; // start a new chunk
    }

    resultArray[chunkIndex].push(item);

    return resultArray;
  }, []);

  return result;
}

export default function PlayScreen({navigation}) {
  const coins = [
    {
      id: 1,
    },
    {
      id: 2,
    },
    {
      id: 3,
    },
    {
      id: 4,
    },
    {
      id: 5,
    },
    {
      id: 6,
    },
    {
      id: 7,
    },
    {
      id: 8,
    },
    {
      id: 9,
    },
    {
      id: 10,
    },
    {
      id: 11,
    },
    {
      id: 12,
    },
    {
      id: 13,
    },
    {
      id: 14,
    },
    {
      id: 15,
    },
    {
      id: 16,
    },
    {
      id: 17,
    },
    {
      id: 18,
    },
    {
      id: 19,
    },
    {
      id: 20,
    },
    {
      id: 21,
    },
    {
      id: 22,
    },
    {
      id: 23,
    },
    {
      id: 24,
    },
    {
      id: 25,
    },
    {
      id: 26,
    },
    {
      id: 27,
    },
    {
      id: 28,
    },
    {
      id: 29,
    },
    {
      id: 30,
    },
  ];

  const chunkCoins = chunk(coins, 5);
  const normalizeCoins = chunkCoins.map((item, index) => {
    return {
      data: item,
      id: index,
    };
  });
  return (
    <View style={{padding: 10, paddingTop: 6}}>
      <View
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          height: '100%',
          width: '100%',
        }}>
        <View style={{display: 'flex', flexDirection: 'column'}}>
          <View
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexDirection: 'row',
            }}>
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
              <Back />
            </TouchableOpacity>
            <View style={{position: 'relative'}}>
              <Image
                style={{
                  width: 50,
                  height: 53,
                }}
                source={require('../assets/img/zoom.png')}
              />
              <Text
                style={{
                  position: 'absolute',
                  bottom: -20,
                  fontFamily: 'Pacifico-Regular',
                  fontSize: 32,
                  left: 13,
                  color: '#A40101',
                }}>
                3
              </Text>
            </View>
          </View>
          <View style={{display: 'flex', alignItems: 'center'}}>
            <CoinCountBoxSmall style={{position: 'relative'}} />
            <View style={{position: 'absolute'}}>
              <Text
                style={{
                  fontSize: 28,
                  fontFamily: 'Pacifico-Regular',
                  color: '#A40101',
                  marginLeft: 25,
                  marginTop: -6,
                }}>
                +12
              </Text>
            </View>
          </View>
        </View>
        <View
          style={{
            display: 'flex',
            // flexDirection: 'row',
            // flexWrap: 'wrap',/**/
            // justifyContent: 'space-between',
            // alignItems: 'center',
          }}>
          {normalizeCoins.map(item => (
            <View
              key={item.id}
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: '100%',
              }}>
              {item.data.map(x => (
                <TouchableOpacity>
                  <Image
                    style={{
                      width: 50,
                      height: 61,
                      margin: 5,
                    }}
                    source={require('../assets/img/bag.png')}
                  />
                </TouchableOpacity>
              ))}
            </View>
          ))}
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            alignItems: 'center',
            borderTopColor: '#D47F02',
            borderTopWidth: 1,
            borderStyle: 'solid',
            paddingTop: 10,
            // padding:10,
          }}>
          <View
            style={{
              display: 'flex',
              alignItems: 'center',
              position: 'relative',
            }}>
            <X2 />
          </View>
          <View
            style={{
              display: 'flex',
              alignItems: 'center',
              position: 'relative',
            }}>
            <Image
              style={{
                width: 39,
                height: 52,
              }}
              source={require('../assets/img/zoom.png')}
            />
            <View style={{position: 'absolute', right: -12, top: 10}}>
              <StrokeText
                text="9"
                fontSize={25}
                color="#D05900"
                strokeColor="#000000"
                strokeWidth={2}
                fontFamily="Pacifico-Regular"
                style={{
                  // top: -5,
                  // right: 8,
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
              position: 'relative',
            }}>
            <Image
              style={{
                width: 28,
                height: 34,
              }}
              source={require('../assets/img/bag.png')}
            />
            <View style={{position: 'absolute', right: -15, top: -10}}>
              <Text
                style={{
                  fontSize: 16,
                  fontFamily: 'Pacifico-Regular',
                  color: '#830F01',
                  right: -2,
                }}>
                5
              </Text>
              <StrokeText
                text="3"
                fontSize={25}
                color="#D05900"
                strokeColor="#000000"
                strokeWidth={2}
                fontFamily="Pacifico-Regular"
                style={{
                  // top: -5,
                  // right: 8,
                  textShadowColor: 'rgba(0, 0, 0, 0.75)',
                  textShadowOffset: {width: 0, height: 4},
                  textShadowRadius: 10,
                }}
              />
            </View>
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
