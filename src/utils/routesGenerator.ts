import { TRouts, TUserPath } from "../typs/sideBar.typs";

export const routesGenerator = (items: TUserPath[]) => {
  const routes = items.reduce((acc: TRouts[], item) => {
    if (item.path && item.element) {
      acc.push({
        path: item.path,
        element: item.element,
      });
    }
    if (item.children) {
      item.children.forEach((child) => {
        acc.push({
          path: child.path!, // not deyar karon 15.1 er module a 6.35m a ache bistarito (ekhane obossoi child.path asbe)
          element: child.element,
        });
      });
    }
    return acc;
  }, []);
  return routes;
};
