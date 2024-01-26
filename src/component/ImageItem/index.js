import './index.css'

const TabItem = props => {
  const {eachTabDetails, clickTabItem, isActive} = props
  const {tabId, displayText} = eachTabDetails

  const activeTabClassname = isActive ? 'active-tab-btn' : ''

  const onClickingTab = () => {
    clickTabItem(tabId)
  }

  return (
    <li className="list-container">
      <button
        type="button"
        className={`tab-text ${activeTabClassname}`}
        onClick={onClickingTab}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
