export default interface IRoute {
    key: string;
    name: string;
    path: string;
    component: () => JSX.Element;
}
