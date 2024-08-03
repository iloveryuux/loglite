import chalk from 'chalk'

import { BaseConfig, DefaultConfig } from './types.js'

class Logger {
  private config: BaseConfig

  constructor(config: BaseConfig = DefaultConfig) {
    this.config = { ...DefaultConfig, ...config }
  }

  private format(message: string, color): string {
    if (this.config.colors) {
      message = color(message)
    }
    return message
  }

  log(message: string): void {
    console.log(this.format(message, chalk.green))
  }

  error(message: string): void {
    console.error(this.format(message, chalk.red))
  }

  info(message: string): void {
    console.info(this.format(message, chalk.blue))
  }

  warn(message: string): void {
    console.warn(this.format(message, chalk.yellow))
  }

  debug(message: string): void {
    console.debug(this.format(message, chalk.gray))
  }
}

export default Logger
