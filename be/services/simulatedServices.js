const { type } = require("express/lib/response");
const { Model } = require("mongoose");
const Simulated = require("../model/simulated");


class SimulatedServices {

        static getSimulatedDetails = async (data) => {
                try {
                    const query = {
                        type : data.type,                             
                }  
                console.log(type);                 
            let meterData = await Simulated.find(query);
            if(meterData != [])
            {
                console.log(meterData);
                return meterData;
            }
                    else{
                        console.log('Data not found');
                    }
                    
                }
                catch(err){
                        console.log(err);
                        console.log("Some unexpected error occured while logging in")
                }
        }



        static addSimulateddetails = async (data) => {
            console.log(data)
                try {
                        const newvalues = { 
                          name : data.name,
                          path: data.path,
                          work_Status: data.work_Status,
                          electricity_capacity: data.electricity_capacity,
                          water_capacity: data.water_capacity,
                          Voltage: data.Voltage,
                          Current: data.Current,
                          Total_Usage: data.Total_Usage,
                          Last_24_hr: data.Last_24_hr,
                          weekUsage: data.weekUsage,
                          monthUsage: data.monthUsage,
                          yearUsage: data.yearUsage,
                          type:data.type
                    };
                    await Simulated.insertMany(newvalues, function(err, res){
                    if(err)
                    {
                        console.log('insertion is givng error');
                        console.log(err);
                        return false;
                    }
                    else{
                            console.log('inserted: ' + res.insertedCount);
                            console.log('res:' + res);
                    }
                    
                    });
                    return true;                     
                }
                catch(err){
                        console.log(err);
                        console.log("Some unexpected error occured while logging in")
                }
        }


}



module.exports.SimulatedServices = SimulatedServices;