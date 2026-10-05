import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

function devApi() {
  return {
    name: "dev-api",
    apply: "serve",
    configureServer(server) {
      Object.assign(process.env, loadEnv("development", process.cwd(), "BASEROW_"));
      server.middlewares.use("/api/interest", async (req, res) => {
        const { default: handler } = await server.ssrLoadModule("/api/interest.js");
        let raw = "";
        for await (const chunk of req) raw += chunk;
        req.body = raw ? JSON.parse(raw) : {};
        res.status = (code) => {
          res.statusCode = code;
          return res;
        };
        res.json = (data) => {
          res.setHeader("Content-Type", "application/json");
          res.end(JSON.stringify(data));
        };
        await handler(req, res);
      });
    },
  };
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), devApi()],
});
