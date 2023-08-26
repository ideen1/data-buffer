class DataBuffer<T> {
  data: T[];
  bufferLength: number;
  constructor(bufferLength?: number) {
    this.data = [];
    this.bufferLength = bufferLength || 10;
  }

  add(d: T) {
    this.data.push(d);
    if (this.data.length > this.bufferLength) {
      this.data.shift();
    }
  }

  get(): T[] {
    return this.data;
  }
}
