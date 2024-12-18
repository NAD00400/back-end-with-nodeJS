const Customer =require("../models/customer")

module.exports ={
    createCustomerService:async(customerData)=>{
        try {
            let results=await Customer.create({ //Customer chỗ này là của model
                name:customerData.name,
                address:customerData.address,
                email:customerData.email,
                phone:customerData.phone,
                description:customerData.description,
                image: customerData.image
            })
            return results
        } catch (error) {
            console.log(error);
            return null
        }
    },
    createArrCustomerService : async(arr)=>{
        try {
            let results =await Customer.insertMany(arr)//Customer chỗ này là của model
            return results 
        } catch (error) {
            console.log(error);
            return null
        }
    }
}