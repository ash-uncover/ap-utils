/* tslint:disable:no-bitwise triple-equals */

// UUID generator
// courtesy of https://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript (answer #2)
export class UUID {
  static next() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
      const r = Math.random() * 16 | 0
      const v = c == 'x' ? r : (r & 0x3 | 0x8)
      return v.toString(16)
    })
  }
}
