interface IItem {
  name: string;
  items: [string];
}

interface IRequiredObjects {
  socketUrl: string;
  items: IItem[];
}
