import React,{useState} from "react";

export default function AddDetails() {

  const Data = [
    {
      name : "abhishek",
      isDelete : false,
      isUpdate : false
    },
    {
      name : "aman",
      isDelete : false,
      isUpdate : false
    },
    {
      name : "ankit",
      isDelete : false,
      isUpdate : false
    },
    {
      name : "aayush",
      isDelete : false,
      isUpdate : false
    },
  ]

  const [list,setList] = useState(Data)
  const [value , setValue] = useState("")
  const [isDisable , setIsDisable] = useState(false)
  const [addItem , setAddItem] = useState("")




  function handleUndo(x){
    x.isDelete = false
    setList([...list])
  }
  function handleUpdate(x){
    x.isUpdate = true
    setList([...list])
    setIsDisable(true)
  }

  function addItems(addItem){
    const newItem ={
      name : addItem,
      isDelete : false,
      isUpdate : false
    }
    setList([newItem,...list])
    setAddItem("")
  }

  function handleDelete(x){
    x.isDelete = true ;
    setList([...list])
  }

  function handleUpdateDone(x,value){
    if(value === ""){
      alert("please edit or cancel")
    }else{

      let index = list.indexOf(x)
      const updateValue ={
        name : value
      }
      list.splice(index,1,updateValue)
      setList([...list])
      setValue("")
      setIsDisable(false)
    }
  }


  function handleCancelUpdate(x){
    x.isUpdate = false
    setList([...list])
    setIsDisable(false)
  }

  return (
    <div>
      <h4>simple todo list </h4>
      <div>
        <input value={addItem} onChange={(e)=>setAddItem(e.target.value)}/>
        <button onClick={()=>addItems(addItem)}>Add</button>
      </div>
      <h4>TODO LIST</h4>
      {list.map((x) => (
      <>
      <div>
      {x.isDelete ?
      <button onClick={()=>handleUndo(x)}>Undo</button>
      :
      <>
      {x.isUpdate ?
      <input value={value} onChange={(e)=>setValue(e.target.value)}/>
      :
      <h3>{x.name}</h3>
      }
      <button onClick={()=>handleDelete(x)}>Delete</button>
      {!x.isUpdate ?
      <button disabled={isDisable}onClick={()=>handleUpdate(x,value)}>update</button>
      :
      <>
      <button onClick={()=>handleUpdateDone(x,value)}>update done</button>
      <button onClick={()=>handleCancelUpdate(x)}>Cancel</button>

      </>
}
    </>
   }
      </div>
      </>
      ))}
      
    </div>
  );
}
