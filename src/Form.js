function Form(){
    return (
        <form>
            <label for="fname">First name:</label>
            <input type="text" id="fname" name="fname"/>  <br/>

            <label for="lname">Last name:</label>
            <input type="text" id="lname" name="lname"/><br/>

            <label for="add">Address:</label>
            <input type="text" id="add" name="add"/>   
        </form>
    );
}

export default Form;