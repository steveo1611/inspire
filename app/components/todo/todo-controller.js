function TodoController() {

	var todoService = new TodoService()

	// Use this getTodos function as your callback for all other edits
	function getTodos(){
		//FYI DONT EDIT ME :)
		todoService.getTodos(draw)

	}

	function draw(todos) {
 	    var taskSum = 0
		var template = ``
		//DONT FORGET TO LOOP
		var toProp = todos.data
		
		for(var i = 0; i < toProp.length; i++){
		   var todo = toProp[i]
		var flag =""
		var strike = ""	
		   if (todo.completed == true){
				flag = "checked"
				strike = "strike"
			}
			else{
				flag = "unchecked"
				strike = ""
				taskSum += 1
			}
		   template += `
		   <div class="task-box">
			   <input type="checkbox" id="${todo._id}" onclick="app.controllers.todoController.toggleTodoStatus('${todo._id}')"${flag}>  
		   <p id="${strike}">${todo.description} </p>
		   <button class="btn btn-sm" onclick="app.controllers.todoController.removeTodo('${todo._id}')">Delete</button>
		  </div>
		   `

		}
		
		
		var cTemplate = `<h3> ${taskSum} tasks left todo </h3>`
		document.getElementById('todoListH').innerHTML = template
		document.getElementById('todoCount').innerHTML = cTemplate
	}

	this.addTodoFromForm = function (e) {
		e.preventDefault() 
		var form = e.target
		var todo = {
	
			description:form.task.value
		}


		todoService.addTodo(todo, getTodos)
		form.reset()
		                         
	}

	this.toggleTodoStatus = function (todoId) {
		// asks the service to edit the todo status
		todoService.toggleTodoStatus(todoId, getTodos)
		// YEP THATS IT FOR ME
	}

	this.removeTodo = function (todoId) {
		todoService.removeTodo(todoId, getTodos)


	}
getTodos()
	



} //Ending
