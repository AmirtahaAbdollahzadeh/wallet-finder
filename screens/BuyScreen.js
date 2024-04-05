import { StyleSheet, Text, View, Image, Button, TouchableOpacity } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Back from "../assets/img/Group 21";
import Buy from "../assets/img/Group 14";
import Group55 from "../assets/img/Group 55";
import Group81 from "../assets/img/Group 81";
import Group82 from "../assets/img/Group 82";
import Group83 from "../assets/img/Group 83";

export default function BuyScreen ( {navigation} ) {
    return (
        <View style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%', width: '100%', padding: 10}}>
          <TouchableOpacity>
            <View style={{position: 'absolute', top: 10, left: 10}}>
              <Back onPress={() => navigation.navigate("Home")}/>
            </View>
          </TouchableOpacity>
          <View style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between', height: '20%'}}>
            <View>
              <Buy/>
            </View>
            <View style={{position: 'relative', alignItems: 'center'}}>
              <Group55/>
              <Text style={{fontSize: 32, color: '#A40101', position: 'absolute'}}>52366</Text>
            </View>
          </View>
          <View style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '70%', padding: 30}}>
            <View style={{backgroundColor: '#FEE4BD', padding: 25, display: 'flex', alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between', borderRadius: 20}}>
              <View>
                <Group81/>
              </View>
              <View style={{display: 'flex', alignItems: 'center', flexDirection: 'row', justifyContent: 'space-around', width: '70%'}}>
                <Group82/>
                <Group83/>
              </View>
            </View>
            <View style={{backgroundColor: '#FEE4BD', padding: 25, display: 'flex', alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between', borderRadius: 20}}>
              <View>
                <Group81/>
              </View>
              <View style={{display: 'flex', alignItems: 'center', flexDirection: 'row', justifyContent: 'space-around', width: '70%'}}>
                <Group82/>
                <Group83/>
              </View>
            </View>
            <View style={{backgroundColor: '#FEE4BD', padding: 25, display: 'flex', alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between', borderRadius: 20}}>
              <View>
                <Group81/>
              </View>
              <View style={{display: 'flex', alignItems: 'center', flexDirection: 'row', justifyContent: 'space-around', width: '70%'}}>
                <Group82/>
                <Group83/>
              </View>
            </View>
            <View style={{backgroundColor: '#FEE4BD', padding: 25, display: 'flex', alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between', borderRadius: 20}}>
              <View>
                <Group81/>
              </View>
              <View style={{display: 'flex', alignItems: 'center', flexDirection: 'row', justifyContent: 'space-around', width: '70%'}}>
                <Group82/>
                <Group83/>
              </View>
            </View>
          </View>
        </View>
    );
  }