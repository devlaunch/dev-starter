/*
 * Copyright 2018 the original author or authors.Licensed under the Apache
 * License, Version 2.0 http://www.apache.org/licenses/LICENSE-2.0
 */
package io.github.devlaunch.demoapp.cucumber.stepdefs;

import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.web.WebAppConfiguration;
import org.springframework.test.web.servlet.ResultActions;

import io.github.devlaunch.demoapp.DemoappApp;

@WebAppConfiguration
@SpringBootTest
@ContextConfiguration(classes = DemoappApp.class)
public abstract class StepDefs {

  protected ResultActions actions;
}
