import { useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { reviewEdited } from "./reviewsSlice";

function EditReview() {
  let navigator = useNavigate();
  let params = useParams();

  const reviewData = useSelector((state) =>
    state.reviews.entities.filter((r) => r.id === params.reviewID)
  );
  // console.log(reviewData);

  const allRestaurants = useSelector((state) => state.restaurants.entities);

  const restaurantReviews = useSelector((state) => state.restaurants.entities.filter(r => r.id === reviewData?.[0].restaurantId));

  const [editData, setEditData] = useState(reviewData);
  // console.log(editData?.[0].comment);
  const id = params.reviewId;
  const dispatch = useDispatch();

  function handleInputChange(event) {
    // setName(event.target.value);
    const key = event.target.name;
    const value = event.target.value;

    setEditData({ ...editData, key, value });
  }
  function handleEdit() {
    dispatch(reviewEdited({ id, editData }));
    // navigator("/");
  }
  return (
    <div>
      <form>
        <label>
          Edit Review Comment: &nbsp;
          <input
            type="text"
            name="comment"
            value={editData?.[0]?.comment}
            // placeholder={restaurantData[0].name}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <br />
        {/* add drop down menu for selecting restaurants */}
        <label htmlFor="restaurant"> Choose Restaurant: </label>
        <select
          id="restaurants"
          name="restaurantId"
          onChange={handleInputChange}
        >
          <option value={restaurantReviews?.[0]?.id}>
            {restaurantReviews?.[0]?.name}
          </option>
          {allRestaurants.map((option) => (
            <option key={option.id} value={option.id}>
              {option.name}
            </option>
          ))}
        </select>
        <br />
        <br />
        <button onClick={handleEdit}>Edit Review</button>
      </form>
    </div>
  );
}

export default EditReview;
