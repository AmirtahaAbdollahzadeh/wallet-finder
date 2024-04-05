import { View, Text, StyleSheet, Button, TouchableOpacity } from "react-native";
import Logo from "../assets/img/Group 7";
import Group55 from "../assets/img/Group 55";
import Group12 from "../assets/img/Group 12";
import Group25 from "../assets/img/Group 25";
import Group1 from "../assets/img/Group 1";
import Wallet5 from "../assets/img/5 wallet";
import Wallet15 from "../assets/img/15 wallet";
import Group13 from "../assets/img/Group 13";
import Group56 from "../assets/img/Group 56";
import Group14 from "../assets/img/Group 14";


export default function HomeScreen( {navigation} ) {
    return (
        <View style={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
        <View style={{display: 'flex', flexDirection: 'column', height: '100%', width: '100%', justifyContent: 'space-between', paddingTop: 29, paddingBottom: 20}}>
          <View style={{display: 'flex', justifyContent: 'center', flexDirection: 'column'}}>
            <View style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
              <Logo style={{marginBottom: 24}}/>
            </View>
            <View style={{display: 'flex', alignItems: 'center', justifyContent: 'flex-end'}}>
            <TouchableOpacity>
              <View style={{position: 'relative', alignItems: 'center'}} onPress={() => navigation.navigate("Harvest")}>
                <Group55/>
                <Text style={{fontSize: 32, color: '#A40101', position: 'absolute'}}  onPress={() => navigation.navigate("Harvest")}>52366</Text>
              </View>
            </TouchableOpacity>
              <View style={{position: 'absolute', right: 30}}>
                <View style={{position: 'relative', alignItems: 'center'}}>
                  <Group12/>
                  <View style={{position: 'absolute', alignItems: 'center', bottom: 5}}>
                    <Text style={{fontSize: 24, color: '#A40101'}}>4</Text>
                    <Text style={{fontSize: 10, color: '#A40101'}}>295</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View>
            <View style={{display: 'flex', alignItems: 'center', marginTop: 32, marginBottom: 40}}>
              <Group25/>
            </View>
            <TouchableOpacity>
              <View style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <Group1 onPress={() => navigation.navigate("Play")}/>
              </View>
            </TouchableOpacity>
          </View>
          <View style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between', minHeight: 240}}>
            <View style={{display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'row'}}>
              <TouchableOpacity>
                <View style={{position: 'relative', width: 60}}>
                  <Wallet5  onPress={() => navigation.navigate("Friend")}/>
                  <View style={{position: 'absolute', right: 0}}>
                    <Text style={{fontSize: 16, color: '#830F01'}}>5</Text>
                    <Text style={{fontSize: 32, color: '#D05900', right: 5}}>3</Text>
                  </View>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View style={{position: 'relative', width: 60, marginRight: 16, marginLeft: 16}}>
                  <Wallet5  onPress={() => navigation.navigate("Buy")}/>
                  <View style={{position: 'absolute', right: 0}}>
                    <Text style={{fontSize: 16, color: '#830F01'}}>10</Text>
                    <Text style={{fontSize: 32, color: '#D05900', right: 5}}>0</Text>
                  </View>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View style={{position: 'relative', width: 59.2}}>
                  <Wallet15  onPress={() => navigation.navigate("Buy")}/>
                  <View style={{position: 'absolute', right: 0}}>
                    <Text style={{fontSize: 16, color: '#830F01'}}>15</Text>
                    <Text style={{fontSize: 32, color: '#D05900', right: 5}}>2</Text>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
            <View style={{display: 'flex', alignItems: 'center',justifyContent: 'space-between', flexDirection: 'row'}}>
            <TouchableOpacity>
              <Group13 style={{marginLeft: 32}}/>
            </TouchableOpacity>
            <TouchableOpacity>
              <Group56  onPress={() => navigation.navigate("Friend")}/>
            </TouchableOpacity>
            <TouchableOpacity>
              <Group14 style={{marginRight: 32}}  onPress={() => navigation.navigate("Buy")}/>
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