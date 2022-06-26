export * from '../dist/node/index'
export * from '../dist/client/index'
declare global {
  interface Window {
    adsbygoogle: object[]
  }
}
