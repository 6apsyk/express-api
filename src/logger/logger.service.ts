import { Logger } from 'tslog'

export class LoggerService {
    public logger: Logger

    constructor(){
        this.logger = new Logger({
            displayFilePath: 'hidden',
            displayInstanceName: false,
            displayFunctionName: false,
            displayLoggerName: false
        })
    }

    log(...args: unknown[]): void {
        this.logger.info(...args)
    }
    error(...args: unknown[]): void {
        this.logger.error(...args)
    }
    warn(...args: unknown[]): void {
        this.logger.warn(...args)
    }
}