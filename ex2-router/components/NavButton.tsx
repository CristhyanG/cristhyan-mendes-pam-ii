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
        width: 320,
        height: 68,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#0fe',
        borderRadius: 40,
    },
    btnLabel:{
        textAlign: 'center',
    }
});