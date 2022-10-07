import { createHistoryRouter } from "react-router-yesterday";

const { history, HistoryRouter } = createHistoryRouter();

export type { HistoryRouterProps } from "react-router-yesterday";
export { history };
export default HistoryRouter;
