import "./Authentication.css";

const Authentication = (props) => {
    const selectedDepartment = props.selectedDepartment;
    const setSelectedDepartment = props.setSelectedDepartment;
    const onDepartmentChange = props.onDepartmentChange;

    return (
        <div className="Authentication">
            <label for="departments">Select Department</label>
            <br />
                <select name="department" id="department" value={selectedDepartment} onChange={setSelectedDepartment}>
                    <option value="ENGINEERING">Engineering</option>
                    <option value="MARKETING">Marketing</option>
                    <option value="SALES">Sales</option>
                    <option value="DATA SCIENCE">Data Science</option>
                </select>
        </div>
    )
}

export default Authentication;