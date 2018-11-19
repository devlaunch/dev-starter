/*
 * Copyright 2018 the original author or authors.Licensed under the Apache
 * License, Version 2.0 http://www.apache.org/licenses/LICENSE-2.0
 */
package io.github.devlaunch.demoapp.config;

import java.util.concurrent.Executor;
import java.util.concurrent.Executors;

import org.springframework.aop.interceptor.AsyncUncaughtExceptionHandler;
import org.springframework.aop.interceptor.SimpleAsyncUncaughtExceptionHandler;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.scheduling.annotation.*;
import org.springframework.scheduling.annotation.SchedulingConfigurer;
import org.springframework.scheduling.concurrent.ThreadPoolTaskExecutor;
import org.springframework.scheduling.config.ScheduledTaskRegistrar;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import io.github.jhipster.async.ExceptionHandlingAsyncTaskExecutor;
import io.github.jhipster.config.JHipsterProperties;

@Configuration
@EnableAsync
@EnableScheduling
public class AsyncConfiguration implements AsyncConfigurer, SchedulingConfigurer {

  private final Logger log = LoggerFactory.getLogger(AsyncConfiguration.class);

  private final JHipsterProperties jHipsterProperties;

  public AsyncConfiguration(JHipsterProperties jHipsterProperties) {
    this.jHipsterProperties = jHipsterProperties;
  }

  @Override
  @Bean(name = "taskExecutor")
  public Executor getAsyncExecutor() {
    log.debug("Creating Async Task Executor");
    ThreadPoolTaskExecutor executor = new ThreadPoolTaskExecutor();
    executor.setCorePoolSize(jHipsterProperties.getAsync().getCorePoolSize());
    executor.setMaxPoolSize(jHipsterProperties.getAsync().getMaxPoolSize());
    executor.setQueueCapacity(jHipsterProperties.getAsync().getQueueCapacity());
    executor.setThreadNamePrefix("demoapp-Executor-");
    return new ExceptionHandlingAsyncTaskExecutor(executor);
  }

  @Override
  public AsyncUncaughtExceptionHandler getAsyncUncaughtExceptionHandler() {
    return new SimpleAsyncUncaughtExceptionHandler();
  }

  @Override
  public void configureTasks(ScheduledTaskRegistrar taskRegistrar) {
    taskRegistrar.setScheduler(scheduledTaskExecutor());
  }

  @Bean
  public Executor scheduledTaskExecutor() {
    return Executors.newScheduledThreadPool(jHipsterProperties.getAsync().getCorePoolSize());
  }
}
