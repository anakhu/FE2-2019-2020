export class EventEmitter {
  constructor() {
    this._events = {
    };
  }

  on(event, listener) {
    (this._events[event] || (this._events[event] = [])).push(listener);
    console.log(this._events);
  }

  emit(event, arg) {
    (this._events[event] || []).forEach(listener => listener(arg));
  }
}

