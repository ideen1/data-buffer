import { useState } from "react";

class DataBuffer<T> {
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
