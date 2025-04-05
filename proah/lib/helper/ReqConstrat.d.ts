import { ReqOptions, Config, Method, Path } from '../types.js';
import ReqHandler from './ReqHandler.js';

declare class ReqConstract extends ReqHandler {
    protected combineOptions(reqOtions?: ReqOptions, config?: Config, method?: Method): any;
    protected genURL(path: Path, config?: Config & ReqOptions): string;
    protected requestProvider(path: Path, method?: Method, reqOtions?: ReqOptions, config?: Config): Promise<Response> | Promise<{
        [x: string]: any;
        status: number;
        statusText: string;
        url: string;
        error: any;
    }>;
}

export { ReqConstract as default };
