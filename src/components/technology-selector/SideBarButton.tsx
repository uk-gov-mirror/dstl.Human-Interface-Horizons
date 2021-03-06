import React from 'react'

interface Props {
  index: number
  title: string
  groupTitle: string
  isActive: boolean
  onClickSideBarItem(sideBarItemsTitle: { title: string }, isActive: boolean): void
}

export const SidebarButton = (props: Props) => {
  const { groupTitle, index, title, isActive, onClickSideBarItem } = props

  return (
    <button
      key={`${title}${index}`}
      className="sidebar-button"
      onClick={() => onClickSideBarItem({ title: title }, isActive)}
      style={
        isActive
          ? { border: '0.5px solid black', color: 'white', backgroundColor: '#ce2256' }
          : { border: '0.5px solid black', backgroundColor: 'white', color: 'black' }
      }
    >
      {title}
    </button>
  )
}
