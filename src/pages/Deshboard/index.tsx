import React, { useState, FormEvent } from 'react';
import { FiChevronsRight } from 'react-icons/fi';
import api from '../../services/api';

import {
  Title,
  Form,
  Repositories,
  Error,
} from './styles';

import logo from '../../image/logo.svg';

interface Repository {
    full_name: string;
    description: string;
    owner: {
        login: string;
        avatar_url: string;

    }

}

const Dahboard: React.FC = () => {
  const [newRepo, setNewRepo] = useState('');
  const [inputError, setInputError] = useState('');
  const [repositories, setRepositories] = useState<Repository[]>([]);

  async function handleAddRepository(event:FormEvent<HTMLFormElement>): Promise<void> {
    event.preventDefault();
    if (!newRepo) {
      setInputError('Digite o nome/autor do repositório');
      return;
    }

    try {
      const response = await api.get<Repository>(`repos/${newRepo}`);

      const repository = response.data;
      setRepositories([...repositories, repository]);
      setNewRepo('');
    } catch (err) {
      setInputError('Erro na buscar por repositorio');
    }
  }

  return (
    <>
      <img src={logo} alt="" />
      <Title>
        Explore repositórios no GitHub
      </Title>
      <Form hanError={!!inputError} onSubmit={handleAddRepository}>
        <input
          value={newRepo}
          onChange={(e) => setNewRepo(e.target.value)}
          placeholder="Digite o nome do repositório"
        />
        <button type="submit">pesquisar</button>
      </Form>
      { inputError && <Error>{inputError}</Error> }
      <Repositories>
        {repositories.map((repository) => (
          <a key={repository.full_name} href="teste">
            <img
              src={repository.owner.avatar_url}
              alt={repository.owner.login}
            />
            <div>
              <strong>{repository.full_name}</strong>
              <p>{repository.description}</p>
            </div>
            <FiChevronsRight size={20} />
          </a>
        ))}
      </Repositories>
    </>
  );
};

export default Dahboard;
