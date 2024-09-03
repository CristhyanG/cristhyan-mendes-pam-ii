import { View, Pressable, Text, StyleSheet} from "react-native";

export default function NavButton({ label, onPress}){
    return(
        <View style={styles.btnContainer}>
            <Pressable  onPress={onPress}>
                <Text style={styles.btnLabel}>
                {label}
                </Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    btnContainer:{
        width: 100,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#2b2bff',
        borderRadius: 10,
        
    },
    btnLabel:{
        textAlign: 'center',
        color: '#fff'
    }
});