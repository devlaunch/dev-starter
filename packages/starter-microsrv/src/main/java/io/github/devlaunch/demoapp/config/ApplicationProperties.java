/*
 * Copyright 2018 the original author or authors.Licensed under the Apache
 * License, Version 2.0 http://www.apache.org/licenses/LICENSE-2.0
 */
package io.github.devlaunch.demoapp.config;

import org.springframework.boot.context.properties.ConfigurationProperties;

/**
 * Properties specific to Demoapp.
 *
 * <p>Properties are configured in the application.yml file. See {@link
 * io.github.jhipster.config.JHipsterProperties} for a good example.
 */
@ConfigurationProperties(prefix = "application", ignoreUnknownFields = false)
public class ApplicationProperties {}
