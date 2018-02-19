class Task {
  done: boolean = false;

  constructor(public description: string, public priority: string) {}

  markDone() {
    this.done = true;
  }
}

var tasks: Task[] = [];
tasks.push(new Task('do the dishes', 'medium'));
tasks.push(new Task('do laundry', 'high'));
tasks.push(new Task('buy groceries', 'low'));
// console.log(tasks);

tasks[0].markDone();

for (var task of tasks) {
  console.log(task);
}
