import React from "react";
import { useSelector, useDispatch } from "react-redux";
import * as actionTypes from "./actions/actionTypes";
import * as selectors from "./selectors";
import "./Counter.scss";

const Counter: React.FC = () => {
  const count = useSelector(selectors.getCountValue);
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <div>
          <div>
            <h4>
              Counter: <strong>{count}</strong>
            </h4>
            <p>
              Here you can increment and decrement counter value using buttons
              below. All the state updates are performed via redux actions.
            </p>
          </div>
          <div>
            <div>
              <button
                type="button"
                data-qa="decrement-counter"
                onClick={() =>
                  dispatch({ type: actionTypes.DECREMENT_COUNTER })
                }
              >
                decrement
              </button>
              <button
                type="button"
                data-qa="increment-counter"
                onClick={() =>
                  dispatch({ type: actionTypes.INCREMENT_COUNTER })
                }
              >
                increment
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counter;
