export class NodeSL<T> {
  constructor(public data: T, public nextNode: NodeSL<T> | null) {}
}
