import ReqConstract from './helper/ReqConstrat.js';
import { Config, Path, ReqOptions, ResOptions } from './types.js';
import './helper/ReqHandler.js';

declare class Proah extends ReqConstract {
    protected config?: Config | undefined;
    constructor(config?: Config | undefined);
    get(path: Path, reqOtions?: ReqOptions): Promise<ResOptions>;
    post(path: Path, reqOtions?: ReqOptions): Promise<ResOptions>;
    put(path: Path, reqOtions?: ReqOptions): Promise<ResOptions>;
    patch(path: Path, reqOtions?: ReqOptions): Promise<ResOptions>;
    delete(path: Path, reqOtions?: ReqOptions): Promise<ResOptions>;
    extra(path: Path, reqOtions?: ReqOptions): Promise<Response> | Promise<{
        [x: string]: any;
        status: number;
        statusText: string;
        url: string;
        error: any;
    }>;
}

export { Proah as default };
