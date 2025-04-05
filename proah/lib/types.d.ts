type Path = string;
type Credentials = "include" | "same-origin" | "omit";
type Mode = "cors" | "no-cors" | "same-origin";
type Cache = "default" | "no-cache" | "reload" | "force-cache" | "only-if-cached" | "no-store";
type Method = "GET" | "POST" | "PUT" | "DELETE" | "PATCH" | "HEAD" | "OPTIONS" | "TRACE" | "TRACK" | "CONNECT";
interface Config {
    baseURL?: string;
    credentials?: Credentials;
    mode?: Mode;
    cache?: Cache;
    methods?: Method[];
    resultProps?: string;
    timeout?: number;
    headers?: object;
}
interface ReqOptions extends RequestInit {
    query?: object;
    method?: Method;
    timeout?: number;
    resultProps?: string;
    baseURL?: string;
}
interface ResOptions extends ResponseInit {
    url: string;
    data?: any;
    error?: any;
}

export type { Config, Credentials, Method, Mode, Path, ReqOptions, ResOptions };
