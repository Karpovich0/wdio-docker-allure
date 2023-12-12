# WebdriverIO Allure Docker

[![GitHub license](https://img.shields.io/github/license/Karpovich0/wdio-docker-allure.svg)](https://github.com/Karpovich0/wdio-docker-allure/LICENSE)

## Overview

This repository contains end-to-end Automated Quality Assurance (AQA) tests for the Telnyx website using Webdriver.io. The test results are displayed using the Allure report, and Docker is utilized for cross-platform compatibility.

## Table of Contents

-   [Installation](#installation)
-   [Configuration](#configuration)
-   [Running Tests](#running-tests)
-   [Allure Reporting](#allure-reporting)
-   [Docker Integration](#docker-integration)
-   [Contributing](#contributing)
-   [License](#license)
-   [Author](#author)

## Installation

```bash
npm install
```

This command installs the necessary dependencies specified in the `package.json` file, including Webdriver.io and other related packages.

## Configuration

WebdriverIO configurations are stored in the `wdio.conf.js` file. Make sure to customize this file according to your testing environment and requirements.

## Running Tests

### Run all tests

```bash
npm run wdio
```

### Run tests in Chrome

```bash
npm run chrome
```

### Run tests in Firefox

```bash
npm run firefox
```

You can add more scripts in the `package.json` file for different browsers or test configurations.

## Allure Reporting

### Generate and open Allure report

```bash
npm run allure-report
```

This script generates the Allure report based on the results in the `allure-results` directory and opens it in your default browser.

### Generate Allure report (GitHub Action)

```bash
npm run allure-report-github
```

Use this script if you're integrating the Allure report into your GitHub Actions workflow.

## Docker Integration

### Start Docker services

```bash
npm run docker-compose
```

This script launches Docker services defined in `docker/docker-compose.yml`. Adjust the Docker configuration as needed.

### Run tests with Docker

```bash
npm run wdio-docker
```

Execute tests using Docker containers. Scripts for specific browsers are also available.

## Contributing

Feel free to contribute by opening issues or submitting pull requests. Follow the [Contributing Guidelines](CONTRIBUTING.md) for details.

## License

This project is licensed under the [MIT License](LICENSE).

## Author

-   [Oleksandr Karpovych](https://github.com/Karpovich0)
