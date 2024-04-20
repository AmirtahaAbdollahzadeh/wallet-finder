import { View, Text, StyleSheet, TouchableOpacity} from "react-native";
import Back from "../assets/img/Group 21";
import Search from "../assets/img/Group 51";
import Gold from "../assets/img/Group 19";
import Kise from "../assets/img/Group 27";
import DoGold from "../assets/img/Group 31";
import ThrSearch from "../assets/img/Group 15";
import FivKise from '../assets/img/X2.svg';

export default function PlayScreen( {navigation} ) {
    return (
        <View style={{padding: 10, paddingTop: 6}}>
        <View style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%', width: '100%'}}>
          <View style={{display: 'flex', flexDirection: 'column'}}>
            <View style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row'}}>
            <TouchableOpacity>
              <View>
                <Back onPress={() => navigation.navigate("Home")}/>
              </View>
            </TouchableOpacity>
              <View style={{position: 'relative'}}>
                <Search/>
                <Text style={{position: 'absolute', bottom: -7, fontSize: 25, left: 13, color: '#A40101'}}>3</Text>
              </View>
            </View>
            <View style={{display: 'flex', alignItems: 'center'}}>
              <Gold style={{position: 'relative'}}/>
              <View style={{position: 'absolute'}}>
                <Text style={{fontSize: 28, color: '#A40101', marginLeft: 25, marginTop: 10}}>+12</Text>
              </View>
            </View>
          </View>
          <View style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: "space-evenly", alignItems: 'center'}}>
            <View style={{display: 'flex', flexDirection: 'row'}}>
              <Kise style={{margin: 5}}/>
              <Kise style={{margin: 5}}/>
            </View>
            <View style={{display: 'flex', flexDirection: 'row'}}>
              <Kise style={{margin: 5}}/>
              <Kise style={{margin: 5}}/>
            </View>
            <View style={{display: 'flex', flexDirection: 'row'}}>
              <Kise style={{margin: 5}}/>
              <Kise style={{margin: 5}}/>
            </View>
            <View style={{display: 'flex', flexDirection: 'row'}}>
              <Kise style={{margin: 5}}/>
              <Kise style={{margin: 5}}/>
            </View>
            <View style={{display: 'flex', flexDirection: 'row'}}>
              <Kise style={{margin: 5}}/>
              <Kise style={{margin: 5}}/>
            </View>
            <View style={{display: 'flex', flexDirection: 'row'}}>
              <Kise style={{margin: 5}}/>
              <Kise style={{margin: 5}}/>
            </View>
            <View style={{display: 'flex', flexDirection: 'row'}}>
              <Kise style={{margin: 5}}/>
              <Kise style={{margin: 5}}/>
            </View>
            <View style={{display: 'flex', flexDirection: 'row'}}>
              <Kise style={{margin: 5}}/>
              <Kise style={{margin: 5}}/>
            </View>
            <View style={{display: 'flex', flexDirection: 'row'}}>
              <Kise style={{margin: 5}}/>
              <Kise style={{margin: 5}}/>
            </View>
            <View style={{display: 'flex', flexDirection: 'row'}}>
              <Kise style={{margin: 5}}/>
              <Kise style={{margin: 5}}/>
            </View>
            <View style={{display: 'flex', flexDirection: 'row'}}>
              <Kise style={{margin: 5}}/>
              <Kise style={{margin: 5}}/>
            </View>
            <View style={{display: 'flex', flexDirection: 'row'}}>
              <Kise style={{margin: 5}}/>
              <Kise style={{margin: 5}}/>
            </View>
            <View style={{display: 'flex', flexDirection: 'row'}}>
              <Kise style={{margin: 5}}/>
              <Kise style={{margin: 5}}/>
            </View>
            <View style={{display: 'flex', flexDirection: 'row'}}>
              <Kise style={{margin: 5}}/>
              <Kise style={{margin: 5}}/>
            </View>
          </View>
          <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center'}}>
            <View style={{display: 'flex', alignItems: 'center', position: 'relative'}}>
              <FivKise/>
              <View style={{position: 'absolute', right: -12, top: 10}}>
                <Text style={{color: '#D05900', fontSize: 25}}>5</Text>
              </View>
            </View>
            <View style={{display: 'flex', alignItems: 'center', position: 'relative'}}>
              <DoGold/>
              <View style={{position: 'absolute', right: -12, top: 10}}>
                <Text style={{color: '#D05900', fontSize: 25}}>9</Text>
              </View>
            </View>
            <View style={{display: 'flex', alignItems: 'center', position: 'relative'}}>
              <ThrSearch/>
              <View style={{position: 'absolute', right: -13, top: 0, display: 'flex', flexDirection: 'column'}}>
                <Text style={{color: '#830F01'}}>5</Text>
                <Text style={{color: '#D05900', fontSize: 25, right: 0, bottom: 7}}>3</Text>
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
