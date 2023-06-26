import { useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { restaurantEdited } from "./restaurantsSlice";

function EditRestaurant() {
  let navigator = useNavigate();
  let params = useParams();

  const restaurantData = useSelector((state) =>
    state.restaurants.entities.filter(
      (r) => r.id === params.restaurantID
    )
  );
  // console.log(restaurantData);

  const allRestaurants = useSelector((state) => state.restaurants.entities)

  const eachrestaurant = restaurantData.map((rest) => {
    return (
      <ul>
        <li key={rest.id}>{rest.name}</li>
      </ul>
    )
  })

  const [name, setName] = useState('');
  const id = params.restaurantId
  const dispatch = useDispatch();

  function handleInputChange(event) {
    setName(event.target.value);
  }

  console.log(name);


  function handleEdit() {
    dispatch(restaurantEdited(id, name))
    // navigator("/");
  }
  return (
    <div>
      <form>
        <label>
          Edit Restaurant Name
          <input
            type="text"
            name="name"
            value={name}
            placeholder={restaurantData[0].name}
            onChange={handleInputChange}
          />
        </label>
        <button onClick={handleEdit}>Edit Restaurant</button>
      </form>
      {/* {eachrestaurant} */}
    </div>
  );
}

export default EditRestaurant;
