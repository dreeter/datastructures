export class DLNode<T> {
  constructor(
    public data: T,
    public nextNode: DLNode<T> | null,
    public prevNode: DLNode<T> | null
  ) {}
}
