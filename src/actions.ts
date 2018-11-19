export class SetValueAction {
  static readonly type = '[ngxs-forms] Set value';
  constructor(public value: any) {}
}
