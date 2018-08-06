function TodoService() {
	// A local copy of your todos
	var todoList = []
	var baseUrl = 'https://bcw-sandbox.herokuapp.com/api/steveo/todos'

	function logError(err) {
		console.error('UMM SOMETHING BROKE: ', err)
		//CAN YOU NOTIFY THE USER IF SOMETHING BREAKS? 
		//do this without breaking the controller/service responsibilities
	}

	this.getTodos = function (draw) {
		$.get(baseUrl)
			.then(function (res) { 
		    sessionStorage.setItem('todoList', JSON.stringify(res.data))
				return draw(res)
			})
			.fail(logError)
	}

	this.addTodo = function (todo, cb) {
		$.post(baseUrl, todo)
			.then(function(res){
			cb(res)	
			}) 
			.fail(logError)
	}

	this.toggleTodoStatus = function (todoId, cb) {


	var res = sessionStorage.getItem('todoList')
	var data = JSON.parse(res)
	var compID = {}

	for (var i in data){
		var dID = data[i]
		if (dID._id==todoId){
			compID = dID
			}
		}
		compID.completed = !compID.completed
		
		$.ajax({
			method: 'PUT',
			contentType: 'application/json',
			url: baseUrl + '/' + todoId,
			data: JSON.stringify(compID)
		})
			.then(function (res) {
				cb()
				
			})
			.fail(logError)
	 }

	this.removeTodo = function (todoId, cb) {
		
		$.ajax({
			method: 'DELETE',
			url: baseUrl + '/' + todoId,
			contentType: 'application/json'
			}).then(res=>{
				cb()
			}
	
			)
			 .fail(logError)
	}

}  //end
