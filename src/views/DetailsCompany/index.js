import React, {useEffect, useContext} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import {ThemeContext} from 'styled-components';
import {Image} from 'react-native';
import {s} from 'react-native-size-matters';

import {BASE_PATH_SERVER} from '~/constants/api';

import {
  Container,
  ContainerDetails,
  DetailsText,
  ContainerImage,
  ContainerName,
  NameComany,
  ContainerTitleDetails,
  DetailsTitleText,
  DescriptionText,
} from './styles';

const DetailsCompany = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const {Colors} = useContext(ThemeContext);

  const {company} = route.params;

  useEffect(() => {
    navigation.setOptions({
      title: company.enterprise_name,
      headerStyle: {
        backgroundColor: Colors.gray_light,
      },
    });
  }, []);

  return (
    <Container>
      <ContainerImage>
        <Image
          style={{
            width: s(230),
            height: s(230),
            borderRadius: s(20),
            marginBottom: 10,
          }}
          source={{uri: BASE_PATH_SERVER + company.photo}}
        />
      </ContainerImage>

      <ContainerName>
        <NameComany>{company.enterprise_name}</NameComany>
      </ContainerName>

      <ContainerDetails>
        <ContainerTitleDetails>
          <DetailsTitleText>Cidade</DetailsTitleText>
          <DetailsText>{company.city}</DetailsText>
        </ContainerTitleDetails>

        <ContainerTitleDetails>
          <DetailsTitleText>Empreendimento</DetailsTitleText>
          <DetailsText>
            {company.enterprise_type.enterprise_type_name}
          </DetailsText>
        </ContainerTitleDetails>

        <ContainerTitleDetails>
          <DetailsTitleText>País</DetailsTitleText>
          <DetailsText>{company.country}</DetailsText>
        </ContainerTitleDetails>
      </ContainerDetails>

      <ContainerDetails>
        <DescriptionText>Descrição: {company.description}</DescriptionText>
      </ContainerDetails>
    </Container>
  );
};

export default DetailsCompany;
