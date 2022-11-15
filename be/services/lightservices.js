const { type } = require("express/lib/response");
const Light = require("../model/light");
const { default: mongoose } = require("mongoose");

class LightServices {

            
        static getLightdetails = async (data) => {
            console.log(data)
                try {
                        const query = {
                                userId : data.userId,                             
                        }
                    let foundLights = await Light.find({"userId": query["userId"] });
                    if(foundLights != [])
                    {
                        console.log(foundLights);
                        return foundLights;
                    }
                    else{
                        console.log('no user found');
                    }
                    
                }
                catch(err){
                        console.log(err);
                        console.log("Some unexpected error occured while logging in")
                }
        }

        static updateLightdetails = async (id,data) => {
                console.log(data)
                    try {
                            const query = {
                                    lightId : id.lightId,                             
                            }
                            const newvalues = { $set: {lightName: data.lightName,
                              marker: data.marker,
                              model: data.model,
                              location: data.location,
                              illumination: data.illumination,
                              illuminationTime: data.illuminationTime,
                              wattage: data.wattage,
                              design: data.design,
                              deploymentDate: data.deploymentDate,
                              installationDate: data.installationDate,
                              power: data.power,
                              cloudStatus: data.cloudStatus,
                              workingStatus: data.workingStatus,
                              activeStatus: data.activeStatus,} };
                        let updatedLight = await Light.updateOne({"LightId": query["LightId"] }, newvalues);
                        if(updatedLight)
                        {
                            console.log(updatedLight);
                            return updatedLight;
                        }
                        else{
                                console.log(updatedLight);
                        }                        
                    }
                    catch(err){
                            console.log(err);
                            console.log("Some unexpected error occured while logging in")
                    }
            }
            // we dont have a ctrl api for this yet we are confused if we will use post or put or patch....

            static deleteLightdetails = async (data) => {
                console.log(data)
                    try {
                            const query = {
                                    lightId : data.lightId,                             
                            }
                        await Light.deleteOne({"lightId": query["lightId"] }, function(err,res){                        
                        if(err)
                        {
                            console.log(err);
                            return false;
                        }
                        else{
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


            static addLightdetails = async (id,data) => {
                console.log(data)
                    try {
                            const newvalues = { 
                              lightId : data.lightId,
                              lightName: data.lightName,
                              marker: data.marker,
                              model: data.model,
                              location: data.location,
                              illumination: data.illumination,
                              illuminationTime: data.illuminationTime,
                              wattage: data.wattage,
                              design: data.design,
                              deploymentDate: data.deploymentDate,
                              installationDate: data.installationDate,
                              power: data.power,
                              cloudStatus: data.cloudStatus,
                              workingStatus: data.workingStatus,
                              activeStatus: data.activeStatus,
                              userId: id.userId
                        };
                        console.log(newvalues);
                        await Light.insertMany(newvalues, function(err, res){
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




            static updateLightCloudStatus = async (data,reqbody) => {
                //  console.log(data)
                      try {
                  
                              var query = { id : data.id };
                              var newvalues = {cloudStatus: reqbody.cloudStatus};
  
                              let updatedLight = await Light.findOneAndUpdate(query, newvalues); 
                              console.log(updatedLight);        
   
                                  if(updatedLight)
                                  {
                                      console.log(updatedLight);
                                      return updatedLight;
                                  }
                                  else{
                                          console.log(updatedLight);
                                  }                        
                              }
                      catch(err){
                              console.log(err);
                              console.log("Some unexpected error occured while logging in")
                      }
              }
              static updateWorkingStatus = async (data,reqbody) => {
                      try {
                  
                              var query = { id : data.id };
                              var newvalues = {workingStatus: reqbody.workingStatus};
  
                              let updatedLight = await Light.findOneAndUpdate(query, newvalues); 
                              console.log(updatedLight);        
   
                                  if(updatedLight)
                                  {
                                      console.log(updatedLight);
                                      return updatedLight;
                                  }
                                  else{
                                          console.log(updatedFan);
                                  }                        
                              }
                      catch(err){
                              console.log(err);
                              console.log("Some unexpected error occured while logging in")
                      }
              }
              
              static updateActiveStatus = async (data,reqbody) => {
                //  console.log(data)
                      try {
                  
                              var query = { id : data.id };
                              var newvalues = {activeStatus: reqbody.activeStatus};
  
                              let updatedLight = await Light.findOneAndUpdate(query, newvalues); 
                              console.log(updatedLight);           
                                  if(updatedLight)
                                  {
                                      console.log(updatedLight);
                                      return updatedLight;
                                  }
                                  else{
                                          console.log(updatedLight);
                                  }                        
                              }
                      catch(err){
                              console.log(err);
                              console.log("Some unexpected error occured while logging in")
                      }
              }
}


module.exports.LightServices = LightServices;