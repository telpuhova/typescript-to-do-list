var Task = /** @class */ (function () {
    function Task(description, priority) {
        this.description = description;
        this.priority = priority;
        this.done = false;
    }
    return Task;
}());
var tasks = [];
tasks.push(new Task('do the dishes', 'medium'));
console.log(tasks);
