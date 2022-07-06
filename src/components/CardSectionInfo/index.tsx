import React from "react"
import './styled.css'

interface IProps {
  title?: string,
  scrollable?: boolean,
  children: React.ReactNode,
}

export const CardSectionInfo: React.FC<IProps> = ({ children, title, scrollable }) => {
  return (
    <div className="panel-info__section">
      <p className="panel-info__section-title">{title}</p>

      <div className={ !scrollable ? 'panel-info__section-content' : 'panel-info__section-images' }>
        {children}
      </div>
    </div>
  )
}