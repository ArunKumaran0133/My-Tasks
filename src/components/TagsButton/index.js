import {CustomButton} from './styledComponents'

const TagsButton = props => {
  const {buttonDetails, filterTaskList, isActiveTab} = props
  const {optionId, displayText} = buttonDetails
  const filter = () => {
    filterTaskList(optionId)
  }
  return (
    <li>
      <CustomButton type="button" onClick={filter} isActiveTab={isActiveTab}>
        {displayText}
      </CustomButton>
    </li>
  )
}

export default TagsButton
