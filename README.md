# YouTube Shelf Remover

A Chrome extension that automatically removes "ytd-rich-shelf-renderer" elements from YouTube pages for a cleaner browsing experience.

## Features

- **Auto Removal**: Removes targeted elements when YouTube pages load
- **Continuous Monitoring**: Detects and removes dynamically loaded elements
- **5-Seconds Checks**: Performs regular scans every 5 seconds to catch any missed elements
- **Manual Control**: Includes a button to trigger removal on demand
- **Statistics**: Tracks the number of elements removed and last check time

## Installation

1. Download or clone this repository
2. Open Chrome and navigate to `chrome://extensions/`
3. Enable "Developer mode" in the top-right corner
4. Click "Load unpacked" and select the extension folder
5. The extension icon should appear in your toolbar

## Usage

- The extension works automatically on YouTube pages
- Click the extension icon to see statistics and manually trigger removal
- No configuration needed - just install and browse YouTube normally

## Files Included

- `manifest.json`: Extension configuration
- `popup.html` & `popup.js`: User interface
- `content.js`: Core functionality for element removal
- `icons/`: Extension icons in various sizes (16px, 48px, 128px)

## Requirements

- Google Chrome browser
- No additional dependencies needed