import express  from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import taskControlers from "./controllers/taskControlers.js";
import error from "./controllers/error.js";

const app=express();
const port=3000;

//uso de librerias de express
app.use(cors());
app.use(helmet());
app.use(morgan("dev"));// para mostar en el log en modo dev


app.use(express.json()); //los datos se ... en formato json
app.use(express.urlencoded({ extended:false}));

//trabaja como un switch
app.get("/tasks",taskControlers.getAllTask)
app.post("/tasks",taskControlers.addTask)
app.get("/tasks/:id",taskControlers.getTask)
app.put("/tasks/:id",taskControlers.editTask)
app.put("/tasks/completed/:id",taskControlers.completedTask)
app.put("/tasks/uncompleted/:id",taskControlers.uncompletedTask)
app.delete("/tasks/:id",taskControlers.deleteTask)
//por eso los errores se definen al ultimo
app.use(error.error404)

//

app.listen(port,()=>{
    console.log(`Runnig API on port http://localhost:${port}/tasks`)
});

