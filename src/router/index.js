import { TestRouter } from "../components";

const listRoutes = [["/test", TestRouter]];

export const routes = (app) => {
  listRoutes.forEach(([path, controller]) => {
    app.use(path, controller);
  });
};
