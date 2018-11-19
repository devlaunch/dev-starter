/*
 * Copyright 2018 the original author or authors.Licensed under the Apache
 * License, Version 2.0 http://www.apache.org/licenses/LICENSE-2.0
 */
package io.github.devlaunch.demoapp.web.rest;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import org.slf4j.LoggerFactory;

import com.codahale.metrics.annotation.Timed;

import ch.qos.logback.classic.Level;
import ch.qos.logback.classic.LoggerContext;
import io.github.devlaunch.demoapp.web.rest.vm.LoggerVM;

/** Controller for view and managing Log Level at runtime. */
@RestController
@RequestMapping("/management")
public class LogsResource {

  @GetMapping("/logs")
  @Timed
  public List<LoggerVM> getList() {
    LoggerContext context = (LoggerContext) LoggerFactory.getILoggerFactory();
    return context.getLoggerList().stream().map(LoggerVM::new).collect(Collectors.toList());
  }

  @PutMapping("/logs")
  @ResponseStatus(HttpStatus.NO_CONTENT)
  @Timed
  public void changeLevel(@RequestBody LoggerVM jsonLogger) {
    LoggerContext context = (LoggerContext) LoggerFactory.getILoggerFactory();
    context.getLogger(jsonLogger.getName()).setLevel(Level.valueOf(jsonLogger.getLevel()));
  }
}
