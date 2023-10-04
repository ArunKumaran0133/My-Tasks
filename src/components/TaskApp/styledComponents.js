import styled from 'styled-components'

export const TaskAppBgContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  @media screen and (max-width: 676px) {
    flex-direction: column;
  }
`

export const CreateTaskCart = styled.div`
  min-height: 100vh;
  background-color: #1a171d;
  padding: 30px;
  width: 70%;
  @media screen and (max-width: 676px) {
    width: 100%;
  }
`

export const Heading = styled.h1`
  font-family: 'Roboto';
  font-size: 30px;
  font-weight: bold;
  color: #f3aa4e;
  text-align: center;
`
export const InputContainer = styled.div``

export const Label = styled.label`
  font-family: 'Roboto';
  font-size: 14px;
  color: white;
  font-weight: 600;
`

export const Input = styled.input`
  font-family: 'Roboto';
  font-size: 14px;
  height: 38px;
  width: 100%;
  background-color: white;
  outline: none;
  border: none;
  color: #64748b;
  padding-left: 10px;
  margin-top: 10px;
`
export const InputSelect = styled.select`
  font-family: 'Roboto';
  font-size: 14px;
  height: 38px;
  width: 100%;
  background-color: white;
  outline: none;
  border: none;
  color: #000000;
  padding-left: 10px;
  margin-top: 10px;
`
export const InputsContainer = styled.form`
  height: 300px;
  display: flex;

  justify-content: space-evenly;
  flex-direction: column;
`

export const CustomButton = styled.button`
  font-family: 'Roboto';
  font-size: 14px;
  height: 35px;
  width: 80px;
  color: white;
  background-color: #f3aa4e;
  border-width: 0px;
  outline: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: 700;
  align-self: center;
`
export const TaskListContainer = styled.div`
  min-height: 100vh;
  background-color: #131213;
  padding: 20px;
  width: 100%;
`

export const TaskHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 20px;
  color: white;
  font-weight: 700;
`
export const ButtonListContainer = styled.ul`
  padding-left: 0px;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`

export const NoTasksContainer = styled.div`
  height: 50vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const TasksListContainer = styled.ul`
  list-style: none;
  padding-left: 0px;
`
export const NoTaskHeading = styled.p`
  font-family: 'Roboto';
  font-size: 20px;
  color: white;
  font-weight: 700;
`
