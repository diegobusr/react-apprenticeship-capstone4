import styled from 'styled-components';
import { Search } from '@styled-icons/boxicons-regular/Search';

export const InputDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 5px;
  margin-left: 30px;
`;

export const SearchInput = styled.input`
  flex: 1 0;
  min-width: 50px;
  min-height: 25px;
  font-size: 0.9em;
  padding: 10px;
  color: black;
  border: none;
  outline: none;

  ::placeholder {
    color: #cfcccc96;
  }
`;

export const SearchIcon = styled(Search)`
  flex: 0 0;
  margin-left: 10px;
  color: white;
  min-width: 30px;
  min-height: 30px;
`;
