const { query } = require('express');
const express = require('express');
const connection = require('../connection');

const router = express.Router();

router.post('/tasks/create', (req,res,next) =>{
    let tasks = req.body;
    query1 = "insert into tasks (task_name, task_description, task_priority, task_status) values (?,?,?,?)";
    connection.query(query1, [tasks.task_name, tasks.task_description, tasks.task_priority, tasks.task_status], (err,result)=>{
        if(!err)
        {
            return res.status(200).json({message:"Tasks Added Successfully"});
        }
        else
        {
            return res.status(500).json(err);
        }
    });
});

router.get('/tasks/read', (req,res,next)=>{
    var myquery = "select *from tasks";
    connection.query(myquery,(err, result)=>{
        if(!err)
        {
            return res.status(200).json(result);
        }
        else
        {
            return res.status(500).json(err);
        }
    });

});

router.get('/tasks/readone/:id', (req,res,next)=>{
    const id = req.params.id;
    var myquery = `select *from tasks where id = ${id}`;
    connection.query(myquery,[id], (err, result)=>{
        if(!err)
        {                     
            return res.status(200).json(result);            
        }
        else
        {                        
            // return res.status(500).json({message:"Task not found"});
            return res.status(500).json(err);
        }
    });

});


router.put('/tasks/update/:id', (req,res,next)=>{
    const id = req.params.id;    
    let tasks = req.body;
    var myquery = `update tasks set task_name=?,task_description=?,task_priority=?,task_status=? where id=${id}`;
    connection.query(myquery, [tasks.task_name, tasks.task_description, tasks.task_priority, tasks.task_status], (err,result)=>{
        if(!err)
        {
            if (result.affectedRows==0)
            {
                return res.status(404).json({message:"Task id does not found"});
            }
            return res.status(200).json({message:"Task Updated Successfully"});
        }
        else
        {
            return res.status(500).json(err);
        }
    });  
});

router.delete('/tasks/delete/:id', (req,res,next)=>{
    const id = req.params.id;
    const myquery = `delete from tasks where id =${id}`;
    connection.query(myquery, [id], (err,result)=>{
        if(!err)
        {
            if(result.affectedRows==0)
            {
                return res.status(404).json({message:"Task id does not found"}); 
            }
            return res.status(200).json({message:"Task Deleted Successfully"});  
        }
        else
        {
            return res.status(500).json(err);
        }
    })
})

module.exports = router;