import { View, Pressable, Text, TouchableOpacity} from "react-native";

export default function NavButton({ label, onPress}){
    return(
    <View>
        <Pressable onPress={onPress}>
            <Text>
            {label}
            </Text>

        </Pressable>
    </View>
    );
}