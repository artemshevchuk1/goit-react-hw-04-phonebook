import styled from "@emotion/styled";

export const Section = styled.div`
    height: '100px';
  justify-content: 'center';
  align-items: 'center';
  font-size: 40;
  color: '#010101';
  display: 'block';
  text-align: center;
  border-radius: 2%;
  box-shadow: 6px 6px 20px rgba(0, 0, 0, 0.1);
`

export const SectionContacts = styled.div`
  width: 400px;
  margin-top: 20px;
  display: flex;
  margin-left: auto;
  margin-right: auto;
  outline: none;
`;

export const FormFilter = styled.input`
  width: auto;
  height: 30px;
  margin-top: 20px;
  display: flex;
  border: solid 1px green;
  border-radius: 15px;
  margin-left: auto;
  margin-right: auto;
  outline: none;
  padding: 0px 20px;
  color: black;
  ::placeholder {
    padding: 5px 10px;
  }


`;