// middleware.js

import cors from "cors";
import bodyParser from "body-parser";

export const corsMiddleware = cors();
export const jsonParser = bodyParser.json();
