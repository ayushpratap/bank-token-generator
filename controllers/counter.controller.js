'use-strict';

module.exports = function clearCounter(req,res){
    if(g_PQ.isEmpty()){
        //  queue is empty
        res.status(200).send({
            status: 200,
            body: null,
            message: "Queue is empty"
        });
    }
    else{
        //  deqeue the customer from qeueu
        let customer = g_PQ.dequeue().element;

        //  Set the exitedAt time
        customer.userExitedAt = Date.now();

        //  save the customer to database
        customer.save((error, data)=>{
            if(error){
                console.log(error);
                //  Send response
                res.status(200).send({
                    status:200,
                    body: null,
                    message:error.message
                });
            }else{
                console.log("user saved");

                //  Send response
                res.status(200).send({
                    status: 200,
                    body: data,
                    message: null
                });
            }
        });
    }

    
};