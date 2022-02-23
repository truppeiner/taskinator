
var formEl = document.querySelector("#task-form");
var tasksToDoEl = document.querySelector("#tasks-to-do");


//function to dynamically create task items (task-handler)

var taskFormHandler = function (event) {
    event.preventDefault();
        var taskNameInput = document.querySelector("input[name='task-name']").value;
        var taskTypeInput = document.querySelector("select[name='task-type']").value;

        //CHECK IF INPUT VALUES ARE EMPTY STRINGS
        if (!taskNameInput || !taskTypeInput) {
            alert("You need to fill out the task form!");
            return false;
        }
        formEl.reset();
        //PACKAGE DATA AS OBJECT
        var taskDataObj = {
            name: taskNameInput,
            type: taskTypeInput
        };

        //SEND IT AS AN ARGUMENT TO CREATETASKEL
        createTaskEl(taskDataObj);
};

var createTaskEl = function(taskDataObj) {
    //CREATE LIST ITEM
    var listItemEl = document.createElement("li");
     listItemEl.className = "task-item";
    
    //CREATE DIV TO HOLD TASK INFO AND ADD TO LIST ITEM
    var taskInfoEl = document.createElement("div");
    
    // GIVE IT A CLASS NAME
    taskInfoEl.className = "task-info";
    
    // ADD HTML CONTENT TO DIV
    taskInfoEl.innerHTML = "<h3 class='task-name'>" + taskDataObj.name + "</h3><span class='task-type'>" + taskDataObj.type + "</span>";
    listItemEl.appendChild(taskInfoEl);
    
    // ADD ENTIRE LIST ITEM TO LIST
    tasksToDoEl.appendChild(listItemEl);
};

formEl.addEventListener("submit", taskFormHandler);