import { app } from "https://denopkg.com/syumai/dinatra/mod.ts";
import {routes} from './api/index.ts'

app(...routes);