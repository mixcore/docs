
```mermaid
sequenceDiagram
    mix.portal.*->>+mix.lib.ts: Request
    mix.lib.ts->>+mix.heart.ts: Request
    mix.heart.ts->>+mix.core: Request
    mix.core->>+mix.heart: Request
    
    mix.heart-->>-mix.core: Response
    mix.core-->>-mix.heart.ts: Response
    mix.heart.ts-->>-mix.lib.ts: Response
    mix.lib.ts-->>-mix.portal.*: Response
    
```