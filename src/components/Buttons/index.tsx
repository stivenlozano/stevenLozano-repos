import React from "react"
import "./styled.css"

interface IProps {
  color?: string,
  text?: string,
  iconLeft?: React.ReactElement,
  iconRight?: React.ReactElement,
  onClick: () => void,
}

export const Btn: React.FC<IProps> = ({ text, iconLeft, iconRight, onClick }) => {
  return(
    <div className="paginate-btn" onClick={(onClick)} data-id={text}>
      {iconLeft}
      {text}
      {iconRight}
    </div>
  )
}