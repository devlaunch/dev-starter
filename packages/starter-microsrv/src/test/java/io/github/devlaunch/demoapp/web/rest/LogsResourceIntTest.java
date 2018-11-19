/*
 * Copyright 2018 the original author or authors.Licensed under the Apache
 * License, Version 2.0 http://www.apache.org/licenses/LICENSE-2.0
 */
package io.github.devlaunch.demoapp.web.rest;

import static org.assertj.core.api.Assertions.assertThat;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.put;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import org.slf4j.LoggerFactory;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;

import ch.qos.logback.classic.AsyncAppender;
import ch.qos.logback.classic.LoggerContext;
import io.github.devlaunch.demoapp.DemoappApp;
import io.github.devlaunch.demoapp.web.rest.vm.LoggerVM;

/**
 * Test class for the LogsResource REST controller.
 *
 * @see LogsResource
 */
@RunWith(SpringRunner.class)
@SpringBootTest(classes = DemoappApp.class)
public class LogsResourceIntTest {

  private MockMvc restLogsMockMvc;

  @Before
  public void setup() {
    LogsResource logsResource = new LogsResource();
    this.restLogsMockMvc = MockMvcBuilders.standaloneSetup(logsResource).build();
  }

  @Test
  public void getAllLogs() throws Exception {
    restLogsMockMvc
        .perform(get("/management/logs"))
        .andExpect(status().isOk())
        .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE));
  }

  @Test
  public void changeLogs() throws Exception {
    LoggerVM logger = new LoggerVM();
    logger.setLevel("INFO");
    logger.setName("ROOT");

    restLogsMockMvc
        .perform(
            put("/management/logs")
                .contentType(TestUtil.APPLICATION_JSON_UTF8)
                .content(TestUtil.convertObjectToJsonBytes(logger)))
        .andExpect(status().isNoContent());
  }

  @Test
  public void testLogstashAppender() {
    LoggerContext context = (LoggerContext) LoggerFactory.getILoggerFactory();
    assertThat(context.getLogger("ROOT").getAppender("ASYNC_LOGSTASH"))
        .isInstanceOf(AsyncAppender.class);
  }
}
