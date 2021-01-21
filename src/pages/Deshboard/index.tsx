import React from 'react';
import { FiChevronsRight } from 'react-icons/fi';

import { Title, Form, Repositories } from './styles';
import logo from '../../image/logo.svg';

const Dahboard: React.FC = () => (
  <>
    <img src={logo} alt="" />
    <Title>
      Explore repositórios no GitHub
    </Title>
    <Form>
      <input placeholder="Digite o nome do repositório" />
      <button type="submit">pesquisar</button>
    </Form>
    <Repositories>
      <a href="teste">
        <img
          src="https://avatars2.githubusercontent.com/u/42882103?s=460&u=719625a4340f30ad2790d4a0714811a629d1b0d2&v=4"
          alt="thayron feitosa"
        />
        <div>
          <strong>repositório qualquer</strong>
          <p>Descrição do repositório</p>
        </div>
        <FiChevronsRight size={20} />
      </a>
      <a href="teste">
        <img
          src="https://avatars2.githubusercontent.com/u/42882103?s=460&u=719625a4340f30ad2790d4a0714811a629d1b0d2&v=4"
          alt="thayron feitosa"
        />
        <div>
          <strong>repositório qualquer</strong>
          <p>Descrição do repositório</p>
        </div>
        <FiChevronsRight size={20} />
      </a>
      <a href="teste">
        <img
          src="https://avatars2.githubusercontent.com/u/42882103?s=460&u=719625a4340f30ad2790d4a0714811a629d1b0d2&v=4"
          alt="thayron feitosa"
        />
        <div>
          <strong>repositório qualquer</strong>
          <p>Descrição do repositório</p>
        </div>
        <FiChevronsRight size={20} />
      </a>
    </Repositories>
  </>
);

export default Dahboard;
