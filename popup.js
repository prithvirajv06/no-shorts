let autoRemove = false;

// Initialize the toggle based on saved settings
document.addEventListener('DOMContentLoaded', () => {

});

// Set up remove button
document.getElementById('removeButton').addEventListener('click', async () => {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: removeYtdElements
  });
});

function removeYtdElements() {
  const elements = document.querySelectorAll('ytd-rich-shelf-renderer');
  let count = 0;
  
  elements.forEach(element => {
    element.remove();
    count++;
  });
  
  // Create a notification div
  const notification = document.createElement('div');
  notification.textContent = `Removed ${count} element(s) with tag ytd-rich-shelf-renderer`;
  notification.style.position = 'fixed';
  notification.style.top = '10px';
  notification.style.right = '10px';
  notification.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
  notification.style.color = 'white';
  notification.style.padding = '10px';
  notification.style.borderRadius = '5px';
  notification.style.zIndex = '9999';
  
  document.body.appendChild(notification);
  
  // Remove the notification after 3 seconds
  setTimeout(() => {
    notification.remove();
  }, 3000);
}