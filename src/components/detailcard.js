import '../App.css'
const Detailcard = ({ details }) => {
    const { id, title, body } = details
    return (
        <div className='card'>
            <p className='hh'> Id :{id}</p>
            <p className='hh'>Title :{title}</p>
            <p className='m-3 hh'>Body :{body}</p>
        </div>
    )
}
export default Detailcard