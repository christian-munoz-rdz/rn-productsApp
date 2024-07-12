import {useRef} from 'react';
import {
  Button,
  ButtonGroup,
  Input,
  Layout,
  useTheme,
} from '@ui-kitten/components';
import {MainLayout} from '../../layouts/MainLayout';
import {useMutation, useQuery, useQueryClient} from '@tanstack/react-query';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParams} from '../../navigation/StackNavigator';

import {getProductById, updateCreateProduct} from '../../../actions/products';

import {ScrollView} from 'react-native-gesture-handler';
import {Product} from '../../../domain/entities/product';
import {MyIcon} from '../../components/ui/MyIcon';
import {Formik} from 'formik';
import {Alert} from 'react-native';
import {ProductImages} from '../../components/products/ProductImages';
import {genders, sizes} from '../../../config/constants/constants';

interface Props extends StackScreenProps<RootStackParams, 'ProductScreen'> {}

export const ProductScreen = ({route}: Props) => {
  const productIdRef = useRef(route.params.productId);
  const theme = useTheme();
  const queryClient = useQueryClient();

  // useQuery
  const {data: product} = useQuery({
    queryKey: ['product', productIdRef.current],
    queryFn: () => getProductById(productIdRef.current),
  });

  // useMutation
  const mutation = useMutation({
    mutationFn: (data: Product) =>
      updateCreateProduct({...data, id: productIdRef.current}),
    onSuccess(data: Product) {
      Alert.alert(
        'Producto actualizado',
        `El producto ${data.title} ha sido actualizado`,
      );

      productIdRef.current = data.id; // Crear un nuevo producto

      queryClient.invalidateQueries({queryKey: ['products', 'infinite']});
      queryClient.invalidateQueries({queryKey: ['product', data.id]});
      // queryClient.setQueryData(['product', data.id], data);
    },
  });

  if (!product) {
    return <MainLayout title="Cargando..." />;
  }

  return (
    <Formik initialValues={product} onSubmit={mutation.mutate}>
      {({handleChange, handleSubmit, values, errors, setFieldValue}) => (
        <MainLayout
          title={values.title}
          subtitle={`Precio: $${values.price}.00`}>
          {/* Imágenes del producto */}
          <ScrollView style={{flex: 1}}>
            <Layout
              style={{
                marginVertical: 10,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <ProductImages images={values.images} />
            </Layout>

            {/* Formulario */}

            <Layout style={{marginHorizontal: 10}}>
              <Input
                label="Title"
                style={{marginVertical: 5}}
                value={values.title}
                onChangeText={handleChange('title')}
              />

              <Input
                label="Slug"
                style={{marginVertical: 5}}
                value={values.slug}
                onChangeText={handleChange('slug')}
              />

              <Input
                label="Description"
                multiline
                numberOfLines={5}
                style={{marginVertical: 5}}
                value={values.description}
                onChangeText={handleChange('description')}
              />
            </Layout>

            {/* Precio e Inventario  */}
            <Layout
              style={{
                marginHorizontal: 15,
                flexDirection: 'row',
                gap: 10,
                marginVertical: 5,
              }}>
              <Input
                label="Price"
                value={values.price.toString()}
                style={{flex: 1}}
                onChangeText={handleChange('price')}
                keyboardType="numeric"
              />

              <Input
                label="Stock"
                value={values.stock.toString()}
                style={{flex: 1}}
                onChangeText={handleChange('stock')}
                keyboardType="numeric"
              />
            </Layout>

            {/* Selectores */}

            {/* Tallas */}
            <ButtonGroup
              style={{margin: 2, marginTop: 20, marginHorizontal: 15}}
              size="small"
              appearance="outline">
              {sizes.map(size => (
                <Button
                  key={size}
                  onPress={() =>
                    setFieldValue(
                      'sizes',
                      values.sizes.includes(size)
                        ? values.sizes.filter(s => s !== size)
                        : [...values.sizes, size],
                    )
                  }
                  style={{
                    flex: 1,
                    backgroundColor: values.sizes.includes(size)
                      ? theme['color-primary-200']
                      : undefined,
                  }}>
                  {size}
                </Button>
              ))}
            </ButtonGroup>

            {/* Géneros */}
            <ButtonGroup
              style={{margin: 2, marginTop: 20, marginHorizontal: 15}}
              size="small"
              appearance="outline">
              {genders.map(gender => (
                <Button
                  onPress={() => setFieldValue('gender', gender)}
                  key={gender}
                  style={{
                    flex: 1,
                    backgroundColor: values.gender.startsWith(gender)
                      ? theme['color-primary-200']
                      : undefined,
                  }}>
                  {gender}
                </Button>
              ))}
            </ButtonGroup>

            {/* Botón de guardar */}
            <Button
              accessoryLeft={<MyIcon name="save-outline" white />}
              style={{margin: 15}}
              onPress={() => handleSubmit()}
              disabled={mutation.isPending}>
              Save
            </Button>

            {/* <Text> {JSON.stringify(values, null, 2)} </Text> */}

            <Layout style={{height: 200}} />
          </ScrollView>
        </MainLayout>
      )}
    </Formik>
  );
};
