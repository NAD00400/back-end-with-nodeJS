const { upLoadSingleFile } = require("../services/fileService");
const {createCustomerService, createArrCustomerService}=require("../services/customerService")
module.exports= {
    postCreateCustomer: async(req,res)=>{
        let {name,address,email,phone,description}= req.body;
        let imageUrl =""
        //image string 
        if (!req.files || Object.keys(req.files).length === 0) {
            // ko có ảnh thì ko làm gì 
        }  
        else{
            
            let results= await upLoadSingleFile(req.files.image) //req.file.image trong nayf image là tên thuộc tính trong req gửi lên ,còn file file là do mình sử dụng express fileUploap (th viện nên trong req sẽ có thêm 1 tt file trong này chứa n file img mà mình dăng lên )
            imageUrl=results.path
            
        }
        let customerData ={
            name,
            address,
            email,
            phone,
            description,
            image: imageUrl 
        }
        let customer = await createCustomerService(customerData)
        console.log('check',customer);
       
        return res.status(200).json({
            EC: 0,
            message: customer
        });
    },
    postCreateArrayCustomers:async(req,res)=>{
        let customerArrData = await createArrCustomerService(req.body.customers)
        return res.status(200).json({
            EC: 0,
            message: customerArrData
        });
    } 


}