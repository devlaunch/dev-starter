/*
 * Copyright 2018 the original author or authors.Licensed under the Apache
 * License, Version 2.0 http://www.apache.org/licenses/LICENSE-2.0
 */
package io.github.devlaunch.demoapp.web.rest.errors;

import org.zalando.problem.AbstractThrowableProblem;
import org.zalando.problem.Status;

/** Simple exception with a message, that returns an Internal Server Error code. */
public class InternalServerErrorException extends AbstractThrowableProblem {

  private static final long serialVersionUID = 1L;

  public InternalServerErrorException(String message) {
    super(ErrorConstants.DEFAULT_TYPE, message, Status.INTERNAL_SERVER_ERROR);
  }
}
