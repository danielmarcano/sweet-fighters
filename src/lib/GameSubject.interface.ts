export interface GameSubject<T> {
  addObserver(observer: (data: T) => void): void;

  removeObserver(observer: (data: T) => void): void;

  notifyObservers(data: T): void;
}
