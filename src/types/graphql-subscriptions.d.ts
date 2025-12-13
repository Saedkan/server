declare module 'graphql-subscriptions' {
  export class PubSub {
    publish(triggerName: string, payload: any): void;
    asyncIterator<T = any>(triggers: string | string[]): AsyncIterator<T>;
  }
}
