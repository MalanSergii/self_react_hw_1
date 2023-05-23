import styled from '@emotion/styled';

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  :not(:last-child) {
    border-right: 1px solid grey;
  }
  width: 100%;
  padding: 10px;
  background-color: ${props => props.color};
`;

export const Label = styled.span`
  color: white;
  font-size: 16px;
  font-weight: bold;

  margin-bottom: 10px;
`;

export const Percentage = styled.span`
  /* color: grey; */
  font-weight: bold;
`;
