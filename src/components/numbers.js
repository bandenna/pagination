import { useState } from "react";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
const Numbers = ({ data, pageHandler }) => {
    const [currentPage, setcurrentPage] = useState(1)

    const [pageNumberLimit, setPageNumberLimit] = useState(5)
    const [maxPageLimit, setMaxPageLimit] = useState(5)
    const [minPageLimit, setMinPageLinmit] = useState(0)

    let pageNums = []

    const handleNext = () => {
        setcurrentPage(currentPage + 1)
        if (currentPage + 1 > maxPageLimit) {
            setMaxPageLimit(maxPageLimit + pageNumberLimit);
            setMinPageLinmit(minPageLimit + pageNumberLimit)
        }
    }
    const handlePrev = () => {
        setcurrentPage(currentPage - 1)
        if ((currentPage - 1) % pageNumberLimit == 0) {
            setMaxPageLimit(maxPageLimit - pageNumberLimit);
            setMinPageLinmit(minPageLimit - pageNumberLimit)
        }
    }

    let pageIncrementBtn = null;
    if (pageNums.length < maxPageLimit) {
        pageIncrementBtn = <div className="pg-btn mr-3" onClick={() => {
            handleNext(currentPage);
            pageHandler(currentPage)
        }}> &hellip; </div>;
    }

    let pageDecrementBtn = null
    if (minPageLimit >= 1) {
        pageDecrementBtn = <div className="pg-btn mr-3" onClick={() => {
            handlePrev(currentPage);
            pageHandler(currentPage)
        }}>&hellip;</div>
    }


    const handleClick = (each) => {
        setcurrentPage(each);
    };
    for (let i = 1; i < Math.ceil(data.length / 5) + 1; i++) {
        pageNums.push(i)
    }

    const pagesDisplay = pageNums.slice(currentPage - 3, currentPage + 2)
    return (
        <div className="for-btn-cont">
            <button onClick={() => {
                handlePrev(currentPage);
                pageHandler(currentPage)
            }} disabled={currentPage == pageNums[0] ? true : false} className="for-icons"><KeyboardArrowLeftIcon /></button>
            {pageDecrementBtn}
            {pageNums.map((each) => {
                if (each < maxPageLimit + 1 && each > minPageLimit) {
                    return (
                        <div className={currentPage == each ? "active mr-3" : "pg-btn mr-3"} onClick={() => { pageHandler(each); handleClick(each) }} >{each}</div>
                    )
                } else {
                    return null
                }
            })}
            {pageIncrementBtn}
            <button onClick={() => {
                handleNext(currentPage);
                pageHandler(currentPage)
            }} disabled={currentPage == pageNums[pageNums.length - 1] ? true : false} className="for-icons"><KeyboardArrowRightIcon /></button>

        </div>
    )
}
export default Numbers