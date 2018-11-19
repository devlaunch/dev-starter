/*
 * Copyright 2018 the original author or authors.Licensed under the Apache
 * License, Version 2.0 http://www.apache.org/licenses/LICENSE-2.0
 */
package io.github.devlaunch.demoapp.web.rest.errors;

public class EmailAlreadyUsedException extends BadRequestAlertException {

  private static final long serialVersionUID = 1L;

  public EmailAlreadyUsedException() {
    super(
        ErrorConstants.EMAIL_ALREADY_USED_TYPE,
        "Email is already in use!",
        "userManagement",
        "emailexists");
  }
}
