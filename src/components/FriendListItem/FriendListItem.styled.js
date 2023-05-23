import styled from '@emotion/styled';

export const Item = styled.li`
  border: 1px solid grey;
  border-radius: 5px;
  display: flex;
  align-items: center;
  :not(:last-child) {
    margin-bottom: 10px;
  }
  padding: 10px 20px;
`;

export const StatusOnline = styled.span`
  width: 20px;
  height: 20px;
  margin-right: 10px;
  border: 1px solid grey;
  border-radius: 50%;
  background-color: ${props => (props.status ? 'green' : 'red')};
`;

export const UserAvatar = styled.img`
  margin-right: 10px;
`;

export const UserName = styled.p`
  font-size: 20px;
  font-weight: bold;
`;
