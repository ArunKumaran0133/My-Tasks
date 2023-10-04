import styled from 'styled-components'

export const CustomButton = styled.button`
  font-family: 'Roboto';
  font-size: 14px;
  height: 35px;
  color: white;
  padding-left: 10px;
  padding-right: 10px;
  background-color: ${props => (props.isActiveTab ? '#f3aa4e' : 'transparent')};
  border: 1px solid #f3aa4e;
  outline: none;
  border-radius: 15px;
  cursor: pointer;
  font-weight: 700;
  margin-right: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
`
