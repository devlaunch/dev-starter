/*
 * Copyright 2018 the original author or authors.Licensed under the Apache
 * License, Version 2.0 http://www.apache.org/licenses/LICENSE-2.0
 */
package io.github.devlaunch.demoapp.client;

import org.springframework.stereotype.Component;

import feign.RequestInterceptor;
import feign.RequestTemplate;
import io.github.devlaunch.demoapp.security.SecurityUtils;

@Component
public class UserFeignClientInterceptor implements RequestInterceptor {
  private static final String AUTHORIZATION_HEADER = "Authorization";
  private static final String BEARER = "Bearer";

  @Override
  public void apply(RequestTemplate template) {
    SecurityUtils.getCurrentUserJWT()
        .ifPresent(s -> template.header(AUTHORIZATION_HEADER, String.format("%s %s", BEARER, s)));
  }
}
