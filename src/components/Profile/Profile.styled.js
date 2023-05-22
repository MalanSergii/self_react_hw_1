import styled from '@emotion/styled';

export const UserProfile = styled.div`
  margin: 40px auto 40px auto;
  padding: 30px 0px 0;
  border: 1px solid grey;
  border-radius: 10px;
  width: 300px;
  /* height: 400px; */
`;

export const Picture = styled.img`
  object-fit: contain;
  margin-bottom: 20px;
  width: 100%;
`;

export const MainInfo = styled.div`
  width: 200px;
  text-align: center;
  margin: 0px auto 10px;
`;

export const UserName = styled.p`
  margin-bottom: 15px;
  font-size: 20px;
  font-weight: bold;
`;

export const OtherInfo = styled.p`
  color: grey;
  :not(:last-child) {
    margin-bottom: 5px;
  }
`;

export const StatList = styled.ul`
  display: flex;
  justify-content: space-between;
  border-top: 1px solid grey;
  width: 100%;
`;

export const Stat = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* outline: 1px solid red; */
  width: 100%;
  height: 80px;
  text-align: center;
  :not(:last-child) {
    border-right: 1px solid grey;
  }
`;
