export class Task {
  static #openTasks = 0;
  static #completedTasks = 0;

  constructor(text, info, done = false, completeTime = null) {
    this.text = text;
    this.info = info;
    this.id = Date.now();
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
