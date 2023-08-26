import { useState } from "react";

<<<<<<< HEAD
export default class DataBuffer<T> {
=======
class DataBuffer<T> {
>>>>>>> 6f7b7f21c64f1c497a7ed5e87c00cc6b2848e7a1
  data: T[];
  setData: React.Dispatch<React.SetStateAction<T[]>>;
  bufferLength: number;
  constructor(bufferLength?: number) {
    [this.data, this.setData] = useState<T[]>([]);
    this.bufferLength = bufferLength || 10;
  }

  add(d: T) {
    this.setData([...this.data, d]);
    if (this.data.length > this.bufferLength) {
      this.setData(this.data.slice(1));
    }
  }

  get(): T[] {
    return this.data;
  }
}
