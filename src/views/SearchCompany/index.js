import React, {useContext} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {ActivityIndicator} from 'react-native';
import {ThemeContext} from 'styled-components/native';

import ListCompanies from '~/components/ListCompanies';

import {ENTERPRISE_TYPES} from '~/constants/enterpriseType';

import {getCompanyPerTypes} from '~/store/ducks/companies';

import {
  Container,
  ContainerTypeCompany,
  List,
  TitleTypeText,
  ContainerIndicator,
} from './styles';

const SearchCompany = () => {
  const {companiesPerTypes, loadingListCompaniesPerTypes} = useSelector(
    (state) => state.companies,
  );
  const {accessToken, client, uid} = useSelector((state) => state.user);

  const dispatch = useDispatch();
  const {Colors} = useContext(ThemeContext);

  const fetchComanyPerType = (item) => {
    dispatch(
      getCompanyPerTypes(
        accessToken,
        client,
        uid,
        item.id,
        item.enterprise_type_name,
      ),
    );
  };

  const renderItem = ({item}) => {
    return (
      <ContainerTypeCompany onPress={() => fetchComanyPerType(item)}>
        <TitleTypeText>{item.enterprise_type_name}</TitleTypeText>
      </ContainerTypeCompany>
    );
  };

  return (
    <Container>
      <List
        data={ENTERPRISE_TYPES}
        extraData={ENTERPRISE_TYPES}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
        horizontal
      />
      {loadingListCompaniesPerTypes ? (
        <ContainerIndicator>
          <ActivityIndicator size="large" color={Colors.black} indeterminate />
        </ContainerIndicator>
      ) : (
        <ListCompanies companies={companiesPerTypes} />
      )}
    </Container>
  );
};

export default SearchCompany;
