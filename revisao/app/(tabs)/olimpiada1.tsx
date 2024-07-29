import React from 'react';
import { View, Text, StyleSheet } from 'react-native'


const Medalha1 = ({ pais, bronze, prata , ouro , medalha  }) => {
    return(
        <View>
                <Text style={styles.text}>O pais é o {pais} :</Text>
                <Text style={styles.text}>E quantidade de medalhas de bronze é :{bronze} </Text>
                <Text style={styles.text}>E quantidade de medalhas de prata é :{prata} </Text>
                <Text style={styles.text}>E quantidade de medalhas de ouro é :{ouro} </Text>
                <Text style={styles.text}>E quantidade de medalhas no total é :{medalha} </Text>

        </View>
    )

}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignContent: 'center',
    },
    text: {
        fontSize: 26,
        fontFamily: 'arial',

      },
});

export default Medalha1