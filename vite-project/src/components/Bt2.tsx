function Bt2(){
    let monhoc:string[] = ["HTML","CSS","Javascript","ReactJs"];
    return<div>
        bài tập 2
        <p>Danh sách khóa học</p>
        <ul>
        {monhoc.map((item, index, arr) => {
          return <li>{index+1},{item}</li>
        })}
      </ul>
        </div>
}
export default Bt2