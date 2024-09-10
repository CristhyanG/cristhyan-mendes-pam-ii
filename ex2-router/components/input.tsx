import * as react from 'react';
import { useForm, Controller} from 'react-hook-form';
import { Text, TextInput, View  } from "react-native";




export default function input ({ }){
    
        const {control, handleSubmit, formState: {errors} } = useForm ({ /* é possível usar o defaultValues dentro de ({}) para colocar alguumas definições de valores*/
          resolver: yupResolver(schema),
        })
    
        return(
        <View><Text >Email</Text>      
        <Controller //FAZER UM COMPONENTE CONTROLLER
        control={control} //user form => linha 9
        name="email" //nome do campo
        render={({ field: {onChange, onBlur, value} }) => ( //render = renderizar / passa também propriedaes dessa função criada
            <TextInput
                style={styles.input}
                placeholder="   Digite seu Email"
                onChangeText={onChange} //troca os use state por prop da renderização
                onBlur={onBlur} //chamado quando o text input é trocado
                defaultValue={value} //troca valor de estado por valor de propriedade
                keyboardType="email-address"
            />
            )} 
        />
    {errors.email && <Text style={styles.labelErrors}> {errors.email?.message} </Text>}
    </View>
    )
} 