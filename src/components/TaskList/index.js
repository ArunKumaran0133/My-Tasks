import {
  ItemContainer,
  TaskText,
  TaskType,
  TaskTypeContainer,
} from './styledComponents'

const TaskList = props => {
  const {taskDetail} = props
  const {taskText, taskType} = taskDetail

  return (
    <ItemContainer>
      <TaskText>{taskText}</TaskText>
      <TaskTypeContainer>
        <TaskType>{taskType}</TaskType>
      </TaskTypeContainer>
    </ItemContainer>
  )
}

export default TaskList
