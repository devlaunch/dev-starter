/*
 * Copyright 2018 the original author or authors.Licensed under the Apache
 * License, Version 2.0 http://www.apache.org/licenses/LICENSE-2.0
 */
package io.github.devlaunch.demoapp.config;

/** Application constants. */
public final class Constants {

  // Regex for acceptable logins
  public static final String LOGIN_REGEX = "^[_.@A-Za-z0-9-]*$";

  public static final String SYSTEM_ACCOUNT = "system";
  public static final String ANONYMOUS_USER = "anonymoususer";
  public static final String DEFAULT_LANGUAGE = "en";

  private Constants() {}
}
