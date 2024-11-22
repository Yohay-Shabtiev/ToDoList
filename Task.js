export class Task {
  static #openTasks = 0;
  static #completedTasks = 0;

  constructor(id, text, done = false, completeTime = null) {
    this.id = id;
    this.text = text;
  }

  static getOpenTasks() {
    return Task.#openTasks;
  }

  static getcompletedTasks() {
    return Task.#completedTasks;
  }

  markAsComplete() {
    this.done = true;
    this.completeTime = Date.now();
  }
}
