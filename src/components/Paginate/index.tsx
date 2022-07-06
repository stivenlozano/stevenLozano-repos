import React, { useContext } from "react"
import { BsChevronLeft, BsChevronRight } from "react-icons/bs"
import { Btn } from '..' 
import { AppContext } from "../../store";
import { ITEMS_PER_PAGE, LIMIT } from '../../constants'
import './styled.css'

export const Paginate: React.FC = () => {
  const [state, setState] = useContext(AppContext)
  const index = state.pageIndex

  const handlePrev = () => setState({...state, pageIndex: index !== 0 ? (index - ITEMS_PER_PAGE) : 0})
  const handleNext = () => setState({...state, pageIndex: index >= (LIMIT-ITEMS_PER_PAGE) ? index : (index + ITEMS_PER_PAGE)})

  return (
    <div className="paginate-buttons">
      <Btn text="Anterior" iconLeft={<BsChevronLeft fontSize={16} color={'white'}/>} onClick={handlePrev}/>
      <Btn text="Siguiente" iconRight={<BsChevronRight fontSize={16} color={'white'}/>} onClick={handleNext}/>
    </div>
  )
}