import {View, Text, Image, StyleSheet} from 'react-native'

export default function Filme(){
    return(
        <View>
            <Text>Ola mundo</Text>
            <Image
                source={{uri:'https://mir-s3-cdn-cf.behance.net/project_modules/1400/5c3c44212930411.673d9fef7aad7.jpg'}}
            >                         
            </Image>
        </View>
    )
}

const styles = StyleSheet.create({
       filme:{
        width:100,
        height:140,
        borderRadius:8,
        margin: 5,        
        justifyContent:'flex-end',
        padding:8
       }
});
