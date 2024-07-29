import { View , StyleSheet  } from 'react-native';
import Medalha1 from "./olimpiada1"
import Medalha2 from "./olimpiada2"

export default function HomeScreen() {
  return (
    <View style={styles.container}>

        <Medalha1 pais= "Japao" bronze="6" prata="7" ouro="10" medalha="23" >  </Medalha1>

        <Medalha2 pais= "ítalia" bronze="2" prata="3" ouro="1" medalha="6" >    </Medalha2>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    
    justifyContent: 'center',
    alignContent: 'center',
    padding: 100, 
    
  },

});
