// My own implementation of a scheduled 'cron' job, because I like pain.

class Scheduler<T> {
  private tasks: Map<T, Task>;
}

class Task {
  private task: Function;
}
