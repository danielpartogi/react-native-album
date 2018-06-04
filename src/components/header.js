// import library yang mau dipake
import React from 'react';
import { Text, View } from 'react-native';

// membuat komponennya

const Header = (props) => {
    const { textStyle, viewStyle } = styles;

    return (
    <View style={viewStyle}>
        <Text style={textStyle}>{props.HeaderText}</Text>
    </View>);
};

const styles = {
    viewStyle: {
        backgroundColor: '#757575',
        paddingTop: 15,
        justifyContent: 'center',
        height: 60,
        alignItems: 'center',
        elevation: 3,
        position: 'relative'
        
    },
    textStyle: {
    fontSize: 25
    }
   
};

//membuat supaya komponen bisa dipakai di file lain

export default Header;
