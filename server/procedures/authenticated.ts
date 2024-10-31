import { procedure } from "../trpc";
import { withAuth } from "../middleware/with-auth";

const authenticatedProcedure = procedure.use(withAuth);

export default authenticatedProcedure;
