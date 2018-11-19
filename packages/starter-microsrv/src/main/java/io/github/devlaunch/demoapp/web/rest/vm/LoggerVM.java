/*
 * Copyright 2018 the original author or authors.Licensed under the Apache
 * License, Version 2.0 http://www.apache.org/licenses/LICENSE-2.0
 */
package io.github.devlaunch.demoapp.web.rest.vm;

import ch.qos.logback.classic.Logger;

/** View Model object for storing a Logback logger. */
public class LoggerVM {

  private String name;

  private String level;

  public LoggerVM(Logger logger) {
    this.name = logger.getName();
    this.level = logger.getEffectiveLevel().toString();
  }

  public LoggerVM() {
    // Empty public constructor used by Jackson.
  }

  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public String getLevel() {
    return level;
  }

  public void setLevel(String level) {
    this.level = level;
  }

  @Override
  public String toString() {
    return "LoggerVM{" + "name='" + name + '\'' + ", level='" + level + '\'' + '}';
  }
}
