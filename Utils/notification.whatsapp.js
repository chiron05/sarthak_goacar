const accountSid = 'ACcd810f69016b154a48bc238f78e19f97'; 
const authToken = 'bfe220a4722fb37795f43915cb919c68'; 
const client = require('twilio')(accountSid, authToken); 
 
client.messages 
      .create({ 
         body: 'Your under the arrest', 
         from: 'whatsapp:+14155238886',       
         to: 'whatsapp:+917798988500' 
       }) 
      .then(message => console.log(message.sid)) 
      .done();