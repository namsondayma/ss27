function Bt3(){
     let monhoc:string[] = ["10+10=20","10-10=0","10*10=100","10/10=1"];
     return<div>
         bài tập 3
         <p>Danh sách kết quả</p>
         <ul>
         {monhoc.map((item, index, arr) => {
           return <li>{item}</li>
         })}
       </ul>
         </div>
}
export default Bt3