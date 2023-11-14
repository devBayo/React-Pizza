import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import { dereaseItemQuantity, increaseItemQuantity } from "../cart/cartSlice";

function UpdateItemQuantity({ pizzaId, currentQuantiity }) {
  const dispatch = useDispatch();

  return (
    <div className="flex items-center gap-2 md:gap-3">
      <Button
        type="round"
        onClick={() => dispatch(dereaseItemQuantity(pizzaId))}
      >
        -
      </Button>
      <span className="text-sm font-medium">{currentQuantiity}</span>
      <Button
        type="round"
        onClick={() => dispatch(increaseItemQuantity(pizzaId))}
      >
        +
      </Button>
    </div>
  );
}

export default UpdateItemQuantity;
