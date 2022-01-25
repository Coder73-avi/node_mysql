const Data = require('./mysql-config');

exports.getData = async(req, res, next)=>{
  const [data,_] = await Data.Select("users",null, null, "id DESC");

  res.status(200).json({message: data})
}
exports.insertData = async(req, res, next)=>{
  const data = await Data.Create("users",req.body);

  // console.log(data);
  res.status(201).json({message:data})

}

exports.getDataById = async(req, res, next)=>{
  const [data, _] = await Data.Select('users',"id=?", [req.params.id])
res.status(200).json({message:data})
}

exports.updateData = async(req, res, next)=>{
  const d = new Date();
  const yyyy = d.getFullYear();
  const mm = d.getMonth() + 1;
  const dd = d.getDate();

  const updatedDate = `${yyyy}-${mm}-${dd}`;
  req.body.update_time = updatedDate;

  const updatedId = req.params.id;
  const [data, _] = await Data.Update('users', req.body, "id", [updatedId])

  res.status(200).json({message: "Update Sucessfully.",date: updatedDate})
}

exports.deleteData = async(req, res, next)=>{

}
