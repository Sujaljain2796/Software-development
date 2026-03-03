import { useDispatch } from "react-redux";
import { setFilter } from "../redux/slices/taskSlice";
import "./FilterBar.css";

const FilterBar = () => {
  const dispatch = useDispatch();

  return (
    <div className="filter-bar">
      <button onClick={() => dispatch(setFilter("all"))}>All</button>
      <button onClick={() => dispatch(setFilter("completed"))}>Completed</button>
      <button onClick={() => dispatch(setFilter("pending"))}>Pending</button>
    </div>
  );
};

export default FilterBar;