import { FullConfig } from "@playwright/test";

export default async function(config: FullConfig) {
    console.log('This is global set-up file. It will be executed only once: '+config.globalSetup);
    
}