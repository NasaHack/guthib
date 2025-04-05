import { Config, Method, ReqOptions } from '../types.js';

declare const configValidator: (config?: Config) => void;
declare const requestProviderValidator: (method?: Method, options?: ReqOptions & Config) => void;

export { configValidator, requestProviderValidator };
