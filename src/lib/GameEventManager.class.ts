import type { GameSubject } from "@/lib/GameSubject.interface";

export class GameEventManager<T> implements GameSubject<T> {
  observers: Set<(data: T) => void>;

  constructor() {
    this.observers = new Set();
  }

  addObserver(observer: (data: T) => void) {
    this.observers.add(observer);

    return observer;
  }

  removeObserver(observer: (data: T) => void) {
    this.observers.delete(observer);
  }

  public notifyObservers(data: T): void {
    for (const observer of this.observers) {
      observer(data);
    }
  }
}
