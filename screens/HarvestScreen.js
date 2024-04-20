import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Back from '../assets/img/Group 21';
import Group55 from '../assets/img/Group 55.svg';

export default function HarvestScreen({navigation}) {
  return (
    <View
      style={{display: 'flex', justifyContent: 'space-between', padding: 10}}>
      <View>
        <TouchableOpacity>
          <View>
            <Back onPress={() => navigation.navigate('Home')} />
          </View>
        </TouchableOpacity>
        <View style={{position: 'relative', alignItems: 'center'}}>
          <Group55 />
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
      </View>
      <View style={{padding: 30}}>
        <View
          style={{
              marginBottom: 24,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Text
            style={{
              marginBottom: 24,
              fontSize: 14,
              fontFamily: 'Pacifico-Regular',
              color: '#000000',
            }}>
            ادرس کیف پول جهت تبدیل سکه ها به بیت کوین را وارد کنید
          </Text>
          <TextInput style={{backgroundColor: '#D9D9D9', width: '100%'}} />
        </View>
        <View
          style={{
            display: 'flex',
            justifyContent: 'space-between',
          }}>
          <Text
            style={{
              marginBottom: 24,
              fontSize: 14,
              fontFamily: 'Pacifico-Regular',
              color: '#000000',
            }}>
            تعداد درخواستی : حداقل 10000
          </Text>
          <View
            style={{
              marginBottom: 24,
              justifyContent: 'space-between',
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <TextInput
              style={{
                backgroundColor: '#D9D9D9',
                fontFamily: 'Pacifico-Regular',
                width: '55%',
              }}
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
                تمام سکه ها
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{display: 'flex', alignItems: 'center'}}>
          <TouchableOpacity
            style={{
              backgroundColor: '#02D430',
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
              برداشت
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
