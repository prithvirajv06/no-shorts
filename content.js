(function () {
  // This will run when the content script is injected

  // If auto-remove is enabled, remove elements immediately
  removeElements();

  // Also set up a mutation observer to catch dynamically loaded elements
  setInterval(() => {
    removeElements();
  }, 5000);
  observePageChanges();

  function removeElements() {
    const elements = document.querySelectorAll("ytd-rich-shelf-renderer");
    elements.forEach((element) => {
      element.remove();
    });
    console.log(`YouTube Shelf Remover: Removed ${elements.length} element(s)`);
  }

  function observePageChanges() {
    // Create a new observer
    const observer = new MutationObserver((mutations) => {
      let needsRemoval = false;

      mutations.forEach((mutation) => {
        if (mutation.addedNodes && mutation.addedNodes.length > 0) {
          for (let i = 0; i < mutation.addedNodes.length; i++) {
            const node = mutation.addedNodes[i];

            // Check if the node is the element we want to remove
            if (
              node.nodeName &&
              node.nodeName.toLowerCase() === "ytd-rich-shelf-renderer"
            ) {
              needsRemoval = true;
              break;
            }

            // Check if any of the node's children are elements we want to remove
            if (node.querySelectorAll) {
              const elementsToRemove = node.querySelectorAll(
                "ytd-rich-shelf-renderer"
              );
              if (elementsToRemove.length > 0) {
                needsRemoval = true;
                break;
              }
            }
          }
        }
      });

      if (needsRemoval) {
        removeElements();
      }
    });

    // Start observing the document with the configured parameters
    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });
  }
})();
