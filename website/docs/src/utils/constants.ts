export const installationDocs = {
  tsconfig: `{
    "files": [],
    "references": [
        {
        "path": "./tsconfig.app.json"
        },
        {
        "path": "./tsconfig.node.json"
        }
    ],
    "compilerOptions": {
        "baseUrl": ".",
        "paths": {
        "@/*": ["./src/*"]
        }
    }
}`,
  tsconfigApp: `{
    "compilerOptions": {
        // ...
        "baseUrl": ".",
        "paths": {
        "@/*": [
            "./src/*"
        ]
        }
        // ...
    }
}`,
  vite: `
import path from "path"
import tailwindcss from "@tailwindcss/vite"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

// https://vite.dev/config/
export default defineConfig({
    plugins: [react(), tailwindcss()],
    resolve: {
        alias: {
        "@": path.resolve(__dirname, "./src"),
        },
    },
})`,

  addComponent: `
import { Button } from "@/components/ui/button"

function App() {
    return (
        <div className="flex flex-col items-center justify-center min-h-svh">
            <Button>Click me</Button>
        </div>
    )
}

export default App
`,
};
