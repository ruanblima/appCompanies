import React, {useEffect, useContext} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {ActivityIndicator} from 'react-native';
import {ThemeContext} from 'styled-components/native';

import HeaderHome from '~/components/HeaderHome';
import ListCompanies from '~/components/ListCompanies';

import {getCompanies} from '~/store/ducks/companies';

import {Container, StatusBar, ContainerIndicator} from './styles';

const Home = () => {
  const {companies, loadingListCompanies} = useSelector(
    (state) => state.companies,
  );
  const {accessToken, client, uid} = useSelector((state) => state.user);

  const dispatch = useDispatch();
  const {Colors} = useContext(ThemeContext);

  useEffect(() => {
    dispatch(getCompanies(accessToken, client, uid));
  }, []);

  return (
    <Container>
      <StatusBar />
      <HeaderHome />
      {loadingListCompanies ? (
        <ContainerIndicator>
          <ActivityIndicator size="large" color={Colors.black} indeterminate />
        </ContainerIndicator>
      ) : (
        <ListCompanies companies={companies} />
      )}
    </Container>
  );
};

export default Home;
