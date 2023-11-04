
let tasks=[
    {id:1,title :"Tarea 1",completed:false},
    {id:2,title :"Tarea 2",completed:true}
]


const getAllTask=(req,res)=>{
   res.json(tasks);
}

const addTask=(req,res)=>{
    //cuando consumas por un cliente esterno req.body mandar en el obejto body y en formato json
    let {title}=req.body; //llama al req body tittle por name
    let id=tasks.length+1;
    tasks.push({id,title,completed:false});
    res.json({error:false,message:"Tarea Agregada"});
}

const editTask=(req,res)=>{
    let id=parseInt(req.params.id);//obtienes el id y lo coniertes en int
    let taskIndex=tasks.findIndex((task)=>task.id === id);//cuesta el index en la bd
    if(taskIndex===-1){
        res.status(404).json({error:true, message: "Tarea no encontrada"});
    }else{
        tasks[taskIndex].title=req.body.title //guarda el title
        res.json({error:false,message:"Tarea Editada"});
    }
}

const getTask=(req,res)=>{
    let id=parseInt(req.params.id);//obtienes el id y lo coniertes en int
    let taskIndex=tasks.findIndex((task)=>task.id === id);//cuesta el index en la bd
    if(taskIndex===-1){
        res.status(404).json({error:true, message: "Tarea no encontrada"});
    }else{
        res.json({error:false, task: tasks[taskIndex]});
    }
}
const completedTask=(req,res)=>{
    let id=parseInt(req.params.id);//obtiene el id
    let taskIndex=tasks.findIndex((task)=>task.id === id); //busca el index de ese id
    if(taskIndex===-1){
        res.status(404).json({error:true, message: "Tarea no encontrada"});
    }else{
        tasks[taskIndex].completed=true //guarda el title
        res.json({error:false,message:"Tarea Completada"});
    }
}
const uncompletedTask=(req,res)=>{
    let id=parseInt(req.params.id);//obtiene el id
    let taskIndex=tasks.findIndex((task)=>task.id === id); //busca el index de ese id
    if(taskIndex===-1){
       res.status(404).json({error:true, message: "Tarea no encontrada"});
    }else{
        tasks[taskIndex].completed=false //guarda el title
        res.json({error:false,message:"Tarea no Completada"});
    }
}
const deleteTask=(req,res)=>{
    let id=parseInt(req.params.id);//obtiene el id
    let taskIndex=tasks.findIndex((task)=>task.id === id); //busca el index de ese id
    if(taskIndex===-1){
       res.status(404).json({error:true, message: "Tarea no encontrada"});
    }else{
        tasks.splice(taskIndex,1) //elimina
        res.status(200).json({error:false,message:"Tarea Eliminada"});
        //no es necesario poner el status 200 xq es por defecto
    }
}

export default{
    getAllTask,
    getTask,
    addTask,
    editTask,
    completedTask,
    uncompletedTask,
    deleteTask
}
