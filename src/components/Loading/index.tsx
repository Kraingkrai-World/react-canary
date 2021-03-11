import "./styles.css";

export const Loading: React.FC = () => {
   return (
      <div className="parent">
         <div className="child">
            <div className="lds-ellipsis">
               <div></div>
               <div></div>
               <div></div>
               <div></div>
            </div>
         </div>
      </div>
   );
};
