const accountSid = 'ACcd810f69016b154a48bc238f78e19f97'; 
const authToken = 'bfe220a4722fb37795f43915cb919c68'; 
const client = require('twilio')(accountSid, authToken); 
 
client.messages 
      .create({   
        body: 'through backend',
         messagingServiceSid: 'MG75a4384e2d7198f2e856f141dae1c4d0',      
         to: '+918530364072' 
       }) 
      .then(message => console.log(message.sid)) 
      .done();