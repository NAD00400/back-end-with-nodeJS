const path = require("path");

const upLoadSingleFile =async(fileObject)=>{
    uploadPath =path.join(__dirname, '../public/images/upload', fileObject.name)
    try {
        console.log("check location",__dirname);

        await fileObject.mv(uploadPath)
        return{
            status : 'succsec',
            path : uploadPath,
            error : null
        }
    } catch (error) {
        console.log("check erro" ,error);
            return{
                status : 'failed',
                path : null,
                error : JSON.stringify(error)
            }
    }
}
 const uploadMutipleFile =()=>{
}
module.exports={
    upLoadSingleFile,uploadMutipleFile
}