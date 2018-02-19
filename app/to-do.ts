class Task {
  done: boolean;

  constructor(public description: string, public priority: string) {
    this.done = false;
  }
}

var tasks: Task[] = [];
tasks.push(new Task('do the dishes', 'medium'));
console.log(tasks);
