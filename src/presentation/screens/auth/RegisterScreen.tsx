import {Button, Input, Layout, Text} from '@ui-kitten/components';
import {Alert, useWindowDimensions} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import { MyIcon } from '../../components/ui/MyIcon';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../../navigation/StackNavigator';
import { useState } from 'react';
import { authRegister } from '../../../actions/auth/auth';

interface Props extends StackScreenProps<RootStackParams, 'RegisterScreen'> {}

export const RegisterScreen = ({ navigation }: Props) => {
  const {height} = useWindowDimensions();

  const [form, setForm] = useState({
    email: '',
    password: '',
    fullName: '',
  });

  const onRegister = async() => {
    if( form.email.length === 0 || form.password.length === 0 || form.fullName.length === 0){
      return;
    }

    const resp = await authRegister(form.email, form.password, form.fullName);

    if(resp) {
      Alert.alert('Éxito', 'Usuario creado correctamente', [{text: 'Ok', onPress: () => navigation.pop()}]);
    } else {
      Alert.alert('Error', 'Error al crear el usuario', [{text: 'Ok'}]);
    }
  }

  return (
    <Layout style={{flex: 1}}>
      <ScrollView style={{marginHorizontal: 40}}>
        <Layout style={{paddingTop: height * 0.30}}>
          <Text category="h1">Crear cuenta</Text>
          <Text category="p2">Por favor, crea una cuenta para continuar</Text>
        </Layout>

        {/* Inputs */}
        <Layout style={{marginTop: 20}}>
          <Input
            accessoryLeft={ <MyIcon name='person-outline'/> }
            placeholder="Nombre completo"
            style={{marginBottom: 10}}
            value={form.fullName}
            onChangeText={ (fullName) => setForm({...form, fullName}) }
          />
          <Input
            accessoryLeft={ <MyIcon name='email-outline'/> }
            placeholder="Correo electrónico"
            keyboardType="email-address"
            autoCapitalize="none"
            value={form.email}
            onChangeText={ (email) => setForm({...form, email}) }
            style={{marginBottom: 10}}
          />
          <Input
            accessoryLeft={ <MyIcon name='lock-outline'/> }
            placeholder="Contraseña"
            autoCapitalize="none"
            secureTextEntry
            value={form.password}
            onChangeText={ (password) => setForm({...form, password}) }
            style={{marginBottom: 20}}
          />
        </Layout>

        {/* Space */}
        <Layout style={{height: 10}} />

        {/* BUtton */}
        <Layout>
          <Button
          accessoryRight={ <MyIcon name='arrow-forward-outline' white/> }
            onPress={onRegister}
            // appearance='ghost'
          >
            Crear
          </Button>
        </Layout>

        {/* Información para crear cuenta */}
        <Layout style={{height: 50}} />

        <Layout
          style={{
            alignItems: 'flex-end',
            flexDirection: 'row',
            justifyContent: 'center',
          }}>
          <Text>¿Ya tienes una cuenta?</Text>
          <Text status="primary" category="s1" onPress={() => navigation.pop()}>
            {' '}
            {''} Ingresar {''}{' '}
          </Text>
        </Layout>
      </ScrollView>
    </Layout>
  );
};
