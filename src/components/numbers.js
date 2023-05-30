const Numbers = ({ data, pageHandler }) => {
    let pageNums = []
    for (let i = 1; i < Math.ceil(data.length / 10) + 1; i++) {
        pageNums.push(i)
    }
    return (
        <div className="for-btn-cont">
            {pageNums.map(each => <div className="pg-btn mr-3" onClick={() => { pageHandler(each) }} >{each}</div>)}
        </div>
    )
}
export default Numbers