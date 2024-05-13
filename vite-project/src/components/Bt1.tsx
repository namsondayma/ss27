import React from 'react'

export default function Bt1() {
  /** rensder dữ liệu đối với function component */
  let fullName: string = "nam sơn";
  let age: number = 19;
  let student = {
    name: "hoa",
    age: 20,
    address: "hà nội",
  }
  let numbers: number[] = [1, 2, 3, 4, 5];
  let students: string[] = ["hoa", "sơn", "phú", "dũng"];
  let products = [
    {
      name: "Iphone16",
      price: 10000,
      id: 1
    },
    {
      name: "Iphone15",
      price: 9000,
      id: 2
    },
    {
      name: "Iphone14",
      price: 8000,
      id: 3
    },
    {
      name: "Iphone13",
      price: 7000,
      id: 4
    },
    {
      name: "Iphone12",
      price: 6000,
      id: 5
    },
  ]
  return (
    <div>
      <p>bai tap 1</p>
      <p>noi dung bai hoc</p>
      <p>Ten:{student.name}</p>
      <p>{JSON.stringify(student)}</p>
      <ul>
        {numbers.map((item, index, arr) => {
          return <li>{item}</li>
        })}
      </ul>
      <ul>
        {students.map((item, index, arr) => {
          return <li>{item}</li>
        })}
      </ul>
      <table border={2}>
        <thead>
          <th>STT</th>
          <th>Name</th>
          <th>Price</th>
          <th>ID</th>
        </thead>
        <tbody>
          <tr>
            <td>{products.map((item, index, arr) => {
              return <tr>{index+1}</tr>
            })}</td>
            <td>{products.map((item, index, arr) => {
              return <tr>{item.name}</tr>
            })}</td>
            <td>{products.map((item, index, arr) => {
              return <tr>{item.price}</tr>
            })}</td>
            <td>{products.map((item, index, arr) => {
              return <tr>{item.id}</tr>
            })}</td>
          </tr>
        </tbody>
      </table>
    </div>
    /*Khi return các element thì phải có thẻ fragment bọ bên ngoài */
  )
}
