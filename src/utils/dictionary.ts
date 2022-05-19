export default class Dictionary<X> {
  keys: string[] = [];

  values: X[] = [];

  set(key: string, val: X) {
    if (this.keys.includes(key)) {
      const ind = this.keys.indexOf(key);
      this.values[ind] = val;
    } else {
      this.keys.push(key);
      this.values.push(val);
    }
  }

  delete(key: string) {
    if (this.keys.includes(key)) {
      const ind = this.keys.indexOf(key);
      this.keys.splice(ind, 1);
      this.values.splice(ind, 1);
    }
  }
}
