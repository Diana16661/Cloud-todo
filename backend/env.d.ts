declare namespace NodeJS {
  interface ProcessEnv {
    DATABASE_URL: string;
    API_KEY: string;
    PORT?: string; // якщо є необовʼязкові змінні
  }
}
