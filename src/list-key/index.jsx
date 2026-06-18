import { useState } from "react";

export default function ListKey() {
  const [fruits, setFruit] = useState([
    { id: 1, name: "Apple" },
    { id: 2, name: "Banana" },
    { id: 3, name: "Grape" },
  ]);

  const renderListFruit = () => {
   const listLi = fruits.map((fruit) => {
      return (
        <li key={fruit.id}>
          id: {fruit.id} - name: {fruit.name}
        </li>
      );
    });
    return listLi;
  };

const renderTbody = () =>{
fruits.map((fruit) =>{
    return(
         
            <tr>
                <td>{fruit.id}</td>
                <td>{fruit.name}</td>
            </tr>
        
    )
})
};

  return (
    <div>
      <h1>Listkey</h1>
      <ul> 
        {renderListFruit()}
      </ul>


      <table>
        <thead >
            <tr>
                <th>Id</th>
                <th>Name</th>
            </tr>
        </thead>
        <tbody>{renderTbody()}</tbody>
      </table>
    </div>
  );
}
