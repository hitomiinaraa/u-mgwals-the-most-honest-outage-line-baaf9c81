import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "All services are offline. I can't see the cause yet because the monitoring is down too. I'll update this page as soon as I know more.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
