import { useState } from "react";

export const Inventory = () => {
  const [inv, setInv] = useState({
    books: 10,
    notebooks: 13,
    pens: 40,
    inkpens:15,
  });
  const books =inv.books
  const notebooks = inv.notebooks
  const pens =inv.pens
  const inkpens =inv.inkpens
    // Create add and remove functions here that changes the
    // state.
const handleChange =(value , title)=>{
  if(title ==="books"){
    if(books <=0 && value ===-1){
      return 
    }
    else {
      setInv(prevState =>{
        return {...prevState,books:prevState.books +value}
      })
    }
  }

  // for notebooks...................

  if(title ==="notebooks"){
    if(notebooks <=0 && value ===-1){
      return 
    }
    else {
      setInv(prevState =>{
        return {...prevState,notebooks:prevState.notebooks +value}
      })
    }
  }
// for pens..................
if(title ==="pens"){
  if(pens <=0 && value ===-1){
    return 
  }
  else {
    setInv(prevState =>{
      return {...prevState,pens:prevState.pens +value}
    })
  }
}

// inkpens............
if(title ==="inkpens"){
  if(inkpens <=0 && value ===-1){
    return 
  }
  else {
    setInv(prevState =>{
      return {...prevState,inkpens:prevState.inkpens +value}
    })
  }
}

}

// total of value...................
let sum = books+ notebooks + pens+ inkpens
  return (
    <div
      style={{
        border: "1px solid black",
        borderRadius: "3px",
        padding: "10px",
        display: "flex",
        flexDirection: "column",
        width: "400px",
      }}
    >
      <div className="items">
        <span>Books: </span>
        <button className="circlularButton" onClick={()=>{
handleChange(1,"books")
        }}>+</button>
        <button className="circlularButton" 
        onClick={()=>{
          handleChange(-1,"books")
                  }}>-</button>
        <span>{inv.books}</span>
      </div>


{/* notebooks..................... */}
      <div className="items">
        <span>Notebooks: </span>
        <button className="circlularButton"
        onClick={()=>{
          handleChange(1,"notebooks")
                  }}
        >+</button>
        <button className="circlularButton"
        onClick={()=>{
          handleChange(-1,"notebooks")
                  }}
        >-</button>
        <span>{inv.notebooks}</span>
      </div>


{/* pens ................ */}
      <div className="items">
        <span>Pen: </span>
        <button className="circlularButton"
        onClick={()=>{
          handleChange(1,"pens")
                  }}
        >+</button>
        <button className="circlularButton"
        onClick={()=>{
          handleChange(-1,"pens")
                  }}
        >-</button>
        <span>{inv.pens}</span>
      </div>

      {/* inkpens................. */}
      <div className="items">
        <span>Ink Pens: </span>
        <button className="circlularButton"
        onClick={()=>{
          handleChange(1,"inkpens")
                  }}>+</button>
        <button className="circlularButton"
        onClick={()=>{
          handleChange(-1,"inkpens")
                  }}
        >-</button>
        <span>{inv.inkpens}</span>
      </div>
            {/*calculate total and show it*/}
      total: {sum}
    </div>
  );
};
