export class Task {
  static #openTasks = 0;
  static #completedTasks = 0;

  constructor(text, id = Date.now(), done = false, completeTime = null) {
    this.text = text;
    this.id = id;
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
