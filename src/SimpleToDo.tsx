import React from "react";
import { useState } from "react";
import "./list.css"



function SimpleToDo() {

    const [itemList, setItemList] = useState<any[]>([]);
    const [item, setItem] = useState("");  

    function addItem(item: any) {
        const newItem: {name: string, id: number, isCompleted: boolean} = {
        name: item,
        id: itemList.length === 0 ? 1 : itemList[itemList.length-1].id-1,
        isCompleted: false,
        };
        setItemList([...itemList, newItem]);
    };

    function deleteMember(itemName: {id: number, name: string, isCompleted: boolean}) {
        setItemList(itemList.filter((item) => item.id !== itemName.id));
    };

    function completeTask(item: any) {
        setItemList(itemList.map((itemName) => {
            if(itemName.id === item.id) {
            return {
                ...itemName,
                isCompleted: !itemName.isCompleted,
            }
        }
            else{
                return {...itemName,};
            }
        }
        ))}
    
    return(
        <>
            <div className="title">
                <h3>Add Item</h3>
                <input type="text" id="item" value={item} onChange={e => setItem(e.target.value)}/>
                <button id="add" onClick={() => {addItem(item)}}>ADD</button>
                <h1>ToDo</h1>
            </div>
            
            <div className="toDoList">
                {itemList.map(item => {
                    return (
                        <>
                        <p style={{color: item.isCompleted && "green"}}>{item.name}</p>
                        <button className="complete" onClick={() => {completeTask(item)}}>Complete</button>
                        <button className="delete" onClick={() => deleteMember(item)}>X</button>
                        </>
                    )
                })}
            </div>
        </>
    );
};

export default SimpleToDo;