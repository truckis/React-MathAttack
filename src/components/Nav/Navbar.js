import './Navbar.css'

const Navbar = (props) => {

    const difficultyChangeHandler = (event) => {
        props.onSelectDifficulty(event.target.value)
    }

    const mathTypeChangeHandler = (event) => {
        props.onSelectMathType(event.target.value)
    }

    return (
        <div className='navbar-container'>
            <div className='nav-item'>
                <select value={props.selectedDifficulty} onChange={difficultyChangeHandler}>
                    <option value='easy'>Easy</option>
                    <option value='medium'>Medium</option>
                    <option value='hard'>Hard</option>
                </select>
            </div>
            <div className='nav-item'>
                <h1>Math Attack</h1>
            </div>
            <div className='nav-item'>
                <select value={props.selectedMathType} onChange={mathTypeChangeHandler}>
                    <option value='addition'>Addition</option>
                    <option value='subtraction'>Subtraction</option>
                    <option value='multiplication'>Multiplication</option>
                </select>
            </div>
            
         </div>
    )
}


export default Navbar;