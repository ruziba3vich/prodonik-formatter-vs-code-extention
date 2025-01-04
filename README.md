# Prodonik Formatter VS Code Extension

This VS Code extension is designed specifically for **Yandex developers** who work with the `arc` tool and need to format modified files using the `ya tool tt format` command. This extension automates the process of checking for modified files, running the formatter, and making the process more streamlined for developers.

---

## Features

- **Automates Formatting**: Automatically checks for modified files using `arc status` and runs the `ya tool tt format` command on them.
- **Global Binary Installation**: Installs the `prodonik_formatter` binary globally so you can easily format your code from the terminal.
- **Seamless Integration**: Integrates smoothly into your development workflow, reducing the need to manually run formatting commands.

---

## Installation

1. **Install the Extension**:
   - Install the `Prodonik Formatter` VS Code extension directly from the [Visual Studio Code marketplace](#link).
   
2. **Automatic Binary Installation**:
   - During the installation of the extension, the `prodonik_formatter` binary will be moved to `/usr/local/bin/` to make it globally available. You won’t need to worry about manually installing the binary.
   
3. **Permissions**:
   - The extension ensures that the `prodonik_formatter` binary has the correct execution permissions automatically. No manual setup is required.

---

## Usage

Once installed, you can run the following command in your terminal:

```bash
prodonik_formatter
