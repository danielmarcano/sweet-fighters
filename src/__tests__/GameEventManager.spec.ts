import { GameEventManager } from "@/lib/GameEventManager.class";

describe("GameEventManager", () => {
  it("Adds a new observer and returns it from addObserver", () => {
    const gameEventManager = new GameEventManager();

    const observer = jest.fn();

    const returnedObserver = gameEventManager.addObserver(observer);

    expect(observer).toBe(returnedObserver);
  });

  it("Sends event to all observers through notifyObserver", () => {
    const gameEventManager = new GameEventManager();

    const observer1 = jest.fn((data) => `Observer1: ${data}`);
    gameEventManager.addObserver(observer1);

    const observer2 = jest.fn((data) => `Observer2: ${data}`);
    gameEventManager.addObserver(observer2);

    expect(observer1).toHaveBeenCalledTimes(0);
    expect(observer2).toHaveBeenCalledTimes(0);

    gameEventManager.notifyObservers("data");

    expect(observer1).toHaveBeenCalledTimes(1);
    expect(observer1).toHaveReturnedWith("Observer1: data");

    expect(observer2).toHaveBeenCalledTimes(1);
    expect(observer2).toHaveReturnedWith("Observer2: data");
  });

  it("Removes observers with removeObserver", () => {
    const gameEventManager = new GameEventManager();

    const observer = jest.fn();

    gameEventManager.addObserver(observer);

    gameEventManager.removeObserver(observer);

    gameEventManager.notifyObservers("data");

    expect(observer).toHaveBeenCalledTimes(0);
  });
});
