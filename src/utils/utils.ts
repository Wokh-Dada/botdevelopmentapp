
export function format(first: string, middle: string, last: string): string {
  return (
    (first || '') +
    (middle ? ` ${middle}` : '') +
    (last ? ` ${last}` : '')
  );
}


export class StorageAbdullakhBot {
  private static prefix_;
  public static get prefix (): string {
    return this.prefix_;
  }
  public static set prefix (val: string) {
    this.prefix_ = val;
  }
}
