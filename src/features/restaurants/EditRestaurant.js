import { useNavigate } from "react-router-dom";

function EditRestaurant() {
    let navigator = useNavigate();

    function handleSubmit(event) {
        event.preventDefault();
        navigator("/");
    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Edit Restaurant Name
          <input
            type="text"
            name="name"
            // value={name}
            placeholder="Enter restaurant name"
            // onChange={handleInputChange}
          />
        </label>
        <input type="submit" value="Edit Restaurant" />
      </form>
    </div>
  );
}

export default EditRestaurant;
