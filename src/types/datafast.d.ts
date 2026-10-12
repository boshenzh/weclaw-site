export {};

declare global {
  interface Window {
    datafast?: (goal: string, params?: Record<string, string | number>) => void;
  }
}
