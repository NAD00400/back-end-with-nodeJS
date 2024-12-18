const path = require("path");

const upLoadSingleFile =async(fileObject)=>{
    const baseName = `${path.basename(fileObject.name)}`//lấy tên 
    const extName = `${path.extname(fileObject.name)}`// lấy phần mở rộng
    const finalName= `${baseName}-${Date.now()}${extName}` // chèn time vào giữa
    uploadPath =path.join(__dirname, '../public/images/upload') // Url _ tên
    finalPath =`${uploadPath}/${finalName}`
    try {
        console.log("check location",__dirname);
        await fileObject.mv(finalPath)
        return{
            status : 'succsec',
            path : finalName,
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
 const uploadMutipleFile =async(fileArr)=>{

    try {
        uploadPath =path.join(__dirname, '../public/images/upload') // Url _ tên
        
        resultArr =[]
        let countSuccess =0
        for (let index = 0; index < fileArr.length; index++) {
            const baseName = `${path.basename(fileArr[index].name)}`//lấy tên 
            const extName = `${path.extname(fileArr[index].name)}`// lấy phần mở rộng
            const finalName= `${baseName}-${Date.now()}${extName}` // chèn time vào giữa
            finalPath =`${uploadPath}/${finalName}`
        
            try {
                await fileArr[index].mv(finalPath)
                resultArr.push({
                    status : 'succsec',
                    path : fileArr[index].finalName,
                    error : null
                })
                countSuccess++
            } 
            catch (error) {
                resultArr.push({
                    status : 'failed',
                    path : null,
                    error : JSON.stringify(error)
                })
            }
        }
        return {
            countSuccess:countSuccess,
            detail:resultArr
        }
        }
    catch(error) {
        console.log(error);
        
    }
}
module.exports={
    upLoadSingleFile,uploadMutipleFile
}