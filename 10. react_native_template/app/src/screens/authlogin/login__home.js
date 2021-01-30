
import React , { useEffect , useContext }  from 'react';
import { Image , View, Text , Button , SafeAreaView , TouchableWithoutFeedback , StyleSheet } from 'react-native';

import ScreenWrapper from '../../sharable/screenWrapper';

import AppContextProvider from '../../contexts/globalContext';
import { AppContext }     from '../../contexts/globalContext';

import { styles } from '../../app_styles.js';

function HomeScreen( { navigation } ) {
    return (
        <ScreenWrapper>
            <View style={{ width: '100%' , flex: 3 , alignItems: 'center' , justifyContent: 'center' }}>
                <Image style={{ width: '100%' , height: '100%' }} source={require('../../assets/app_home.png')} />
            </View>

            <View style={{ width: '100%' , flex: 3 , alignItems: 'center' }}>
                <Text style={ { fontSize: 17 , marginVertical: 20 , ...styles.text_seperated } }>
                     Be notified by text the moment you get an email from a specific sender.
                </Text>
                <TouchableWithoutFeedback onPress={() => navigation.navigate('Login') }>
                  <View style={{ width: '70%' , ...styles.button   }}>
                      <Text style={ { fontSize: 17 , color: 'white' , paddingVertical: 20 } }>
                            Awesome, let's go.
                      </Text>
                  </View>
                </TouchableWithoutFeedback>
            </View>
        </ScreenWrapper>
    );
}

export default HomeScreen;
