import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { incremented, decremented, RootStoreType } from "../../../store/counter";

import { ICounterProps } from "../model/type";

const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";

const Counter: React.FC = () => {
   const dispatch = useDispatch();
   const { value: counterReducer } = useSelector(
      (state: RootStoreType) => state.counter
   );
   const [counter, setCounter] = useState<number>(1);

   const handleCounter = ({ type }: ICounterProps) => {
      switch (type) {
         case INCREMENT:
            dispatch(incremented());
            setCounter(counter + 1);
            break;
         case DECREMENT:
            if (counter === 0) return;
            dispatch(decremented());
            setCounter(counter - 1);
            break;
         default:
            break;
      }
   };

   return (
      <>
         <div>
            State :<strong data-testid="var-counter"> {counter}</strong> /
            Reducer : <strong> {counterReducer}</strong>
         </div>

         <div className="columns">
            <div className="column is-2">
               <button
                  data-testid="btn-counter-increment"
                  className="button is-primary"
                  onClick={() => handleCounter({ type: INCREMENT })}
               >
                  +
               </button>
            </div>

            <div className="column is-2">
               <button
                  data-testid="btn-counter-decrement"
                  className="button is-primary"
                  onClick={() => handleCounter({ type: DECREMENT })}
                  disabled={counter === 0}
               >
                  -
               </button>
            </div>
         </div>
      </>
   );
};

export default Counter;
