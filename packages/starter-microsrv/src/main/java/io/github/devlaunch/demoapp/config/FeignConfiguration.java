/*
 * Copyright 2018 the original author or authors.Licensed under the Apache
 * License, Version 2.0 http://www.apache.org/licenses/LICENSE-2.0
 */
package io.github.devlaunch.demoapp.config;

import org.springframework.cloud.openfeign.EnableFeignClients;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
@EnableFeignClients(basePackages = "io.github.devlaunch.demoapp")
public class FeignConfiguration {

  /** Set the Feign specific log level to log client REST requests */
  @Bean
  feign.Logger.Level feignLoggerLevel() {
    return feign.Logger.Level.BASIC;
  }
}
