import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import Back from "../assets/img/Group 21";
import Group55 from "../assets/img/Group 55.svg";

export default function HarvestScreen( {navigation} ) {
    return (
        <View style={{display: 'flex', height: '70%', justifyContent: 'space-between'}}>
          <View>
            <TouchableOpacity>
              <View>
                <Back onPress={() => navigation.navigate("Home")}/>
              </View>
            </TouchableOpacity>
            <View style={{position: 'relative', alignItems: 'center', padding: 15, justifyContent: 'center'}}>
              <Group55/>
              <Text style={{fontSize: 30, color: '#A40101', position: 'absolute'}}>52366</Text>
            </View>
          </View>
          <View style={{display: 'flex', alignItems: 'center', padding: 33, justifyContent: 'space-between', height: '30%'}}>
            <Text style={{fontSize: 14, color: '#000000'}}>ادرس کیف پول جهت تبدیل سکه ها به بیت کوین را وارد کنید</Text>
            <TextInput style={{backgroundColor: '#D9D9D9', width: '100%'}}/>
          </View>
          <View style={{display: 'flex', padding: 33, justifyContent: 'space-between', height: '25%'}}>
            <Text style={{fontSize: 14, color: '#000000'}}>تعداد درخواستی : حداقل 10000</Text>
            <View style={{justifyContent: 'space-between', flexDirection: 'row', alignItems:  'center'}}>
              <TextInput style={{backgroundColor: '#D9D9D9', width: '55%'}}/>
              <Button title='تمام سکه ها' color='#D47F02' />
            </View>
          </View>
          <View style={{display: 'flex', alignItems: 'center'}}>
            <Button title='برداشت' color='#02D430'/>
          </View>
        </View>
    );
  }