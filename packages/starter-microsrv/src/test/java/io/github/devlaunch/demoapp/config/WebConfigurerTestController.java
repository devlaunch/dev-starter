/*
 * Copyright 2018 the original author or authors.Licensed under the Apache
 * License, Version 2.0 http://www.apache.org/licenses/LICENSE-2.0
 */
package io.github.devlaunch.demoapp.config;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class WebConfigurerTestController {

  @GetMapping("/api/test-cors")
  public void testCorsOnApiPath() {}

  @GetMapping("/test/test-cors")
  public void testCorsOnOtherPath() {}
}
