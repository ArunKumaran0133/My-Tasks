import {Component} from 'react'
import {v4} from 'uuid'

import TagsButton from '../TagsButton'
import TaskList from '../TaskList'

import {
  TaskAppBgContainer,
  CreateTaskCart,
  Heading,
  InputContainer,
  Label,
  Input,
  InputSelect,
  InputsContainer,
  CustomButton,
  TaskListContainer,
  TaskHeading,
  ButtonListContainer,
  NoTasksContainer,
  TasksListContainer,
  NoTaskHeading,
} from './styledComponents'

const tagsList = [
  {
    optionId: 'HEALTH',
    displayText: 'Health',
  },
  {
    optionId: 'EDUCATION',
    displayText: 'Education',
  },
  {
    optionId: 'ENTERTAINMENT',
    displayText: 'Entertainment',
  },
  {
    optionId: 'SPORTS',
    displayText: 'Sports',
  },
  {
    optionId: 'TRAVEL',
    displayText: 'Travel',
  },
  {
    optionId: 'OTHERS',
    displayText: 'Others',
  },
]

class TaskApp extends Component {
  state = {taskList: [], userInput: '', taskType: '', isActiveButton: ''}

  getUserInput = event => {
    this.setState({userInput: event.target.value})
  }

  getTaskType = event => {
    this.setState({taskType: event.target.value})
  }

  onSubmitAddTask = event => {
    event.preventDefault()
    const {userInput, taskType, taskList} = this.state

    if (userInput.length > 0) {
      const task = {taskText: userInput, taskType, id: v4()}
      const updatedTaskList = [...taskList, task]
      this.setState({taskList: updatedTaskList, userInput: ''})
    }
  }

  filterTaskList = optionId => {
    const {taskList} = this.state
    const filterList = taskList.filter(
      eachItem => eachItem.taskType === optionId,
    )

    this.setState({taskList: filterList, isActiveButton: optionId})
  }

  renderButtons = () => {
    const {isActiveButton} = this.state
    return (
      <ButtonListContainer>
        {tagsList.map(eachTag => (
          <TagsButton
            key={eachTag.optionId}
            buttonDetails={eachTag}
            filterTaskList={this.filterTaskList}
            isActiveTab={eachTag.optionId === isActiveButton}
          />
        ))}
      </ButtonListContainer>
    )
  }

  renderInput = () => {
    const {userInput} = this.state
    return (
      <InputContainer>
        <Label htmlFor="userInput">Task</Label>
        <Input
          type="text"
          placeholder="Enter the task here"
          id="userInput"
          onChange={this.getUserInput}
          value={userInput}
        />
      </InputContainer>
    )
  }

  renderTagsInput = () => (
    <InputContainer>
      <Label>Tags</Label>
      <InputSelect onChange={this.getTaskType}>
        {tagsList.map(eachItem => (
          <option key={eachItem.optionId} value={eachItem.optionId}>
            {eachItem.displayText}
          </option>
        ))}
      </InputSelect>
    </InputContainer>
  )

  renderNoTasksView = () => (
    <NoTasksContainer>
      <NoTaskHeading>No Tasks Added Yet</NoTaskHeading>
    </NoTasksContainer>
  )

  renderTaskList = () => {
    const {taskList} = this.state
    return (
      <TasksListContainer>
        {taskList.map(eachItem => (
          <TaskList key={eachItem.id} taskDetail={eachItem} />
        ))}
      </TasksListContainer>
    )
  }

  renderResultView = () => {
    const {taskList} = this.state
    if (taskList.length === 0) {
      return this.renderNoTasksView()
    }
    return this.renderTaskList()
  }

  render() {
    const {taskList} = this.state
    console.log(taskList)
    return (
      <TaskAppBgContainer>
        <CreateTaskCart>
          <Heading>Create a task!</Heading>
          <InputsContainer onSubmit={this.onSubmitAddTask}>
            {this.renderInput()}
            {this.renderTagsInput()}
            <CustomButton type="submit">Add Task</CustomButton>
          </InputsContainer>
        </CreateTaskCart>
        <TaskListContainer>
          <TaskHeading>Tags</TaskHeading>
          {this.renderButtons()}
          <TaskHeading>Tasks</TaskHeading>
          {this.renderResultView()}
        </TaskListContainer>
      </TaskAppBgContainer>
    )
  }
}

export default TaskApp
