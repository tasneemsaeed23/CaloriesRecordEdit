import { useState } from "react";
import "./CaloriesRecordEdit.css";

function CaloriesRecordEdit() {
  const [dateValue, setDateValue] = useState();
  const [mealValue, setMealValue] = useState();
  const [contentValue, setContentValue] = useState();
  const [caloriesValue, setCaloriesValue] = useState();

  const onDateChangeHandler = (event) => {
    setDateValue(event.target.value);
  };

  const onMealChangeHandler = (event) => {
    setMealValue(event.target.value);
  };

  const onContentChangeHandler = (event) => {
    setContentValue(event.target.value);
  };

  const onCaloriesChangeHandler = (event) => {
    setCaloriesValue(event.target.value);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    console.log({ dateValue, mealValue, contentValue, caloriesValue });
  };

  return (
    <form className="CaloriesRecordEditForm" onSubmit={onSubmitHandler}>
      {" "}
      {}
      <label htmlFor="date">Date: </label>
      <input type="date" name="date" id="date" onChange={onDateChangeHandler} />
      <label htmlFor="meal">Meal: </label>
      <select name="meal" id="meal" onChange={onMealChangeHandler}>
        <option value="Breakfast">Breakfast</option>
        <option value="Lunch">Lunch</option>
        <option value="Dinner">Dinner</option>
        <option value="snack">snack</option>
      </select>
      <label htmlFor="content">Content: </label>
      <input
        type="text"
        name="content"
        id="content"
        onChange={onContentChangeHandler}
      />
      <label htmlFor="calories">Calories: </label>
      <input
        type="number"
        id="calories"
        name="calories"
        onChange={onCaloriesChangeHandler}
      />
      <div className="footer">
        <button>Add Record</button>
      </div>
    </form>
  );
}

export default CaloriesRecordEdit;
