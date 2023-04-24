import { Children, cloneElement, useEffect, useState } from "react"
import "./style.css"
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"
const PAGE_WIDTH = 420
export const Slider = ({ children }) => {
    const [offset, setOffset] = useState([])
    const handleLeftArrowClick = () => {
        console.log("handleLeftArrowClick")
        setOffset((currentOffset) => {
            const newOffset = currentOffset + PAGE_WIDTH
            if (newOffset > 0 ) {
                return -PAGE_WIDTH * (children.length - 1)
            } return Math.min(newOffset, 0)
        })
    }
    const handleRightArrowClick = () => {
        console.log("handleRightArrowClick")
        setOffset((currentOffset) => {
            const newOffset = currentOffset - PAGE_WIDTH
            const minOffset = 0
            const maxOffset = -PAGE_WIDTH * (children.length - 1)
            if (newOffset < maxOffset) {
                return minOffset
            } return Math.max(newOffset, maxOffset)
        })
    }
    return (
        <div className="main-continer">
            <FaChevronLeft className="arrow" onClick={handleLeftArrowClick} />
            <div className="window">
                <div className="all-pages-continer" style={{
                    transform: `translateX(${offset}px)`,
                }}>
                    
                    {children}
                </div>
            </div>
            <FaChevronRight className="arrow" onClick={handleRightArrowClick} />
        </div>
    )
}