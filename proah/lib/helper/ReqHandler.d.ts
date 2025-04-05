import { ReqOptions, Config, Method } from '../types.js';

declare class ReqHandler {
    protected handleTimeOut: (reqOptions: ReqOptions & Config) => AbortController;
    protected normalizedReqOptions: (reqOptions: ReqOptions & Config) => {
        signal: AbortSignal;
        query?: object;
        method?: Method;
        timeout?: number;
        resultProps?: string;
        baseURL?: string;
        body?: BodyInit | null;
        cache?: "default" | "no-cache" | "reload" | "force-cache" | "only-if-cached" | "no-store" | undefined;
        credentials?: "include" | "same-origin" | "omit" | undefined;
        headers?: (HeadersInit & object) | undefined;
        integrity?: string;
        keepalive?: boolean;
        mode?: "same-origin" | "cors" | "no-cors" | undefined;
        priority?: RequestPriority;
        redirect?: RequestRedirect;
        referrer?: string;
        referrerPolicy?: ReferrerPolicy;
        window?: null;
        methods?: Method[];
    };
    protected parseData: (response: Response) => Promise<any>;
    protected prettyResponse: (response: Response, reqOptions: ReqOptions & Config) => Promise<{
        [x: string]: any;
        status: number;
        statusText: string;
        url: string;
        error: any;
    }>;
    protected GET_handler(url: string, reqOptions: ReqOptions & Config): Promise<{
        [x: string]: any;
        status: number;
        statusText: string;
        url: string;
        error: any;
    }>;
    protected POST_handler(url: string, reqOptions: ReqOptions & Config): Promise<{
        [x: string]: any;
        status: number;
        statusText: string;
        url: string;
        error: any;
    }>;
    protected PUT_handler(url: string, reqOptions: ReqOptions & Config): Promise<{
        [x: string]: any;
        status: number;
        statusText: string;
        url: string;
        error: any;
    }>;
    protected PATCH_handler(url: string, reqOptions: ReqOptions & Config): Promise<{
        [x: string]: any;
        status: number;
        statusText: string;
        url: string;
        error: any;
    }>;
    protected DELETE_handler(url: string, reqOptions: ReqOptions & Config): Promise<{
        [x: string]: any;
        status: number;
        statusText: string;
        url: string;
        error: any;
    }>;
    protected EXTRA_handler(url: string, reqOptions: ReqOptions & Config): Promise<Response>;
}

export { ReqHandler as default };
