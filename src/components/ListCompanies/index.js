import React from 'react';
import {Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {s, vs} from 'react-native-size-matters';
import {useSelector, useDispatch} from 'react-redux';

import {getComany} from '~/store/ducks/companies';

import {Office} from '~/assets/index';

import {DETAILS_COMPANY} from '~/constants/routesNames';

import {Container, List, ContainerCompany, NameCompany} from './styles';

const ListCompanies = (props) => {
  const {companies} = props;

  const {accessToken, client, uid} = useSelector((state) => state.user);

  const dispatch = useDispatch();

  const navigation = useNavigation();

  const goToDetailsCompany = (company) => {
    dispatch(getComany(accessToken, client, uid, company.id));
    navigation.navigate(DETAILS_COMPANY, {company});
  };

  const renderItem = ({item}) => {
    return (
      <ContainerCompany onPress={() => goToDetailsCompany(item)}>
        <Image
          style={{
            width: s(50),
            height: s(50),
            marginBottom: vs(5),
          }}
          source={Office}
        />
        <NameCompany>{item.enterprise_name}</NameCompany>
      </ContainerCompany>
    );
  };

  return (
    <Container>
      <List
        data={companies}
        extraData={companies}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
        numColumns={2}
      />
    </Container>
  );
};

export default ListCompanies;
