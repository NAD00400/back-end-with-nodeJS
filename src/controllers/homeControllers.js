const getHomePage =(req,res )=>{
    res.send("hello home page voi nguyen anh duy")
}
const getABC =(req,res)=>{
    res.send("home a b c")
}

const getnguyenAnhduy =(req,res)=>{
    res.send("home nguyen anh duy")
}
module.exports ={getHomePage,getnguyenAnhduy, getABC };