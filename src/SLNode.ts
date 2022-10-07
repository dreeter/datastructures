export class SLNode<T> {
  constructor(public data: T, public nextNode: SLNode<T> | null = null) {}
}
