import { useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { reviewEdited } from "./reviewsSlice";

function EditReview() {
  let navigator = useNavigate();
  let params = useParams();

  const reviewData = useSelector((state) =>
    state.reviews.entities.filter(
      (r) => r.reviewId === params.reviewId
    )
  );

  const [editData, setEditData] = useState([]);
  const id = params.reviewId
  const dispatch = useDispatch();

  function handleInputChange(event) {
    // setName(event.target.value);
  }
  function handleEdit() {
    dispatch(reviewEdited({id, editData}))
    // navigator("/");
  }
  return (
    <div>
      <form>
        <label>
          Edit Review Comment
          <input
            type="text"
            name="name"
            // value={name}
            // placeholder={restaurantData[0].name}
            onChange={handleInputChange}
          />
        </label>

        {/* add drop down menu for selecting restaurants */}
        <button onClick={handleEdit}>Edit Review</button>
      </form>
    </div>
  );
}

export default EditReview;
