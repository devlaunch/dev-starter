/*
 * Copyright 2018 the original author or authors.Licensed under the Apache
 * License, Version 2.0 http://www.apache.org/licenses/LICENSE-2.0
 */
package io.github.devlaunch.demoapp.security;

import java.util.Optional;

import org.springframework.data.domain.AuditorAware;
import org.springframework.stereotype.Component;

import io.github.devlaunch.demoapp.config.Constants;

/** Implementation of AuditorAware based on Spring Security. */
@Component
public class SpringSecurityAuditorAware implements AuditorAware<String> {

  @Override
  public Optional<String> getCurrentAuditor() {
    return Optional.of(SecurityUtils.getCurrentUserLogin().orElse(Constants.SYSTEM_ACCOUNT));
  }
}
