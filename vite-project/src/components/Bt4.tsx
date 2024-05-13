function Bt4(){
    let monhoc:string[] = ["Họ và tên:Nguyễn Văn A","Giới tính:Nam","Ngày sinh:06/03/2024","Email:nva@gmail.com"];
    return<div>
        Bài tập 4
        <p>Thông tin cá nhân</p>
        <ul>
        {monhoc.map((item, index, arr) => {
          return <li>{item}</li>
        })}
      </ul>
        </div>
}
export default Bt4