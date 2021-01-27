import React from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronLeft, FiChevronsRight } from 'react-icons/fi';
import logo from '../../image/logo.svg';

import { Header, RepositoryInfo, Issues } from './styles';

interface RepositoryParams {
  repository: string
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();
  return (
    <>
      <Header>
        <img src={logo} alt="imager git " />
        <Link to="/">
          <FiChevronLeft size={16} />
          Voltar
        </Link>
      </Header>

      <RepositoryInfo>
        <header>
          <img src={logo} alt="" />
          <div>
            <strong>Roasdfasdf</strong>
            <p>asdfasdfasdf</p>
          </div>
        </header>
        <ul>
          <li>
            <strong>1080</strong>
            <span>Starts</span>
          </li>
          <li>
            <strong>1080</strong>
            <span>Forks</span>
          </li>
          <li>
            <strong>1080</strong>
            <span>Issues abertas</span>
          </li>
        </ul>
      </RepositoryInfo>
      <Issues>
        <Link to="sdfasdf">
          <div>
            <strong>adsf</strong>
            <p>asdf</p>
          </div>
          <FiChevronsRight size={20} />
        </Link>
      </Issues>

    </>
  );
};

export default Repository;
